import styled from 'styled-components';
import { Button, DocumentTextNunito } from '../../styles/Global/styles';

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

  @media screen and (max-width: 1500px) {
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

  @media screen and (max-width: 1500px) {
    font-size: 1.75rem;
  }
`;

export const NameInput = styled.input`
  max-width: 100%;
  outline-offset: 2px;

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

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1500px) {
    max-width: 18.75rem;
    font-size: 1.625rem;
  }
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 100%;
  gap: 1rem;
`;

export const GenerateCards = styled(Button)`
  padding: 0.75rem 0;
`;

export const SaveNameButton = styled(Button)`
  padding: 0.75rem 0;
`;
