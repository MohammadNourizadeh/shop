import { useContext } from "react";
import { toast } from "react-toastify";
import MainContext from "../../../../contexts/MainContext";
import styles from "./CardBtn.module.scss";

export default function CardBtn({ product }) {
  // context
  const { choosedProducts, setChoosedProducts, setTotalPrices } =
    useContext(MainContext);

  // var
  const productIndex = choosedProducts.findIndex(
    (item) => item.id === product.id
  );

  // func
  const handelAdd = (product) => {
    if (productIndex === -1) {
      setChoosedProducts((prev) => [...prev, { ...product, count: 1 }]);
      toast.success("added");
    } else {
      const temp = [...choosedProducts];
      temp[productIndex].count++;
      setChoosedProducts(temp);
    }
    setTotalPrices((prev) => prev + product.price);
  };

  const handelRemove = (product) => {
    if (choosedProducts[productIndex]?.count > 1) {
      const temp = [...choosedProducts];
      temp[productIndex].count--;
      setChoosedProducts(temp);
    } else {
      const temp = choosedProducts.filter((item) => item.id !== product.id);
      setChoosedProducts(temp);
    }
    setTotalPrices((prev) => prev - product.price);
  };

  return (
    <div className={styles.king}>
      <button
        className={styles.btnGreen}
        onClick={() => {
          handelAdd(product);
        }}
      >
        add
      </button>
      {productIndex !== -1 && (
        <button
          className={styles.btnRed}
          onClick={() => {
            handelRemove(product);
          }}
        >
          remove
        </button>
      )}
    </div>
  );
}
