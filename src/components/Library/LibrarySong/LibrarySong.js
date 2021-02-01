import React from 'react';
import * as styles from './LibrarySong.module.css'

const LibrarySong = ({song, songs, setSongs, setCurrentSong}) => {
  const songSelectHandler = () => {
    const newSongs = songs.map(thisSong => {
      return {...thisSong, active: thisSong.id === song.id}
    })
    setSongs(newSongs);
    setCurrentSong(song);
  }

  return (
    <div onClick={songSelectHandler} className={`${styles.librarySong} ${song.active ? styles.selected : ''}`}>
      <img src={song.cover} alt={song.name}/>
      <div className={styles.songDescription}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        <h5>{song.streams}</h5>
      </div>
    </div>
  )
}

export default LibrarySong;
