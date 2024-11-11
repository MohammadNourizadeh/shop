import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ProductCount.module.scss";

export default function ProductCount({ choosedProducts, productIndex }) {
  return (
    <div className={styles.king}>
      <span>
        <FontAwesomeIcon icon={faMultiply} />
        {choosedProducts[productIndex].count}
      </span>
    </div>
  );
}
