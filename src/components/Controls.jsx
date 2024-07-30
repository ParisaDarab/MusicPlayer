import { useCallback, useEffect, useRef, useState } from 'react'
import { SlArrowLeft,SlArrowRight, SlControlPlay ,SlControlPause  } from "react-icons/sl";



export const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}) => {
  
    const [isPlaying, setIsPlaying] = useState(false)
    console.log();
    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
      );
  
      playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);


        useEffect(() => {
          if (isPlaying) {
            audioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
          } else {
            audioRef.current.pause();
            cancelAnimationFrame(playAnimationRef.current);
          }
        }, [isPlaying, audioRef,repeat]);


    const togglePlay=()=>{
        setIsPlaying((prev) => !prev);
    }

    console.log(isPlaying);

  return (
    <section>
        <button>
        <SlArrowLeft />
        </button>

        <button onClick={togglePlay}>
{
    isPlaying?<SlControlPause/>:<SlControlPlay/>
}
        </button>

        <button>
        <SlArrowRight />
        </button>
    </section>
  )
}
