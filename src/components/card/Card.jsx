import { Link } from "react-router-dom";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Card.module.scss";

export default function Card({ product, productInfoPage = false }) {
  return (
    <div className={productInfoPage ? styles.infoPageStyle : styles.king}>
      <div className={styles.imgContainer}>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          pagination={{ clickable: true }}
          navigation
          effect="fade"
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              {productInfoPage ? (
                <img src={image} alt={product.title} />
              ) : (
                <Link to={`/admin/product/${product.id}`}>
                  <img src={image} alt={product.title} />
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
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
