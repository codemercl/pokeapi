import { FC, ReactNode } from 'react';
import styled from './styles.module.scss';

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styled.layout}>{children}</div>
    );
};