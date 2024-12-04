import { useContext, useEffect } from "react"
import { IoMdPause, IoMdPlay } from "react-icons/io"
import { MdSkipNext, MdSkipPrevious } from "react-icons/md"
import { MusicContext } from "../context/MusicProvider"

const MusicControls = () => {

  const { currentMusic, nextMusic, prevMusic, audioRef, calculateTime, duration, setDuration, isPlaying, setIsPlaying, currentTime, setCurrentTime } = useContext(MusicContext);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
    }
  }, [currentMusic]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const prevMusicHandler = async () => {
    prevMusic();
    if (audioRef.current) {
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextMusicHandler = async () => {
    nextMusic();
    if (audioRef.current) {
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
  };

  return (
    <div className="mb-2 flex flex-col justify-center items-center">
      <input type="range" className="w-full" value={(currentTime / duration) * 100} onChange={handleSeek} />
      <div className="flex w-full justify-between mb-3">
        <span>{calculateTime(currentTime)}</span>
        <span>{calculateTime(duration)}</span>
      </div>
      <div className="flex items-center justify-center gap-4 mb-4">
        <MdSkipPrevious onClick={prevMusicHandler} className="w-9 h-9 text-white rounded-lg cursor-pointer bg-lime-500 hover:bg-lime-600" />
        {isPlaying ? <IoMdPause onClick={togglePlayPause} className="w-11 h-11 text-white rounded-lg cursor-pointer bg-lime-500 hover:bg-lime-600" /> : <IoMdPlay onClick={togglePlayPause} className="w-11 h-11 text-white rounded-lg cursor-pointer bg-lime-500 hover:bg-lime-600" />}
        <MdSkipNext onClick={nextMusicHandler} className="w-9 h-9 text-white rounded-lg cursor-pointer bg-lime-500 hover:bg-lime-600" />
      </div>
      <div className="mb-4 bg-slate-700 h-[5px] w-full"></div>
      <audio ref={audioRef} src={currentMusic.src} onTimeUpdate={handleTimeUpdate} onEnded={nextMusic} />
    </div>
  )
}

export default MusicControls