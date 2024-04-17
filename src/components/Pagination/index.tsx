import React from 'react';
import { Controll } from './Controll';
import styled from './styles.module.scss';

const Wrapper: React.FC<& React.ComponentProps<'div'>> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <div {...rest} className={styled.wrapper}>
            {children}
        </div>
    );
};

export const P = {
    Wrapper: Wrapper,
    Controll: Controll,
};