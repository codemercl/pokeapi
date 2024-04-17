import React from 'react';
import { Title } from './Title';
import { Image } from './Image';
import styled from './styles.module.scss';
import { Types } from './Types';
import { Moves } from './Moves';

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

export const Card = {
    Wrapper: Wrapper,
    Image: Image,
    Title: Title,
    Types: Types,
    Moves: Moves
};