import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, EffectCards } from 'swiper';
import AgentCard from '../AgentCard';
import { KeyboardOptions, PaginationOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import { DataContext } from '../../context';

const AgentSection: React.FC = () => {
  const { data, dataShuffle } = useContext(DataContext);

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index: any, className: any) => {
      return '<span class=' + className + '></span>';
    },
  };

  const keyboardOptions: KeyboardOptions = {
    enabled: true,
    onlyInViewport: true,
  };

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    410: {
      slidesPerView: 2,
    },
    620: {
      slidesPerView: 3,
    },
    880: {
      slidesPerView: 4,
    },
    1080: {
      slidesPerView: 5,
    },
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      keyboard={keyboardOptions}
      pagination={pagination}
      modules={[Pagination, Keyboard, EffectCards]}
      className="mySwiper"
      slidesPerView={5}
    >
      {data.map((data, key) => {
        return (
          <SwiperSlide key={data.uuid}>
            <AgentCard
              cardPoints={key + 1}
              // O personagem Sova tem um valor Null na API, strict do TS desativado. 
              skills={data.abilities}
              bio={data.description}
              category={data.role.displayName}
              name={data.displayName}
              char={data.fullPortraitV2}
              modalDescription={data.role.description}
              cardDescription={data.role.displayName}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AgentSection;
