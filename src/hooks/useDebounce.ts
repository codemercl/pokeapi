import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDebounce = (initialValue: string, delay: number = 1000) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState(initialValue);
    const [debouncedInputValue, setDebouncedInputValue] = useState(initialValue);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedInputValue(inputValue);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [inputValue, delay]);

    useEffect(() => {
        if (!debouncedInputValue.trim()) return;

        if (debouncedInputValue !== initialValue) {
            navigate(`pokemon/${debouncedInputValue}`);
        }
    }, [debouncedInputValue, initialValue, navigate]);

    return { inputValue, handleInputChange };
};