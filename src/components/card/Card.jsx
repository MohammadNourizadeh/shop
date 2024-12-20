import { useContext } from "react";
import ImageSwiper from "../swiper/ImageSwiper";
import styles from "./Card.module.scss";
import CardBtn from "./components/cardBtn/CardBtn";
import CardInfo from "./components/cardInfo/CardInfo";
import MainContext from "../../contexts/MainContext";
import ProductCount from "./components/productCount/ProductCount";

export default function Card({ product, productInfoPage = false }) {
  // context
  const { choosedProducts } = useContext(MainContext);

  // var
  const productIndex = choosedProducts.findIndex(
    (item) => item.id === product.id
  );

  return (
    <div className={productInfoPage ? styles.infoPageStyle : styles.king}>
      <div className={styles.imgContainer}>
        <ImageSwiper
          images={product.images}
          imageAlt={product.title}
          notLink={productInfoPage}
          linkAddress={`/admin/product/${product.id}`}
        />
        {productIndex !== -1 && (
          <ProductCount
            choosedProducts={choosedProducts}
            productIndex={productIndex}
          />
        )}
      </div>
      <div className={styles.productInfoCont}>
        <CardInfo
          price={product.price}
          title={product.title}
          isDescriptionOn={productInfoPage}
          description={product.description}
        />
        <CardBtn product={product} />
      </div>
    </div>
  );
}
