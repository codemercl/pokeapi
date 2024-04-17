import styled from './styles.module.scss';

export const Types: React.FC<React.ComponentProps<'div'>> = ({
    children,
    ...props
}) => {
    return <div className={styled.typed} {...props}>{children}</div>;
};