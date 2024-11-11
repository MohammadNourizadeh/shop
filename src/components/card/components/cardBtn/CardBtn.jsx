import React, { useContext } from "react";
import { toast } from "react-toastify";
import MainContext from "../../../../contexts/MainContext";
import styles from "./CardBtn.module.scss";

export default function CardBtn({ product }) {
  // context
  const { choosedProducts, setChoosedProducts } = useContext(MainContext);

  // var
  const productIndex = choosedProducts.findIndex(
    (item) => item.id === product.id
  );

  // func
  const handelAdd = () => {
    if (productIndex === -1) {
      setChoosedProducts((prev) => [...prev, { ...product, count: 1 }]);
      toast.success("added");
    } else {
      const temp = [...choosedProducts];
      temp[productIndex].count++;
      setChoosedProducts(temp);
    }
  };

  const handelRemove = () => {
    if (choosedProducts[productIndex]?.count > 1) {
      const temp = [...choosedProducts];
      temp[productIndex].count--;
      setChoosedProducts(temp);
    } else {
      const temp = choosedProducts.filter((item) => item.id !== product.id);
      setChoosedProducts(temp);
    }
  };

  return (
    <div className={styles.king}>
      <button className={styles.btnGreen} onClick={handelAdd}>
        add
      </button>
      {productIndex !== -1 && (
        <button className={styles.btnRed} onClick={handelRemove}>
          remove
        </button>
      )}
    </div>
  );
}
