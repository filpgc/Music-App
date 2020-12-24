import React from 'react';
import * as styles from './Song.module.css'

const Song = ({currentSong, isPlaying}) => {
  return (
    <div className={styles.songContainer}>
      <img className={`${styles.animateCover} ${isPlaying ? '' : styles.pauseAnimation}`} src={currentSong.cover}
           alt={currentSong.name}/>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  )
}

export default Song;
