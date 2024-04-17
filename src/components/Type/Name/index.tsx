import styled from './styles.module.scss';

export const Name: React.FC<React.ComponentProps<'div'>> = ({
    children,
    ...props
}) => {
    return <div className={styled.title} {...props}>{children}</div>;
};