import React from "react";
import styles from "./CardBtn.module.scss";

export default function CardBtn() {
  return (
    <div className={styles.king}>
      <button className={styles.btnGreen}>add</button>
      <button className={styles.btnRed}>remove</button>
    </div>
  );
}
