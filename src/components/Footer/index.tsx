import React from 'react';
import { FooterContainer, FooterText, FooterTextYear } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        <FooterTextYear>&copy; 2022</FooterTextYear> Valorant Cards
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
