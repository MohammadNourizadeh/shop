import ImageSwiper from "../swiper/ImageSwiper";
import styles from "./Card.module.scss";
import CardBtn from "./components/cardBtn/CardBtn";
import CardInfo from "./components/cardInfo/CardInfo";

export default function Card({ product, productInfoPage = false }) {
  return (
    <div className={productInfoPage ? styles.infoPageStyle : styles.king}>
      <div className={styles.imgContainer}>
        <ImageSwiper
          images={product.images}
          imageAlt={product.title}
          isLink={productInfoPage}
          linkAddress={`/admin/product/${product.id}`}
        />
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
