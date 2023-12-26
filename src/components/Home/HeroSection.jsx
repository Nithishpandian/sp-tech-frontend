import React from "react";
import heroIMG1 from "../../assets/images/slider/slider-1.png";
import heroIMG2 from "../../assets/images/slider/slider-2.jpg";
import heroIMG3 from "../../assets/images/slider/slider-3.jpg";
import heroIMG4 from "../../assets/images/slider/slider-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HeroSection = () => {
  return (
    <div className=" overflow-hidden w-screen h-fit bg-stone-100">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" w-full h-full object-cover" src={heroIMG1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-full object-cover"  src={heroIMG2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-full object-cover"  src={heroIMG3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-full object-cover"  src={heroIMG4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
