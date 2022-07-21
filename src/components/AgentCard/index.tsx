import Image from "next/image";
import React, { useContext } from "react";
import { Context } from "../../context";

import {
  AgentCardChar,
  AgentCardContainer,
  AgentCardDescription,
  AgentCardMoreInfo,
  AgentCardName,
  AgentCardScore,
  AgentCardInteraction,
} from "./styles";

interface IProps {
  image: string;
  name: string;
  description: string | undefined;
}

const AgentCard: React.FC<IProps> = ({ image, name, description }) => {
  const { toggleModal, handleToggleModal } = useContext(Context);

  return (
    <AgentCardContainer>
      <AgentCardChar>
        <Image layout="fill" alt="Jett" src={image} />
      </AgentCardChar>
      <AgentCardScore>7</AgentCardScore>
      <AgentCardInteraction>
        <AgentCardName>{name}</AgentCardName>
        <AgentCardDescription>{description}</AgentCardDescription>
        <AgentCardMoreInfo onClick={() => handleToggleModal(!toggleModal)} />
      </AgentCardInteraction>
    </AgentCardContainer>
  );
};

export default AgentCard;
