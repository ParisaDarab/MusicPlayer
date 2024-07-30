import { useEffect, useRef, useState } from 'react'
import { DisplaySong } from './components/DisplaySong'
import { Controls } from './components/Controls'
import { Progressbar } from './components/Progressbar'
import axios from 'axios'
const URL= 'https://api.7digital.com/1.2/'


function App() {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef=useRef()
  const progressBarRef=useRef()
  useEffect(() => {
  fetchSong()
  }, [])
  
 
const fetchSong=async()=>{
const response=await axios(URL)
const data=await response.data
console.log(data);
}
  return (
    <div className='container'>
      <DisplaySong audioRef={audioRef} progressBarRef={progressBarRef} setDuration={setDuration} />
      <Controls  {...{ audioRef, progressBarRef, duration, setTimeProgress }}/>
      <Progressbar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration}/>
    </div>
  )
}

export default App
