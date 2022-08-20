import { createContext, useContext, useRef, useState } from 'react'
import { BACKGROUND_LINKS_LIST, CHILL_LINKS } from '../constants'

function AppProvider({ children }) {
	const mainSongRef = useRef();
	const noisesRefs = useRef([]);
    const [background, setBackground] = useState({
        set: 'chill',
        scene: 'scene1',
        show1: true,
        day: true,
        rainy: false,
        link1: BACKGROUND_LINKS_LIST.find(
            (item) => 
                item.set === 'chill' && item.scene === 'scene1' &&
                item.day === true && item.rainy === false
        ).link,
        link2: ''
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(() => {
        const randomIndex = Math.floor(Math.random() * CHILL_LINKS.length)
        return {
            list: CHILL_LINKS,
            index: randomIndex,
            link: CHILL_LINKS[randomIndex]
        }
    });

    const value = { 
        background, setBackground,
        isPlaying, setIsPlaying,
        currentSong, setCurrentSong,
        mainSongRef,
        noisesRefs
    }

    return ( 
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
     );
}

export const AppContext = createContext()
export default AppProvider;
