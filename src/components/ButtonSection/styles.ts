import styled from 'styled-components';
import { CardsButton } from '../../styles/Global/styles';

export const CardButtonsContainer = styled.nav`
  display: flex;
  margin-top: 0.5rem;
  gap: 1.25rem;
`;

export const PullCardButton = styled(CardsButton)`
  &:disabled {
    opacity: 0.7;
    &:hover {
      cursor: not-allowed;
      transform: scale(0.97);
      background: transparent;
      color: ${props => props.theme['red-500']};
    }
  }
`;

export const MixCardsButton = styled(CardsButton)``;
