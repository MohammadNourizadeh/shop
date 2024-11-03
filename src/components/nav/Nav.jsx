import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.king}>
      <ul>
        <li>
          <Link to={"/"}>store</Link>
        </li>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/"}>about</Link>
        </li>
      </ul>
    </nav>
  );
}
