import { useLoaderData } from "react-router-dom";
import styles from "./ProductInfoPage.module.scss";
import Card from "../../components/card/Card";

export const fetchProductInfo = async (params) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params.id}`
  );
  const data = res.json();

  return data;
};

export default function ProductInfoPage() {
  const product = useLoaderData();

  return (
    <div className={styles.king}>
      <Card product={product} productInfoPage />
    </div>
  );
}
