import { playIcon, pauseIcon, prevIcon, nextIcon } from '../assets/icons'
import { clovr } from '../assets/images'

function Audio() {
    return ( 
        <div className="fixed bottom-0 w-screen">
            <div className="p-8 relative flex justify-center items-center">
                <div className="absolute left-20">
                    <p className="opacity-50 text-sm text-white">Music by - lofi.co 2021 ©</p>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="flex">
                    <img src={prevIcon} className="cursor-pointer" alt="" />
                    <img src={playIcon} className="cursor-pointer w-[54px] h-[54px] ml-4 mr-4 transition-all ease-in-out duration-200" alt="" />
                    <img src={nextIcon} className="cursor-pointer" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Audio;