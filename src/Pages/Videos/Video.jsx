import React from 'react'
import './Videos.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommende from '../../Components/Recommended/Recommende'
import { useParams } from 'react-router-dom'

const Video = () => {
  const { categoryId,videoId } = useParams();
 
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recommende/>
    </div>
  )
}

export default Video
