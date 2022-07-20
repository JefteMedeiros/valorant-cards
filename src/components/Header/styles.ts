import styled from "styled-components";
import { FaGamepad } from "react-icons/fa";

export const HeaderContainer = styled.header`
  padding: 0.4375rem 0;
  background: ${(props) => props.theme["red-500"]};
`;

export const Gamepad = styled(FaGamepad)`
  color: ${(props) => props.theme["brand-white"]};
  margin-right: 1.875rem;
`;

export const UserContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
`;

export const Name = styled.h1`
  font-family: "Nunito", sans-serif;
  color: white;
  text-align: right;
  font-size: 20px;
`;
