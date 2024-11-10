import ImageSwiper from "../swiper/ImageSwiper";
import styles from "./Card.module.scss";

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
        <div className={styles.btnContainer}>
          <button>add</button>
        </div>
      </div>
    </div>
  );
}
