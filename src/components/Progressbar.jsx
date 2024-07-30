import React from 'react'

export const Progressbar = ({progressBarRef,audioRef,timeProgress,duration,setTimeProgress}) => {
   const handleProgressChange=()=>{
    audioRef.current.currentTime=progressBarRef.current.value
    setTimeProgress( audioRef.current.currentTime);
   
   }
  return (
  
         <section className="progress">
    <span className="time current">{timeProgress.toFixed(1)}</span>
    <input type="range" className='slider'
     ref={progressBarRef}
     defaultValue="0"
     
     
     onChange={handleProgressChange}/>
    <span className="time">{duration.toFixed(1)}</span>
  </section>

  )

  
  
}



     
