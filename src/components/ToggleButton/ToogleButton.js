import React from "react";
import styles from "./ToggleButton.module.css";

export function ToggleButton(props) {
  return (
    <button onClick={props.onClick} className={props.isSelected ? styles.isSelected : null}>
      {props.children}
    </button>
  )
}
