import { useContext } from "react";
import { MusicContext } from "../context/MusicProvider";

const MusicItem = ({ music }) => {

    const { currentMusic } = useContext(MusicContext);
    const isActive = currentMusic.src === music.src;

    return (
        <li className={`border-black border-b-[1px] ${isActive ? "text-white" : "text-black"}`}>
            <span>{music.singer} - {music.title}</span>
        </li>
    )
}

export default MusicItem