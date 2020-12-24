import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {gql, useQuery} from "@apollo/client";
import * as styles from './Player.module.css';


const Player = ({currentSong, setCurrentSong, songs, setSongs, isPlaying, setIsPlaying}) => {

  const {loading, data} = useQuery(gql`
  query Song ($id: ID!) 
    {
      Songs(id: $id){
        audio
      }
    }
  `, {variables: {id: currentSong.id}});

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(prevState => !prevState);
  }

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration})
  }

  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = (e) => {
    const current = e.target.value;
    audioRef.current.currentTime = current
    setSongInfo({...songInfo, currentTime: current})
  }

  const skipTrackHandler = (direction) => {
    let index = songs.findIndex(song => song.id === currentSong.id);
    if (direction === 'skip-back') {
      index -= 1;
    }
    if (direction === 'skip-forward') {
      index += 1;
    }
    const nextSong = songs[index % songs.length < 0 ? (songs.length - 1) : index % songs.length];
    setCurrentSong(nextSong)
  }

  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play()
    }
  }

  useEffect(() => {
    //sets the current song as active, this allows to get the Library and the Player in sync.
    const newSongs = songs.map(thisSong => {
      return {...thisSong, active: currentSong.id === thisSong.id}
    });
    setSongs(newSongs);
    // eslint-disable-next-line
  }, [currentSong, setSongs])

  useEffect(() => {
    if (!loading && data) {
      console.log(data.Songs)
    }

  }, [loading, data])

  return (
    <div className={styles.player}>
      <div className={styles.timeControl}>
        <p> {getTime(songInfo.currentTime)} </p>
        <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler}
               type={'range'}/>
        <p>{getTime(songInfo.duration | 0)}</p>
      </div>
      <div className={styles.playControl}>
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} size={"2x"}
                         icon={faAngleLeft}/>
        <FontAwesomeIcon size={"2x"} icon={isPlaying ? faPause : faPlay}
                         onClick={playSongHandler}/>
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} size={"2x"}
                         icon={faAngleRight}/>
        {!loading && data && (
          <audio onLoadedData={autoPlayHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}
                 onEnded={() => skipTrackHandler('skip-forward')}
                 ref={audioRef}
                 src={data.Songs.audio}/>
        )}
      </div>
    </div>
  )
}

export default Player;
