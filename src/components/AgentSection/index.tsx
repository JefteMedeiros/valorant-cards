import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper";
import AgentCard from "../AgentCard";
import AgentCardModal from "../AgentCardModal";
import { KeyboardOptions, PaginationOptions } from "swiper/types";
import { Context } from "../../context";

import { mock } from "../../mock/index";

import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";

const AgentSection: React.FC = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index: any, className: any) => {
      return "<span class=" + className + "></span>";
    },
  };

  const keyboardOptions: KeyboardOptions = {
    enabled: true,
    onlyInViewport: true,
  };

  const breakpoints = {
    0: {
      slidesPerView: 1
    },
    660: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 5,
    }
  }

  const dataMock = mock.data;

  const { toggleModal } = useContext(Context);

  return (
    <Swiper
      breakpoints={breakpoints}
      keyboard={keyboardOptions}
      pagination={pagination}
      modules={[Pagination, Keyboard]}
      className="mySwiper"
      slidesPerView={5}
    >
      {dataMock.map((e) => {
        return (
          <>
            <SwiperSlide key={e.uuid}>
              <AgentCard
                bio={e.description}
                category={e.role.displayName}
                name={e.displayName}
                char={e.fullPortraitV2}
                modalDescription={e.role.description}
                cardDescription={e.role.displayName}
              />
            </SwiperSlide>
            {toggleModal && (
              <AgentCardModal
                modalDescription={e.role.description}
                name={e.displayName}
                bio={e.description}
                category={e.role.displayName}
                char={e.fullPortraitV2}
              />
            )}
          </>
        );
      })}
    </Swiper>
  );
};

export default AgentSection;
