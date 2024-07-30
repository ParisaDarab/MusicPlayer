import React from 'react'
import Audio from'../assets/birds.mp3'
import Image from '../assets/AudioImage.jpg'

export const DisplaySong = ({audioRef,progressBarRef,setDuration}) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
    console.log(audioRef.current.duration);
      };
  return (
    <section>
         <img src={Image} alt='imageAvatar' className='image'/>
         <audio src={Audio} ref={audioRef} onLoadedMetadata={onLoadedMetadata} ></audio>

    </section>
  )
}
