import { useContext, useState } from "react"
import { FaVolumeHigh, FaVolumeXmark, FaXmark } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { MusicContext } from "../context/MusicProvider";
import MusicItem from "./MusicItem";

const MusicList = () => {

  const [close, setClose] = useState(true);
  const [volume, setVolume] = useState(100);
  const [mute, setMute] = useState(false);

  const { musicList, audioRef } = useContext(MusicContext);

  const volumeHighHandler = () => {
    setMute(true);
    setVolume(0);
    audioRef.current.volume = 0;
  }

  const volumeLowHandler = () => {
    setMute(false);
    setVolume(100);
    audioRef.current.volume = 1;
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = e.target.value / 100;
      if (audioRef.current.volume == 0) {
        setMute(true);
      } else {
        setMute(false)
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div>
          {close ? (<RxHamburgerMenu className="text-3xl cursor-pointer" onClick={() => setClose(false)} />) : (<FaXmark className="text-3xl cursor-pointer" onClick={() => setClose(true)} />)}
        </div>
        <div className="flex items-center gap-3">
          {mute ? (<FaVolumeXmark onClick={volumeLowHandler} />) : (<FaVolumeHigh onClick={volumeHighHandler} />)}
          <input type="range" className="w-36" min="0" max="100" value={volume} onChange={handleVolumeChange} />
          <span className="font-semibold w-8">{volume}</span>
        </div>
      </div>
      <div className="mb-4 bg-slate-700 h-[5px] w-full"></div>
      <ul>

        {!close && musicList.map((music) => (
          <MusicItem key={music.id} music={music} />
        ))}
      </ul>
    </>
  )
}

export default MusicList