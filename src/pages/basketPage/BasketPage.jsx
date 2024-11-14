import { useContext } from "react";
import CardBtn from "../../components/card/components/cardBtn/CardBtn";
import MainContext from "../../contexts/MainContext";
import styles from "./BasketPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

export default function BasketPage() {
  // context
  const { choosedProducts } = useContext(MainContext);

  return (
    <div className={styles.king}>
      {choosedProducts.map((choosedProduct) => (
        <div key={choosedProduct.id} className={styles.choosedCard}>
          <div className={styles.productImgContainer}>
            <img src={choosedProduct.images[0]} alt={choosedProduct.title} />
          </div>
          <div className={styles.productInfo}>
            <div>{choosedProduct.title}</div>
            <div className={styles.productPrice}>$ {choosedProduct.price}</div>
            <div>
              <CardBtn product={choosedProduct} />
            </div>
          </div>
          <div className={styles.productCountContainer}>
            <span>
              <FontAwesomeIcon icon={faMultiply} />
              {choosedProduct.count}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
