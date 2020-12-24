import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faMusic, faSun} from "@fortawesome/free-solid-svg-icons";
import styles from './Nav.module.css';

export default function Nav({setLibraryStatus}) {
  const [darkModeOn, setDarkModeOn] = useState(false);

  function toggleDarkMode() {
    !darkModeOn ? enableDarkModeStyle() : disableDarkModeStyle()
    setDarkModeOn(prevState => !prevState);
  }

  return (
    <nav>
      <h1>Waves</h1>
      <div className={styles.libraryButton}>
        <button onClick={() => setLibraryStatus(prevState => !prevState)}> Library
          <FontAwesomeIcon icon={faMusic}/>
        </button>
      </div>
      <button onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkModeOn ? faSun : faMoon}/>
      </button>
    </nav>
  )
}

function enableDarkModeStyle() {
  document.documentElement.style
    .setProperty('--main-color-background', 'rgb(52, 52, 52)');
  document.documentElement.style
    .setProperty('--main-color-font', 'rgb(255, 255, 255)');
  document.documentElement.style
    .setProperty('--main-color-selected', 'rgb(31,94,108)');
}

function disableDarkModeStyle() {
  document.documentElement.style
    .setProperty('--main-color-background', 'rgb(255, 255, 255)');
  document.documentElement.style
    .setProperty('--main-color-font', 'rgb(52, 52, 52)');
  document.documentElement.style
    .setProperty('--main-color-selected', 'rgba(173, 216, 230, 1)');
}
