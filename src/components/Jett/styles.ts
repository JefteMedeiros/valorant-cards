import styled from 'styled-components';
import { CharContainer } from '../../styles/Global/styles';

export const JettContainer = styled(CharContainer)`
  img {
    @keyframes ShowJett {
      from {
        left: 100%;
      }
      to {
        right: 0%;
      }
    }

    animation: ShowJett cubic-bezier(0.16, 1, 0.3, 1) 2000ms;
  }
`;
