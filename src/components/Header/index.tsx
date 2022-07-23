import React, { useEffect, useState } from 'react';
import { FaGamepad } from 'react-icons/fa';
import { HeaderContainer, LogoutIcon, Name, UserContainer } from './styles';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const killSession = () => {
    localStorage.clear();
    router.push('/');
  };

  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('name'));
  }, []);

  return (
    <HeaderContainer>
      <UserContainer>
        <FaGamepad />
        <Name>Olá, {name}</Name>
        <LogoutIcon onClick={killSession} />
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
