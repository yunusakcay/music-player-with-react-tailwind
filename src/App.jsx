import './App.css'
import MusicControls from './components/MusicControls'
import MusicList from './components/MusicList'
import MusicPlayer from './components/MusicPlayer'
import Navbar from './components/Navbar'
import MusicProvider from './context/MusicProvider'

function App() {

  return (
    <MusicProvider >
      <div className='w-[40rem] flex flex-col mx-auto mt-[5rem] bg-emerald-500 rounded-lg p-4'>
        <Navbar />
        <MusicPlayer />
        <MusicControls />
        <MusicList />
      </div>
    </MusicProvider>
  )
}

export default App
