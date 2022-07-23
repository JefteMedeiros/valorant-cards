import styled from 'styled-components';
import { DocumentTextNunito } from '../../styles/Global/styles';

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5.75rem);

  background: ${props => props.theme['brand-white']};
`;

export const Logo = styled.div`
  position: relative;
  width: 20.625rem;
  margin-bottom: 3.2775rem;
  height: 17.5625rem;

  @media screen and (max-width: 1400px) {
    width: 15rem;
    height: 12.25rem;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameSection = styled.div`
  display: flex;
  max-width: 20.625rem;
  align-items: center;
  flex-direction: column;
`;

export const NameTitle = styled(DocumentTextNunito)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3.375rem;

  @media screen and (max-width: 1400px) {
    font-size: 1.75rem;
  }
`;

export const NameInput = styled.input`
  max-width: 100%;
  outline-offset: 0.4375rem;

  color: ${props => props.theme['red-500']};
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 1.75rem;

  padding-bottom: 0.625rem;

  background: none;

  border: none;
  border-bottom: 7px solid ${props => props.theme['red-500']};
  border-radius: 8px;

  &:active {
    border: 3px solid 9px solid ${props => props.theme['red-500']};
  }

  @media screen and (max-width: 1400px) {
    max-width: 18.75rem;

    font-size: 1.625rem;
  }
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const GenerateCards = styled.button`
  margin-top: 3.5rem;
  text-decoration: none;
  text-align: center;
  width: 100%;
  background: transparent;
  border: 2px solid ${props => props.theme['red-500']};
  border-radius: 100px;
  transition: all 200ms;
  padding: 0.625rem 0.3125rem;
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.theme['red-500']};
  font-weight: bold;

  &:hover:enabled {
    transform: scale(1.03);
    color: ${props => props.theme['brand-white']};
    cursor: pointer;
    background: ${props => props.theme['red-500']};
  }

  &:active:enabled {
    outline-offset: 0.125rem;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const SaveNameButton = styled.button`
  margin-top: 3.5rem;
  text-align: center;
  width: 100%;
  background: transparent;

  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.theme['red-500']};
  font-weight: bold;

  border: 2px solid ${props => props.theme['red-500']};
  border-radius: 100px;
  transition: all 200ms;

  &:hover {
    transform: scale(1.03);
    color: ${props => props.theme['brand-white']};
    cursor: pointer;
    background: ${props => props.theme['red-500']};
  }

  &:active {
    outline-offset: 0.125rem;
  }
`;
