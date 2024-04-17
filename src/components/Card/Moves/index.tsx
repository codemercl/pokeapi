import styled from './styles.module.scss';

export const Moves: React.FC<React.ComponentProps<'div'>> = ({
    children,
    ...props
}) => {
    return <div className={styled.wrapper} {...props}>{children}</div>;
};