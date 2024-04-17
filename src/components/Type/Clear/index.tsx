import styled from './styles.module.scss';

export const Clear: React.FC<React.ComponentProps<'button'>> = ({
    children,
    ...props
}) => {
    return <button className={styled.button} {...props}>{children}</button>;
};