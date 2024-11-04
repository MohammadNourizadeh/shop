import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ product, productInfoPage = false }) {
  // state
  const [imgCount, setImgCount] = useState(0);

  // func
  const imageChangeHandler = (images, direction) => {
    const countOfProductImg = images.length;
    if (direction === "right") {
      if (imgCount < countOfProductImg - 1) {
        setImgCount((prev) => prev + 1);
      }
    }
    if (direction === "left") {
      if (imgCount > 0) {
        setImgCount((prev) => prev - 1);
      }
    }
  };

  return (
    <div className={productInfoPage ? styles.infoPageStyle : styles.king}>
      <div className={styles.imgContainer}>
        <div
          className={styles.leftArrowCont}
          onClick={() => {
            imageChangeHandler(product.images, "left");
          }}
        >
          <FontAwesomeIcon icon={faLeftLong} />
        </div>
        <Link to={`/admin/product/${product.id}`}>
          <img src={product.images[imgCount]} alt={product.title} />
        </Link>
        <div
          className={styles.rightArrowCont}
          onClick={() => {
            imageChangeHandler(product.images, "right");
          }}
        >
          <FontAwesomeIcon icon={faRightLong} />
        </div>
      </div>
      <div className={styles.productInfoCont}>
        <div className={styles.titleContainer}>{product.title}</div>
        {productInfoPage && <div className={styles.descriptionContainer}>{product.description}</div>}
        <div className={styles.priceContainer}>$ {product.price}</div>
        <div className={styles.btnContainer}>
          <button>add</button>
        </div>
      </div>
    </div>
  );
}
