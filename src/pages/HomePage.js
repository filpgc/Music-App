import React, {useEffect, useRef, useState} from "react";
import Library from "../components/Library/Library";
import Player from "../components/Player/Player";
import Song from "../components/Song/Song";
import Nav from "../components/Nav/Nav";
import {useQuery} from '@apollo/client';
import {EXCHANGE_SONGS} from "../graphql";
import {LoadingSpinner} from "../components/LoadingSpinner/LoadingSpinner";
import * as styles from './HomePage.module.css'


function HomePage() {

  const [songs, setSongs] = useState(undefined);
  const [currentSong, setCurrentSong] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  // fetch GraphQL data with the useQuery hook
  const {loading, data} = useQuery(EXCHANGE_SONGS);


  useEffect(() => {
    if (!loading && data && data.allSongs) {
      const currentData = data.allSongs.map(song => ({...song, active: false, id: song._id}));
      // set the first song as active
      currentData[0].active = true;
      setSongs(currentData);
      setCurrentSong(currentData[0]);
    }
  }, [loading, data]);


  const wrapperLibraryRef = useRef(null);
  // detects click outside Library Component within mobile screen screen size
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperLibraryRef.current && !wrapperLibraryRef.current.contains(event.target)) {
        if (libraryStatus && window.innerWidth < 520) {
          setLibraryStatus(prevState => !prevState);
        }
      }
    }

    window.addEventListener('click', handleClickOutside, false);
    return () => window.removeEventListener('click', handleClickOutside, false);
  }, [libraryStatus])


  if (loading || !data) return <LoadingSpinner/>

  return (
    <div>
      {currentSong && songs &&
      <main>
        <div className={`${libraryStatus ? styles.activeLibrary : styles.inactiveLibrary}`}>
          <Nav setLibraryStatus={setLibraryStatus}/>
          <Song currentSong={currentSong} isPlaying={isPlaying}/>
          <Player currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs}
                  isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        </div>
        <div ref={wrapperLibraryRef}>
          <Library libraryStatus={libraryStatus} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong}/>
        </div>
      </main>
      }
    </div>
  );
}

export default HomePage;
