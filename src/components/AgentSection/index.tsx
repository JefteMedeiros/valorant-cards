import React, {useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { mock } from '../../mock/index';

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

  const [dataMock, setDataMock] = useState(mock.data)

  const {toggleModal} = useContext(Context);

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={5}
      >
        {dataMock.map((e) => {
          return (
            <SwiperSlide key={e.uuid}>
              <AgentCard name={e.displayName} image={e.fullPortraitV2} description={e.role.displayName} />
            </SwiperSlide>  
          )
        })}
      </Swiper>
      {toggleModal && <AgentCardModal />}
    </>
  );
};

export default AgentSection;
