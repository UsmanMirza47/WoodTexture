import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { Pagination, Navigation } from "swiper/modules";
import Spinner from "../../features/Icons/Spinner";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./Hero_Slider/slider.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.heroSlider);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((subData) => {
          const { id, title, subtitle, image, link, buttonText, loading } =
            subData;
          return (
            <SwiperSlide key={id}>
              <div className="relative">
                <img src={image} loading={loading} />
                <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col justify-center items-center gap-2">
                  <h1 className="font-bold text-[5vw] md:text-[4vw] text-gray-900">
                    {title}
                  </h1>
                  <p className="text-[2.5vw] md:text-[1.5vw]">{subtitle}</p>
                  <button className="bg-lime-400 text-[2.5vw] md:text-[1.5vw] font-bold py-2 px-4 hover:bg-lime-800 transition-all duration-300 ease-in-out">
                    {buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
