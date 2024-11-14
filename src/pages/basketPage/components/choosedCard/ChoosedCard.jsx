import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardBtn from "../../../../components/card/components/cardBtn/CardBtn";
import styles from "./ChoosedCard.module.scss";

export default function ChoosedCard({ product }) {
  return (
    <div className={styles.king}>
      <div className={styles.productImgContainer}>
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className={styles.productInfo}>
        <div>{product.title}</div>
        <div className={styles.productPrice}>$ {product.price}</div>
        <div>
          <CardBtn product={product} />
        </div>
      </div>

      <div className={styles.productCountContainer}>
        <span>
          <FontAwesomeIcon icon={faMultiply} />
          {product.count}
        </span>
      </div>
    </div>
  );
}
