import { Link } from "react-router-dom";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSwiper({
  images,
  imageAlt,
  isLink = false,
  linkAddress,
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      pagination={{ clickable: true }}
      navigation
      effect={isLink ? "fade" : ""}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          {isLink ? (
            <img src={image} alt={imageAlt} />
          ) : (
            <Link to={linkAddress}>
              <img src={image} alt={imageAlt} />
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
