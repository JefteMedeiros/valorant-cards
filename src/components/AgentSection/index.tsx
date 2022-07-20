import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import AgentCard from "../AgentCard";

const AgentSection: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: any, className: any) => {
      return "<span class="+ className + "></span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={5}
      >
       <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
        <SwiperSlide>
          <AgentCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AgentSection;
