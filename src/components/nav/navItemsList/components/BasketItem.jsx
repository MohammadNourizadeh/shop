import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../../contexts/MainContext";
import ChoosedCard from "../../../../pages/basketPage/components/choosedCard/ChoosedCard";
import styles from "./BasketItem.module.scss";

export default function BasketItem({ focusedPage, onFocus }) {
  // context
  const { choosedProducts } = useContext(MainContext);

  return (
    <li className={styles.king}>
      <Link
        to={"/admin/basket"}
        onClick={() => {
          onFocus("basket");
        }}
        className={focusedPage === "basket" ? styles.focused : ""}
      >
        {choosedProducts.length > 0 && (
          <span className={styles.basketItemsCount}>
            {choosedProducts.length}
          </span>
        )}
        <FontAwesomeIcon icon={faBasketShopping} />
      </Link>

      <div className={styles.dropDown} id={styles.showDropDown}>
        {choosedProducts.map((choosedProduct) => (
          <ChoosedCard product={choosedProduct} key={choosedProduct.id} />
        ))}
      </div>
    </li>
  );
}
