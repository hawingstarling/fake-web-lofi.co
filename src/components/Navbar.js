import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faGuitar } from '@fortawesome/free-solid-svg-icons'
import { logoImg } from './../assets/images'
import {
    moonIcon,
    sunIcon,
    fullscreenIcon,
    volumeActive,
    share,
    volumeMuted,
    menu
} from './../assets/icons'
import Button from './Button'
import NavMenu from './NavMenu'
import { useState } from 'react'
function Navbar() {

    var time = new Date()
    const timer = time.toLocaleString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit' })

    return ( 
        <div className="bg-bg h-[80px]">
            <nav className="flex flex-row justify-between items-center h-[80px] py-0 px-[48px] w-screen">
                <div>
                    <a href="#">
                        <img src={logoImg} alt="logo" className="h-[100px]" />
                    </a>
                </div>
                <span className="flex-1"></span>
                <div className="flex flex-row items-center gap-4 justify-between">
                    <div className="flex items-center">
                        <span className="digits">
                            <p className="text-[14px]">{timer}</p>
                        </span>
                    </div>
                    <div>
                        <span className="flex items-center">
                            <input type="checkbox" id="toggle-button"
                                className="peer appearance-none invisible hiden "
                            />
                            <label htmlFor="toggle-button"
                                className="peer-checked:bg-[#f3a952] relative block w-[60px] h-[32px]
                                bg-[#BFBFBF] cursor-pointer rounded-[22px] overflow-hidden
                                switch-button"
                            >
                                <span><img className="day-night" src={moonIcon} alt="day-night" /></span>
                            </label>
                        </span>
                    </div>
                    <div className="premium">
                        <div className="flex items-center flex-row gap-[8px]">
                            <h3 className="text-[32px] leading-[32px] text-white font-bold">🚀</h3>
                            <p className="text-[14px] font-bold leading-[18px] text-white">Access +20 scenes <br />&amp; more with premium</p>
                        </div>
                    </div>
                    <Button className="border-none active:translate-y-[2px] rounded-[8px] text-[14px] px-[16px] py-[5px] text-white font-medium bg-signup h-[32px]">Sign up</Button>
                    <div className="flex flex-row items-center cursor-pointer gap-[8px]">
                        <NavMenu className="nav-menu activeButton" icon={share}></NavMenu>
                        <NavMenu className="nav-menu activeButton" icon={volumeActive}></NavMenu>
                        <NavMenu className="nav-menu activeButton" icon={fullscreenIcon}></NavMenu>
                        <div className="w-[32px] h-[32px]">
                            <img src={menu} alt="menu" />
                            {/* <div>
                                <a href="#">
                                    <div>
                                        <img src="" alt="" />
                                        <p>Login</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div>
                                        <img src="" alt="" />
                                        <p>Login</p>
                                    </div>
                                </a>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default Navbar;