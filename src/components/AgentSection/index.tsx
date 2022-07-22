import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, EffectCards } from 'swiper';
import AgentCard from '../AgentCard';
import { KeyboardOptions, PaginationOptions } from 'swiper/types';

import { mock } from '../../mock/index';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

const AgentSection: React.FC = () => {
  const [dataMock, setDataMock] = useState(mock.data);
  const [change, setChange] = useState(false);

  const shuffle = (array: any[]) => {
    let m = array.length;
    let t: number;
    let i: number;
    let j: number;

    for (j = 0; j < m; j++) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    setChange(!change);
    return array;
  };

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
      {change !== -1 &&
        dataMock.map(data => {
          return (
            <SwiperSlide key={data.uuid}>
              <AgentCard
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
