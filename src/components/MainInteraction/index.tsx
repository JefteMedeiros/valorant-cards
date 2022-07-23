import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { DataContext } from '../../context';
import { GenerateCards, HomeButtonContainer, Logo, MainContainer, NameContainer, NameInput, NameSection, NameTitle, SaveNameButton } from './styles';
import { useRouter } from 'next/router';

const MainInteraction: React.FC = () => {
  const { handleSetUsername, username } = useContext(DataContext);

  const router = useRouter();

  const [name, setName] = useState(null);

  const saveNameToLocalStorage = () => {
    setName(username);
    localStorage.setItem('name', username);
  };

  useEffect(() => {
    setName(localStorage.getItem('name'));
  }, []);

  return (
    <MainContainer>
      <Logo>
        <Image layout="fill" src="/Logo.png" alt="Valorant Logo" priority />
      </Logo>
      <NameContainer>
        <NameSection>
          <NameTitle>Digite seu nome</NameTitle>
          <NameInput type="text" onChange={e => handleSetUsername(e.target.value)} />
        </NameSection>
        <HomeButtonContainer>
          <SaveNameButton onClick={saveNameToLocalStorage}>Salvar Nome</SaveNameButton>
          <GenerateCards disabled={!name} onClick={() => router.push('/Cards')}>
            Gerar cards
          </GenerateCards>
        </HomeButtonContainer>
      </NameContainer>
    </MainContainer>
  );
};

export default MainInteraction;
