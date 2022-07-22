import Image from 'next/image';
import React from 'react';
import { GenerateCardsButton, Logo, MainContainer, NameForm, NameInput, NameSection, NameTitle } from './styles';

const MainInteraction: React.FC = () => {
  return (
    <MainContainer>
      <Logo>
        <Image priority layout="fill" src="/Logo.png" alt="Valorant Logo" />
      </Logo>
      <NameForm>
        <NameSection>
          <NameTitle>Digite seu nome</NameTitle>
          <NameInput type="text" />
        </NameSection>
        <GenerateCardsButton href="/Cards">Gerar Cards</GenerateCardsButton>
      </NameForm>
    </MainContainer>
  );
};

export default MainInteraction;
