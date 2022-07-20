import Image from 'next/image';
import React from 'react';
import { LogoContainer } from './styles';

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Image priority layout="fill" src="/Logo.png" alt="Valorant Logo"/>
    </LogoContainer>
  );
}

export default Logo;