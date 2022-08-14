

function NavMenu(props) {
    const { icon, className, activeButton } = props
    return ( 
        <img src={icon}             
            className={`transition-all duration-200 ease-linear hover:opacity-50 ${
                activeButton ? 'active:translate-y-0.5' : ''
        } ${className}`} 
            alt="icon-menu" />
     );
}

export default NavMenu;