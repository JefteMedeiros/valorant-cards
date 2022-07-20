import styled from "styled-components";
import { DocumentText } from "../../styles/Global/styles";

export const AgentCardContainer = styled.div`
  position: relative;
  width: 11.875rem;
  height: 19.625rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 1368px) {
    width: 11.0625rem;
    height: 16.1956rem;
  }
`;

export const AgentCardScore = styled.div`
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;

  color: ${(props) => props.theme["red-500"]};
  font-family: "Valorant", sans-serif;
  font-size: 1.25rem;
`;

export const AgentCardChar = styled.div`
  position: relative;
  width: 10.625rem;
  height: 16.3125rem;
  margin: auto;
  margin-bottom: -0.75rem;
  bottom: 1.875rem;

  img {
    position: absolute;
  }

  @media screen and (max-width: 1366px) {
    width: 8.625rem;
    height: 13.25rem;
  }
`;

export const AgentCardName = styled(DocumentText)`
  text-align: center;
  font-size: 1.25rem;
`;

export const AgentCardDescription = styled(DocumentText)`
  text-align: center;
  font-size: 0.75rem;
  margin-bottom: 0.3125rem;
`;

export const AgentCardMoreInfo = styled.div` 
  margin: auto;
  content: "";
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${(props) => props.theme["red-600"]};
  transition: all 250ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;
