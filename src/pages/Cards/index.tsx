import React from 'react';
import AgentSection from '../../components/AgentSection';
import ButtonSection from '../../components/ButtonSection';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import { CardWrapper } from '../../styles/Global/styles';

const Cards: React.FC = () => {
  return (
    <>
      <Header />
      <CardWrapper>
        <Logo />
        <AgentSection />
        <ButtonSection />
      </CardWrapper>
    </>
  );
};

export default Cards;
