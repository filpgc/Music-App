import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListOl, faMusic} from "@fortawesome/free-solid-svg-icons";
import {ThemeGroup} from "./ThemeGroup/ThemeGroup";
import {ToggleButton} from "../ToggleButton/ToogleButton";
import styles from './Nav.module.css';

export default function Nav({libraryStatus, setLibraryStatus}) {
  const [themeWindowOpen, setThemeWindowOpen] = useState(false);

  return (
    <nav>
      <h1>Waves</h1>
      <div className={styles.libraryButton}>
        <ToggleButton onClick={() => setLibraryStatus(prevState => !prevState)} isSelected={libraryStatus}> Library
          <FontAwesomeIcon icon={faMusic}/>
        </ToggleButton>
      </div>
      <div className={styles.theme}>
        <button onClick={() => setThemeWindowOpen(prevState => !prevState)}>
          <FontAwesomeIcon icon={faListOl}/>
        </button>
        {themeWindowOpen && <ThemeGroup/>}
      </div>
    </nav>
  )
}
