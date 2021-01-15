import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListOl, faMoon, faMusic, faRainbow, faSun} from "@fortawesome/free-solid-svg-icons";
import toggleTheme from "../../utils/handleTheme";
import styles from './Nav.module.css';

export default function Nav({setLibraryStatus}) {
  const [themeWindowOpen, setThemeWindowOpen] = useState(false);

  return (
    <nav>
      <h1>Waves</h1>
      <div className={styles.libraryButton}>
        <button onClick={() => setLibraryStatus(prevState => !prevState)}> Library
          <FontAwesomeIcon icon={faMusic}/>
        </button>
      </div>
      <div className={styles.theme}>
        <button onClick={() => setThemeWindowOpen(prevState => !prevState)}>
          <FontAwesomeIcon icon={faListOl}/>
        </button>
        {themeWindowOpen && (
          <div className={styles.themeWindow}>
            <button onClick={() => toggleTheme('dark')}>
              <FontAwesomeIcon icon={faMoon}/>
            </button>
            <button onClick={() => toggleTheme('light')}>
              <FontAwesomeIcon icon={faSun}/>
            </button>
            <button onClick={() => toggleTheme('gradient')}>
              <FontAwesomeIcon icon={faRainbow}/>
            </button>
          </div>
        )
        }
      </div>
    </nav>
  )
}
