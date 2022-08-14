import React from 'react';
import { logoImg } from '../assets/images'
import Button from './Button'

function Login() {
    return (
        <div className="container-login">
            <div className="flex flex-col items-center m-auto w-[400px] h-screen overflow-hidden">
                <img src={logoImg} alt="logo" className="my-8 h-[130px]" />
                <h1 className="my-4 text-5xl font-bold">Nice to meet you!</h1>
                <h4 className="text-xl font-bold">Sign up for a free account.</h4>
                <form action="">
                    <div className="flex flex-col items-center">
                        <div className="h-[180px] w-[400px] bg-login rounded-lg items-center my-8">
                            <div className="flex flex-row-reverse h-[60px] w-full">
                                <input type="text" className="border__login-active border__login-active-one mx-1 w-[388px] h-full py-[4px] px-[16px] color-border bg-input font-normal" placeholder="Username" />
                                <div className="border_active w-1 h-full"></div>
                            </div>
                            <div className="flex flex-row-reverse h-[60px] w-full">
                                <input type="text" className="border__login-active border__login-active-two mx-1 w-[388px] h-full py-[4px] px-[16px] color-border bg-input font-normal" placeholder="Email"/>
                                <div className="border_active w-1 h-full"></div>
                            </div>
                            <div className="flex flex-row-reverse h-[60px] w-full">
                                <input type="password" className="border__login-active border__login-active-three mx-1 w-[388px] h-full py-[4px] px-[16px] color-border bg-input font-normal" placeholder="Password"/>
                                <div className="border_active w-1 h-full"></div>
                            </div>
                        </div>
                        <p className="text-xs text-center">
                            By signing up, you agree to our
                            <br />
                            <span className="c-primary cursor-pointer">Privacy Policy & Terms of Service</span>
                        </p>
                        <Button
                            className="mt-4 mb-4 py-1.5 px-4 min-w-[120px] bg-primary rounded-full text-black font-semibold text-lg"
                        >
                            Sign up
                        </Button>
                        <div className="flex items-center">
                            <p className="text-base my-8">Already have an account?</p>
                            <p className="text-base c-primary mx-1 cursor-pointer">Log In</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Login;