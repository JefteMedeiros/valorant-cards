import Image from 'next/image';
import React from 'react';
import { Logo, MainContainer, NameInput, NameSection, NameTitle, SeeCardsButton } from './styles';

const MainInteraction: React.FC = () => {
  return (
    <MainContainer>
      <Logo>
        <Image layout="fill" src="/Logo.png" alt="Valorant Logo"/>
      </Logo>
      <form action="">
        <NameSection>
          <NameTitle>
            Digite seu nome
          </NameTitle>
          <NameInput type="text" />
        </NameSection>
        <SeeCardsButton type="submit">
          Ver Cards
        </SeeCardsButton>
      </form>
    </MainContainer>
  );
}

export default MainInteraction;