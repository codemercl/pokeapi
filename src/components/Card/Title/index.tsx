export const Title: React.FC<React.ComponentProps<'p'>> = ({
    children,
    ...props
}) => {
    return <p {...props}>{children}</p>;
};