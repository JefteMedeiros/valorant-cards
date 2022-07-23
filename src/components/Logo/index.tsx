import Image from 'next/image';
import React from 'react';
import { LogoContainer } from './styles';

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Image layout="fill" src="/Logo.png" alt="Valorant Logo" priority />
    </LogoContainer>
  );
};

export default Logo;
