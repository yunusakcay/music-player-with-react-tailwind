import { useContext } from "react"
import { MusicContext } from "../context/MusicProvider"

const MusicPlayer = () => {

  const { currentMusic } = useContext(MusicContext);

  return (
    <main>
      <div className="mb-2">
        <img src={currentMusic.image} alt={currentMusic.title} className="h-[30rem]" />
      </div>
      <div className="text-center font-bold text-slate-700">
        <h3>{currentMusic.title} - {currentMusic.singer}</h3>
      </div>
    </main>
  )
}

export default MusicPlayer