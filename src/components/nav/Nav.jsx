import styles from "./Nav.module.scss";
import NavItemsList from "./navItemsList/NavItemsList";
import ShopName from "./shopName/ShopName";

export default function Nav() {
  return (
    <nav className={styles.king}>
      <ShopName />
      <NavItemsList />
    </nav>
  );
}
