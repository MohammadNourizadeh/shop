import React from "react";
import styles from "./CardInfo.module.scss";

export default function CardInfo({
  title,
  isDescriptionOn = false,
  price,
  description,
}) {
  return (
    <>
      <div className={styles.titleContainer}>{title}</div>
      {isDescriptionOn && (
        <div className={styles.descriptionContainer}>{description}</div>
      )}
      <div className={styles.priceContainer}>$ {price}</div>
    </>
  );
}
