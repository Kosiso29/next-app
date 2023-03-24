
function Button(props: any) {
    const { children, ...pageProps } = props;
    return <button  {...pageProps}>{ children }</button>;
}

export default Button;
