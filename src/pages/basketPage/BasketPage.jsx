import { useContext } from "react";
import styles from "./BasketPage.module.scss";
import MainContext from "../../contexts/MainContext";

export default function BasketPage() {
  // context
  const { choosedProducts } = useContext(MainContext);

  return <div className={styles.king}></div>;
}
