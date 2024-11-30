import {
  faExclamationCircle,
  faHome,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavItemsList.module.scss";
import BasketItem from "./components/BasketItem";

export default function NavItemsList() {
  // state
  const [focusedPage, setFocusedPage] = useState("home");

  // func
  const handleFocusedPage = (pageName) => {
    setFocusedPage(pageName);
  };

  return (
    <ul className={styles.king}>
      <li>
        <Link
          className={focusedPage === "home" ? styles.focused : ""}
          to={"/admin/home"}
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
          className={focusedPage === "store" ? styles.focused : ""}
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
          className={focusedPage === "about" ? styles.focused : ""}
          to={"/"}
          onClick={() => {
            handleFocusedPage("about");
          }}
        >
          <FontAwesomeIcon icon={faExclamationCircle} />
          about
        </Link>
      </li>
      <BasketItem
        focusedPage={focusedPage}
        onFocus={(pageName) => {
          handleFocusedPage(pageName);
        }}
      />
    </ul>
  );
}
