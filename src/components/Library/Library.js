import React from 'react';
import LibrarySong from "./LibrarySong/LibrarySong";
import * as styles from './Library.module.css'

const Library = ({libraryStatus, songs, setCurrentSong, setSongs}) => {
  return (
    <div className={`${styles.library} ${libraryStatus ? styles.active : ''}`}>
      <h2>Library</h2>
      <div>
        {songs.map(song =>
          <LibrarySong song={song} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} key={song.id}/>
        )}
      </div>
    </div>
  )
}

export default Library;
