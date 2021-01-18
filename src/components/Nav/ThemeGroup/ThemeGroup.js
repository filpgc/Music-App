import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faRainbow, faSun} from "@fortawesome/free-solid-svg-icons";
import {ToggleButton} from "../../ToggleButton/ToogleButton";
import toggleTheme from "../../../utils/handleTheme";
import styles from "../Nav.module.css";

export function ThemeGroup() {
  const [theme, setTheme] = useState(null);
  //trigger re-render
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (theme !== null) {
      setTheme(theme)
    }
  }, [update]);

  function toggle(style) {
    toggleTheme(style);
    setUpdate(prevState => !prevState)
  }

  return (
    <div className={styles.themeWindow}>
      <ToggleButton onClick={() => toggle('dark')} isSelected={theme === 'dark'}>
        <FontAwesomeIcon icon={faMoon}/>
      </ToggleButton>
      <ToggleButton onClick={() => toggle('light')} isSelected={theme === 'light'}>
        <FontAwesomeIcon icon={faSun}/>
      </ToggleButton>
      <ToggleButton onClick={() => toggle('gradient')} isSelected={theme === 'gradient'}>
        <FontAwesomeIcon icon={faRainbow}/>
      </ToggleButton>
    </div>
  )
}
