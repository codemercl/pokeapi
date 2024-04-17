import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from './styles.module.scss';

interface LinksProps extends LinkProps {
    children: React.ReactNode;
}

export const Links: React.FC<LinksProps> = ({
    children,
    ...props
}) => {
    return <Link className={styled.wrapper} {...props}>{children}</Link>;
};