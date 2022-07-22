import Image from 'next/image';
import React from 'react';
import { PhoenixContainer } from './styles';

const Phoenix: React.FC = () => {
  return (
    <PhoenixContainer>
      <Image layout="fill" src="/Phoenix.png" alt="Phoenix" />
    </PhoenixContainer>
  );
};

export default Phoenix;
