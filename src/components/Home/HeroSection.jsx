import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import heroIMG1 from "../../assets/images/slider/slider1.png";
import heroIMG2 from "../../assets/images/slider/slider2.png";

const HeroSection = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-2 items-center py-8 md:py-14 px-10 sm:px-14 md:px-8 lg:px-20 xl:px-28 2xl:px-32 overflow-hidden w-screen h-fit">
      <div className=" order-2 md:order-1 flex flex-col gap-4">
        <h1 className="text-stone-800 text-5xl md:text-6xl font-semibold font-roboto">
          Safe & reliable connections
        </h1>
        <p className="text-stone-600 text-sm sm:text-base sm:mr-7 md:mr-0 xl:mr-10">
          An assembly of cables, connectors, and wires that is responsible for
          transmitting electrical signals or power to one or more devices, forms
          the essence of a wiring harness.
        </p>
        <div className="mt-4">
          <Link
            to={"/contact"}
            className="bg-primary text-white font-medium py-2 px-4 rounded border border-primary hover:opacity-90 duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setSwiper}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="w-full max-h-96 sm:max-h-[450px] object-cover  order-1 md:order-2"
      >
        <SwiperSlide>
          <img src={heroIMG1} alt="Slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroIMG2} alt="Slider 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
