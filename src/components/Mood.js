import ReactSlider from 'react-slider'
import MoodItem from "./MoodItem";
import { useState } from 'react'
import { mixer, templates, scenes, tools, lofiPlayer, lofiPlayerx18, spotify } from '../assets/icons';
import { sleepyIcon, jazzyIcon, chillIcon, volumeMinIcon, volumeMaxIcon } from '../assets/icons';
import { menuRounded } from '../assets/images'
import { NOISE_ICONS } from '../constants';


function Mood() {
    const initialTab = { sleepy: false, jazzy: false, chill: false }
    const [moodTab, setMoodTab] = useState({ ...initialTab, chill: true });

    const handleMoodType = (type) => {
        switch (type) {
            case 'sleepy':
                setMoodTab({...initialTab, sleepy: true})
                break
            case 'jazzy':
                setMoodTab({...initialTab, jazzy: true})
                break
            case 'chill':
                setMoodTab({...initialTab, chill: true})
                break
            default:
                break
        }
    }

    return (
        <>
            <img src={menuRounded} className="absolute transform -scale-y-100 w-[60px] h-[120px] right-[24px] z-0 top-1/2 -translate-y-[157px]" alt="rounded menu" />
            <div className="absolute w-[60px] top-2/4 -translate-y-2/4 right-5 bg-color-100 rounded-xl py-4">
                <MoodItem iconSrc={mixer} isActive className="w-[21px] h-[20px]" />
                <MoodItem iconSrc={templates} isActive className="w-[21px] h-[20px]" />
                <MoodItem iconSrc={scenes} isActive className="w-[21px] h-[20px]" />
                <MoodItem iconSrc={tools} isActive className="w-[21px] h-[20px]" />
            </div>

            <div className="absolute top-2/4 -translate-y-2/4 right-[80px] w-[345px] rounded-3xl overflow-hidden bg-[#121212]">
                <div>
                    <div className="mx-8 flex items-center justify-between">
                        <h4 className="my-2 font-bold text-white text-xl">Mood</h4>
                        <div className="flex items-center">
                            <div className="flex flex-row bg-color-200 rounded-md invisible btn-hover-lofi">
                                <button>
                                    <img src={spotify} className="w-[18px] h-[18px] m-2" alt="spotify" />
                                </button>
                                <button>
                                    <img src={lofiPlayerx18} className="w-[18px] h-[18px] m-2" alt="lofiplayerx18" />
                                </button>
                            </div>
                            <button className="p-[18px] btn-lofi-player transition-all ease duration-300">
                                <img src={lofiPlayer} alt="lofi" />
                            </button>
                        </div>
                    </div>

                    <div className="flex my-4 mx-8 justify-between">
                        <MoodItem 
                            iconSrc={sleepyIcon}
                            isActive={moodTab.sleepy}
                            wrapperModel
                            classNameDiv="w-[150px] h-[150px] -top-6 -left-[19px]"
                            className="absolute -top-[28px] -left-[10px]"
                            label="Sleepy"
                            onMoodType={() => handleMoodType('sleepy')}
                        />
                        <MoodItem 
                            iconSrc={jazzyIcon}
                            isActive={moodTab.jazzy}
                            wrapperModel
                            classNameDiv="w-[150px] h-[150px] -top-6 -left-[19px]"
                            className="absolute -top-[28px] -left-[10px]"
                            label="Jazzy"
                            onMoodType={() => handleMoodType('jazzy')}
                        />
                        <MoodItem 
                            iconSrc={chillIcon}
                            isActive={moodTab.chill}
                            wrapperModel
                            classNameDiv="w-[150px] h-[150px] -top-6 -left-[19px]"
                            className="absolute -top-[28px] -left-[10px]"
                            label="Chill"
                            onMoodType={() => handleMoodType('chill')}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center m-8">
                    <img src={volumeMinIcon} alt="" className="relative -top-1 left-1" />
                    <ReactSlider 
                        className='h-3 w-[200px] bg-bg-200 mx-[18px] flex rounded-full'
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
                    <img src={volumeMaxIcon} alt="" className='relative -top-[3px]' />
                </div>
                <div>
                    <h4 className="my-2 mx-8 font-bold text-white text-xl">Sounds</h4>
                    <div className="mx-4 overflow-y-scroll max-h-[200px]">
                        { NOISE_ICONS.map((noise, index) => (
                            <div key={index} className="flex justify-between items-center my-4">
                                <p className="flex-1 mx-4 text-white text-sm opacity-40">{noise.label}</p>
                                <ReactSlider
                                    className='h-[24px] w-[144px] pr-2 bg-bg-200 mx-[18px] flex rounded-full'
                                    renderTrack={(props, state) => (
                                        <div 
                                            {...props}
                                            className={`inset-y-0 rounded-full ${state.index === 0 ? 'bg-primary' : 'bg-color-200'}`}
                                            index={state.index}
                                        />
                                    )}

                                    renderThumb={(props) => (
                                        <div {...props} className='h-6 w-6 rounded-full cursor-pointer outline-none'>
                                            <img src={noise.icon} alt='icon' />
                                        </div>
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center h-[45px] transition-all ease-in-out duration-200 cursor-pointer bg-color-200 hover:opacity-50">
                    <p className="opacity-50 text-sm text-white">Normal Mode</p>
                </div>
            </div>
        </>
     );
}

export default Mood;