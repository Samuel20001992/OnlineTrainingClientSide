import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper';

export default () => {
  return (
                 <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={500}
                  loop={true}
                  touchRatio={1.5}
                  navigation={true}
                  effect={"flip"}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathA}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathB}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathC}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                 </Swiper>
                   
  );
};