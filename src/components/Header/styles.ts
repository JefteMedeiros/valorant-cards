import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 0.75rem 1.875rem;
  background: ${props => props.theme['red-500']};
  color: white;

  @media screen and (max-width: 1600px) {
    background: transparent;
    color: ${props => props.theme['red-500']};
  }
`;

export const UserContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
`;

export const LogoutIcon = styled(IoExitOutline)`
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Name = styled.h1`
  font-family: 'Nunito', sans-serif;
  text-align: right;
  font-size: 1.25rem;
`;
