import {
  faBasketShopping,
  faExclamationCircle,
  faHome,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../contexts/MainContext";
import styles from "./Nav.module.scss";

export default function Nav() {
  // context
  const { choosedProducts } = useContext(MainContext);

  return (
    <nav className={styles.king}>
      <ul>
        <li className={styles.shopName}>VogueShop</li>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHome} />
            home
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faStore} />
            store
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            about
          </Link>
        </li>
        <li className={styles.basketItemContainer}>
          <Link to={"/"} className={styles.basketItemLink}>
            {choosedProducts.length > 0 && (
              <span className={styles.basketItemsCount}>
                {choosedProducts.length}
              </span>
            )}
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
