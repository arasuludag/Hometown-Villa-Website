// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";

function getImageUrl(name: string) {
  return new URL(`../../assets/photos/${name}.jpg`, import.meta.url).href;
}

let images: string[] = [];
for (let i = 1; i < 11; i++) {
  images.push(getImageUrl("hometown" + i));
}

// import required modules
import { EffectCards } from "swiper";

export default function Cards() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((imageSRC, index) => (
          <SwiperSlide key={index}>
            <img src={imageSRC} alt="Örnek fotoğraflar"></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
