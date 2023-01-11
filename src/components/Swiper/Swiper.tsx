// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";

let images: string[] = [];
for (let i = 1; i < 11; i++) {
  images.push("/photos/hometown" + i + ".jpg");
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
        {images.map((imageSRC) => (
          <SwiperSlide>
            <img src={imageSRC} alt="Örnek fotoğraflar"></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
