import {
    faBasketShopping,
    faExclamationCircle,
    faHome,
    faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../contexts/MainContext";
import styles from "./NavItemsList.module.scss";

export default function NavItemsList() {
  // context
  const { choosedProducts } = useContext(MainContext);

  return (
    <ul className={styles.king}>
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
  );
}
