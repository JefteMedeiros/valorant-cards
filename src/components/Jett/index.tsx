import Image from 'next/image';
import React from 'react';
import { CharContainer } from '../../styles/Global/styles';

const Jett: React.FC = () => {
  return (
    <CharContainer>
      <Image layout="fill" src="/Jett.png" alt="Jett" />
    </CharContainer>
  );
}

export default Jett;