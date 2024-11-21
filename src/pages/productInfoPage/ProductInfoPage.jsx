import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./ProductInfoPage.module.scss";
import BackBtn from "./components/backBtn/BackBtn";

export default function ProductInfoPage() {
  const product = useLoaderData();

  return (
    <div className={styles.king}>
      <BackBtn address={"/admin/home"} />
      <Card product={product} productInfoPage />
    </div>
  );
}
