import React from 'react';
import { Title } from './Title';
import { Group } from './Group';
import { Links } from './Links';
import { TextField } from './TextField';
import styled from './styles.module.scss';

const Wrapper: React.FC<& React.ComponentProps<'div'>> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <div className={styled.wrapper} {...rest}>
            {children}
        </div>
    );
};

export const L = {
    Wrapper: Wrapper,
    Group: Group,
    Title: Title,
    Links: Links,
    TextField: TextField
};