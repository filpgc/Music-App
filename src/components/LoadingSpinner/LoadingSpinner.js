import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import styles from './LoadingSpinner.module.css'

export function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon size={"3x"} spin icon={faSpinner}/>
    </div>
  )
}
