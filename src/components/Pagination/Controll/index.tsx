import { Pagination, PaginationProps } from 'antd';
import React from 'react';

interface PaginationWrapperProps extends PaginationProps { }

export const Controll: React.FC<PaginationWrapperProps> = ({ ...rest }) => {
    return (
        <Pagination
            {...rest}
            showSizeChanger={false}
        />
    );
};