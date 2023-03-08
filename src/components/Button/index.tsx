
function Button({ children, ...restProps }: any) {
    return <button  {...restProps}>{ children }</button>;
}

export default Button;
