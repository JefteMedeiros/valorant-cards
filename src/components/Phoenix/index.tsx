import Image from 'next/image';
import React from 'react';
import { CharContainer } from '../../styles/Global/styles';


const Phoenix: React.FC = () => {
  return (
    <CharContainer>
      <Image layout='fill' src="/Phoenix.png" alt="Phoenix" />
    </CharContainer>
  );
}

export default Phoenix;