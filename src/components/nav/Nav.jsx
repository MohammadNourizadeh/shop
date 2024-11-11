import {
  faBasketShopping,
  faExclamationCircle,
  faHome,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.king}>
      <ul>
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
            <span className={styles.basketItemsCount}>2</span>
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
