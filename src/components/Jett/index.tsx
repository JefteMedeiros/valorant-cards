import Image from 'next/image';
import React from 'react';
import { JettContainer } from './styles';

const Jett: React.FC = () => {
  return (
    <JettContainer>
      <Image layout="fill" src="/Jett.png" alt="Jett" />
    </JettContainer>
  );
};

export default Jett;
