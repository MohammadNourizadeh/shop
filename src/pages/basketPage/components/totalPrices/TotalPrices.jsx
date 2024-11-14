import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";
import styles from "./TotalPrices.module.scss";

export default function TotalPrices() {
  // context
  const { totalPrices } = useContext(MainContext);

  return (
    <div className={styles.king}>
      <span>total:</span> <span>$ {totalPrices}</span>
    </div>
  );
}
