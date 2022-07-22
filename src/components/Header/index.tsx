import React from 'react';
import { Gamepad, HeaderContainer, Name, UserContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <UserContainer>
        <Name>Olá, Jefté Medeiros</Name>
        <Gamepad />
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
