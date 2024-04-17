import React from 'react';
import { Clear } from './Clear';
import { Name } from './Name';
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

export const T = {
    Wrapper: Wrapper,
    Name: Name,
    Clear: Clear,
};