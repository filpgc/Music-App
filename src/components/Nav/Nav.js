import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListOl, faMoon, faMusic, faRainbow, faSun} from "@fortawesome/free-solid-svg-icons";
import styles from './Nav.module.css';

export default function Nav({setLibraryStatus}) {
  const [themeWindowOpen, setThemeWindowOpen] = useState(false);

  function toggleTheme(style) {
    switch (style) {
      case "dark":
        enableDarkModeStyle();
        break;
      case "light":
        enableLightModeStyle();
        break;
      case "gradient":
        enableGradientModeStyle();
        break;
      default:
        enableLightModeStyle();
    }
  }

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

function enableDarkModeStyle() {
  document.documentElement.style
    .setProperty('--main-color-background', 'rgb(52, 52, 52)');
  document.documentElement.style
    .setProperty('--main-color-font', 'rgb(255, 255, 255)');
  document.documentElement.style
    .setProperty('--main-color-selected', 'rgb(31,94,108)');
}

function enableLightModeStyle() {
  document.documentElement.style
    .setProperty('--main-color-background', 'rgb(255, 255, 255)');
  document.documentElement.style
    .setProperty('--main-color-font', 'rgb(52, 52, 52)');
  document.documentElement.style
    .setProperty('--main-color-selected', 'rgba(173, 216, 230, 1)');
}

function enableGradientModeStyle() {
  document.documentElement.style
    .setProperty('--main-color-background', 'linear-gradient(to left, #355c7d, #6c5b7b, #c06c84)');
  document.documentElement.style
    .setProperty('--main-color-font', 'rgb(255, 255, 255)');
  document.documentElement.style
    .setProperty('--main-color-selected', 'rgb(104, 86, 122)');
}
