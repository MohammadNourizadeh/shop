import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./ProductInfoPage.module.scss";

export default function ProductInfoPage() {
  const product = useLoaderData();

  return (
    <div className={styles.king}>
      <Card product={product} productInfoPage />
    </div>
  );
}
