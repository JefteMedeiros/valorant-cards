import styled from 'styled-components';
import { DocumentTextNunito, DocumentTextValorant } from '../../styles/Global/styles';

export const AgentCardContainer = styled.div`
  position: relative;
  width: 11.875rem;
  height: 19.625rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 1500px) {
    width: 11.0625rem;
    height: 16.1956rem;
  }
`;

export const AgentCardScore = styled.div`
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;

  color: ${props => props.theme['red-500']};
  font-family: 'Valorant', sans-serif;
  font-size: 1.25rem;
`;

export const AgentCardChar = styled.div`
  position: relative;
  width: 16.0625rem;
  height: 14.5rem;
  margin: auto;
  bottom: 1.875rem;
  right: 1.875rem;
  transition: all 300ms;

  &:hover {
    bottom: 2.475rem;
  }

  img {
    position: absolute;
    object-fit: contain;
  }

  @media screen and (max-width: 1500px) {
    margin-bottom: -1rem;
    width: 14.8125rem;
    height: 13.25rem;
  }
`;

export const AgentCardName = styled(DocumentTextValorant)`
  text-align: center;
  font-size: 1.05rem;
`;

export const AgentCardDescription = styled(DocumentTextNunito)`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0.3125rem;
`;

export const AgentCardInteraction = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1500px) {
    margin-top: 0;
  }
`;
