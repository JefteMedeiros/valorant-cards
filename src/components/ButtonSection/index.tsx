import React from 'react';
import { CardsContainer, MixCardsButton, PullCardButton } from './styles';

const ButtonSection: React.FC = () => {
  return (
    <CardsContainer>
      <PullCardButton>Embaralhar</PullCardButton>
      <MixCardsButton>Puxar carta</MixCardsButton>
    </CardsContainer>
  );
};

export default ButtonSection;
