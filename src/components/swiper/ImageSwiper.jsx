import { Link } from "react-router-dom";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSwiper({
  images,
  imageAlt,
  notLink,
  linkAddress,
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      pagination={{ clickable: true }}
      navigation
      effect={notLink ? "fade" : ""}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          {notLink ? (
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
