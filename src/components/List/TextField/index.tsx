import React, { InputHTMLAttributes } from 'react';
import styled from './styles.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField: React.FC<TextFieldProps> = ({ ...rest }) => {
    return <input className={styled.wrapper} type="text" {...rest} />;
};