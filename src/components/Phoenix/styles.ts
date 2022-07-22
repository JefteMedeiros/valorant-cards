import styled from 'styled-components';
import { CharContainer } from '../../styles/Global/styles';

export const PhoenixContainer = styled(CharContainer)`
  img {
    @keyframes ShowPhoenix {
      from {
        left: -200%;
      }
      to {
        right: 0%;
      }
    }

    animation: ShowPhoenix cubic-bezier(0.16, 1, 0.3, 1) 2000ms;
  }
`;
