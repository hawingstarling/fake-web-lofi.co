import ReactSlider from 'react-slider'
import { useEffect, useState, useRef } from 'react'
import { keyboard } from '../assets/audio/keyboard'

function Sound() {
    const [onSound, setOnSound] = useState(false);
    const soundRef = useRef()

    useEffect(() => {
        soundRef.current.pause()
        soundRef.current.volumn = 0.5
    }, [soundRef]);

    const handleOnSound = () => {
        setOnSound(!onSound)

        if (soundRef.current.pause) {
            soundRef.current.play()
        } else {
            soundRef.current.pause()
        }
    }

    return ( 
        <div className="absolute top-1/2 left-1/2 cursor-pointer w-[200px]">
            <div className="flex flex-col justify-center items-center wrapper-sound">
                <div 
                    className="flex justify-center items-center rounded-full border-solid border-[3px] border-white w-8 h-8 circle-hover"
                    onClick={handleOnSound}
                >
                    <div className="w-[18px] h-[18px] bg-white rounded-full invisible circle-in"></div>
                </div>
                <div className="flex flex-col justify-center items-center bg-color-150 rounded-lg mt-2 min-w-[120px] p-2 scale-0 invisible label-sound">
                    <h6 className="text-white font-medium">Summer storm</h6>
                    {onSound && (
                        <ReactSlider
                            className='h-3 my-2 w-[129px] bg-bg-200 mx-[18px] flex rounded-full'
                            renderTrack={(props, state) => (
                                <div
                                    {...props}
                                    className={`inset-y-0 rounded-full ${state.index === 0 ? 'bg-primary' : 'bg-color-200'}`}
                                    index={state.index}
                                />
                            )}

                            renderThumb={(props) => (
                                <div
                                    {...props}
                                    className="-top-0.5 w-4 h-4 cursor-pointer rounded-full bg-white outline-none"
                                />
                            )}  
                        />
                    )}
                </div>
            </div>
            <audio 
                src={keyboard}
                ref={soundRef}
                preload="auto"
                loop
            />
        </div>
    );
}

export default Sound;