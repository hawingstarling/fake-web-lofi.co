
function Button(props) {
    const {
        children,
        className,
        onClick,
        activeButton,
        type
    } = props
    return ( 
        <button
            type={type}
            onClick={onClick}
            className={`transition-all duration-200 ease-linear hover:opacity-50 ${
                activeButton ? 'active:translate-y-0.5' : ''
            } ${className}`}
        >
            {children}
        </button>
     );
}

export default Button;