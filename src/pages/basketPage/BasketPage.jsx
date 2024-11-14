import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import styles from "./BasketPage.module.scss";
import ChoosedCard from "./components/choosedCard/ChoosedCard";

export default function BasketPage() {
  // context
  const { choosedProducts } = useContext(MainContext);

  return (
    <div className={styles.king}>
      {choosedProducts.map((choosedProduct) => (
        <ChoosedCard product={choosedProduct} key={choosedProduct.id} />
      ))}
    </div>
  );
}
