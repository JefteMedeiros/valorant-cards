import Image from 'next/image';
import React from 'react';
import { Logo, MainContainer, NameForm, NameInput, NameSection, NameTitle, SeeCardsButton } from './styles';

const MainInteraction: React.FC = () => {
  return (
    <MainContainer>
      <Logo>
        <Image priority layout="fill" src="/Logo.png" alt="Valorant Logo"/>
      </Logo>
      <NameForm>
        <NameSection>
          <NameTitle>
            Digite seu nome
          </NameTitle>
          <NameInput type="text" />
        </NameSection>
        <SeeCardsButton href="/Cards">
          Ver Cards
        </SeeCardsButton>
      </NameForm>
    </MainContainer>
  );
}

export default MainInteraction;