import ImageSwiper from "../swiper/ImageSwiper";
import styles from "./Card.module.scss";
import CardBtn from "./components/cardBtn/CardBtn";

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
        <div className={styles.titleContainer}>{product.title}</div>
        {productInfoPage && (
          <div className={styles.descriptionContainer}>
            {product.description}
          </div>
        )}
        <div className={styles.priceContainer}>$ {product.price}</div>
        <CardBtn />
      </div>
    </div>
  );
}
