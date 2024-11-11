import {
  faBasketShopping,
  faExclamationCircle,
  faHome,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../contexts/MainContext";
import styles from "./NavItemsList.module.scss";

export default function NavItemsList() {
  // context
  const { choosedProducts } = useContext(MainContext);

  // state
  const [focusedpage, setFocusedPage] = useState("home");

  // func
  const handleFocusedPage = (pageName) => {
    setFocusedPage(pageName);
  };

  return (
    <ul className={styles.king}>
      <li>
        <Link
          className={focusedpage === "home" ? styles.focused : ""}
          to={"/"}
          onClick={() => {
            handleFocusedPage("home");
          }}
        >
          <FontAwesomeIcon icon={faHome} />
          home
        </Link>
      </li>
      <li>
        <Link
          className={focusedpage === "store" ? styles.focused : ""}
          to={"/"}
          onClick={() => {
            handleFocusedPage("store");
          }}
        >
          <FontAwesomeIcon icon={faStore} />
          store
        </Link>
      </li>
      <li>
        <Link
          className={focusedpage === "about" ? styles.focused : ""}
          to={"/"}
          onClick={() => {
            handleFocusedPage("about");
          }}
        >
          <FontAwesomeIcon icon={faExclamationCircle} />
          about
        </Link>
      </li>
      <li className={styles.basketItemContainer}>
        <Link
          to={"/"}
          onClick={() => {
            handleFocusedPage("basket");
          }}
          className={focusedpage === "basket" ? styles.focused : ""}
        >
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
