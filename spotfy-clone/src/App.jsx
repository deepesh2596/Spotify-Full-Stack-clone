import { useContext, useState } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'
import './App.css'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const { audioRef, track, songsData } = useContext(PlayerContext)
  return (
    <>
      <div className='h-screen bg-[#000000]'>
        {
          songsData.lenght !== 0
            ? <>
              <div className='h-[90%] flex'>
                <Sidebar />
                <Display />
              </div>
              <Player />
            </>
            : null
        }

        <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
      </div>
    </>
  )
}

export default App
