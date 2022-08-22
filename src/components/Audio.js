import Button from './Button';
import { AppContext } from '../context/AppContext';
import { NOISE_LINKS } from '../constants'
import { nextSong, prevSong } from '../utils/randomMainSong'
import { playIcon, pauseIcon, prevIcon, nextIcon } from '../assets/icons'
import { clovr } from '../assets/images'
import { useContext, useEffect } from 'react';

function Audio() {
    const { isPlaying, setIsPlaying, currentSong, setCurrentSong, mainSongRef, noisesRefs } = useContext(AppContext)

    useEffect(() => {
		mainSongRef.current.volume = 0.5;
	}, [mainSongRef]);

    const handlePlaying = () => {
        setIsPlaying(true)
        console.log('isPlaying currentSong: ', currentSong);
        if (mainSongRef.current.paused) mainSongRef.current.play()
    }

    const handlePause = () => {
        setIsPlaying(false)
        console.log('isPause currentSong: ', currentSong);
        if (!mainSongRef.current.paused) mainSongRef.current.pause()
    }

    return ( 
        <div className="fixed bottom-0 w-screen">
            <div className="p-8 relative flex justify-center items-center">
                <div className="absolute left-20">
                    <p className="opacity-50 text-sm text-white">Music by - lofi.co 2021 ©</p>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="flex">
                    <Button
                        onClick={() => {
                            console.log('prevSong: ', currentSong);
                            setCurrentSong({
                                ...currentSong,
                                index: prevSong(currentSong.list, currentSong.index).index,
                                link: prevSong(currentSong.list, currentSong.index).link

                            })
                        }}
                    >
                        <img src={prevIcon} className="cursor-pointer" alt="" />
                    </Button>
                    {!isPlaying && (
                        <Button
                            onClick={handlePlaying}
                        >
                            <img src={playIcon} className="cursor-pointer w-[54px] h-[54px] ml-4 mr-4 transition-all ease-in-out duration-200" alt="" />
                        </Button>                
                    )}
                    {isPlaying && (
                        <Button
                            onClick={handlePause}
                        >
                            <img src={pauseIcon} className="cursor-pointer w-[54px] h-[54px] ml-4 mr-4 transition-all ease-in-out duration-200" alt="" />
                        </Button>    
                    )}
                    <Button
                        onClick={() => {
                            console.log('nextSong: ', currentSong);
                            let newSong = setCurrentSong({
                                ...currentSong,
                                index: nextSong(currentSong.list, currentSong.index).index,
                                link: nextSong(currentSong.list, currentSong.index).link
                            })
                            console.log('nextSong while click: ', newSong);
                            return newSong
                        }}
                    >
                        <img src={nextIcon} className="cursor-pointer" alt="" />
                    </Button>
                </div>
            </div>

            <audio 
                ref={mainSongRef}
                src={currentSong.link}
                preload="auto"
                onEnded={() =>
					setCurrentSong({
						...currentSong,
						index: nextSong(currentSong.list, currentSong.index).index,
						link: nextSong(currentSong.list, currentSong.index).link,
					})
				}
            />
            {NOISE_LINKS.map((noise, index) => (
                <audio 
                    key={index}
                    src={noise}
                    ref={(el) => {
                        noisesRefs.current[index] = el
                    }}
                    autoPlay
                    loop
                    muted
                />
            ))}
        </div>
     );
}

export default Audio;