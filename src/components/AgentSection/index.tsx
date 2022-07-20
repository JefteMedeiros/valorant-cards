import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import AgentCard from "../AgentCard";
import AgentCardModal from "../AgentCardModal";
import { Context } from "../../context";

const AgentSection: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: any, className: any) => {
      return "<span class=" + className + "></span>";
    },
  };

  const {toggleModal} = useContext(Context);

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
        
      </Swiper>
      {toggleModal && <AgentCardModal />}
    </>
  );
};

export default AgentSection;
