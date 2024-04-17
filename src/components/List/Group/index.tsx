import React, { HTMLAttributes } from 'react';
import styled from './styles.module.scss';

interface GroupProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Group: React.FC<GroupProps> = React.memo(({ children, ...rest }) => {
    return <div className={styled.group} {...rest}>{children}</div>;
});