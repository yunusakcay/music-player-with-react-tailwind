import { useContext } from "react";
import { FaMusic } from "react-icons/fa"
import { MusicContext } from "../context/MusicProvider";

const Navbar = () => {

  const { allMusic, popMusic, rockMusic, foreignMusic, audioRef, setIsPlaying } = useContext(MusicContext)

  const filterAllMusicHandler = async () => {
    allMusic();
    if (audioRef.current) {
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const filterPopMusicHandler = async () => {
    popMusic();
    if (audioRef.current) {
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const filterRockMusicHandler = async () => {
    rockMusic();
    if (audioRef.current) {
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const filterForeignMusicHandler = async () => {
    foreignMusic();
    if (audioRef.current) {
      await audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <header className="flex flex-col items-center mb-3">
      <div className="flex justify-center items-center gap-6 w-full mb-2">
        <FaMusic className="text-white text-xl" />
        <h2 className="text-xl text-slate-700 font-extrabold">MUSIC PLAYER</h2>
        <FaMusic className="text-white text-xl" />
      </div>
      <div className="mb-4 bg-slate-700 h-[5px] w-[10rem]"></div>
      <div className="flex gap-2 text-white w-full items-center justify-center">
        <button onClick={filterAllMusicHandler} className="bg-lime-500 rounded w-1/4 py-1 hover:bg-lime-600">All Music</button>
        <button onClick={filterPopMusicHandler} className="bg-lime-500 rounded w-1/4  py-1 hover:bg-lime-600">Pop Music</button>
        <button onClick={filterRockMusicHandler} className="bg-lime-500 rounded w-1/4 py-1 hover:bg-lime-600">Rock Music</button>
        <button onClick={filterForeignMusicHandler} className="bg-lime-500 rounded w-1/4 py-1 hover:bg-lime-600">Foreign Music</button>
      </div>
    </header>
  )
}

export default Navbar