import { createContext, useReducer, useRef, useState } from "react"
import musicData from "../musicData";

export const MusicContext = createContext();

const musicReducer = (state, action) => {
    switch (action.type) {
        case "ALL": {
            return { ...state, musicList: state.allMusic, currentMusicIndex: 0 };
        }

        case "POP": {
            const popList = state.allMusic.filter((music) => music.type === "pop");
            return { ...state, musicList: popList, currentMusicIndex: 0 };
        }

        case "ROCK": {
            const rockList = state.allMusic.filter((music) => music.type === "rock");
            return { ...state, musicList: rockList, currentMusicIndex: 0 };
        }

        case "FOREIGN": {
            const foreignList = state.allMusic.filter((music) => music.type === "yabancı");;
            return { ...state, musicList: foreignList, currentMusicIndex: 0 };
        }

        case "NEXT": {
            const nextIndex = (state.currentMusicIndex + 1) % state.musicList.length;
            return { ...state, currentMusicIndex: nextIndex };
        }

        case "PREV": {
            const prevIndex = (state.currentMusicIndex - 1 + state.musicList.length) % state.musicList.length;
            return { ...state, currentMusicIndex: prevIndex };
        }

        default:
            return state;
    }
}

const defaultMusicState = {
    allMusic: musicData,
    musicList: musicData,
    currentMusicIndex: 0,
}

const MusicProvider = ({ children }) => {

    const [musicState, dispatchMusicAction] = useReducer(musicReducer, defaultMusicState);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef();

    const calculateTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}.${seconds < 10 ? '0' : ''}${seconds}`;;
    }

    const musicContext = {
        musicList: musicState.musicList,
        currentMusic: musicState.musicList[musicState.currentMusicIndex],
        allMusic: () => { dispatchMusicAction({ type: "ALL" }); },
        popMusic: () => { dispatchMusicAction({ type: "POP" }); },
        rockMusic: () => { dispatchMusicAction({ type: "ROCK" }); },
        foreignMusic: () => { dispatchMusicAction({ type: "FOREIGN" }); },
        nextMusic: () => { dispatchMusicAction({ type: "NEXT" }); },
        prevMusic: () => { dispatchMusicAction({ type: "PREV" }); },
        audioRef,
        duration,
        setDuration,
        isPlaying,
        setIsPlaying,
        calculateTime,
        currentTime,
        setCurrentTime
    }

    return (

        <MusicContext.Provider value={musicContext}>
            {children}
        </MusicContext.Provider>

    )
}

export default MusicProvider