import React, {useState} from 'react';
import LibrarySong from "./LibrarySong/LibrarySong";
import * as styles from './Library.module.css'

const Library = ({libraryStatus, songs, setCurrentSong, setSongs}) => {
  const [inputValue, setInputValue] = useState('');
  const filteredSongs = songs.filter(song => autoComplete(song));

  function autoComplete(song) {
    const names = song.name.split(' ');
    const artists = song.artist.split(' ');
    const words = [...names, ...artists]
    for (const word of words) {
      if (word.toLowerCase().startsWith(inputValue.toLowerCase()))
        return true;
    }
  }

  return (
    <div className={`${styles.library} ${libraryStatus ? styles.active : ''}`}>
      <h2>Library</h2>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Search..." value={inputValue}
               onChange={event => setInputValue(event.target.value)}/>
      </div>
      <div>
        {filteredSongs.length > 0 ? filteredSongs.map(song =>
            <LibrarySong song={song} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong}
                         key={song.id}/>
          ) :
          <div className={styles.noResults}>
            <p>Try again :(</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Library;
