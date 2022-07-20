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

const AgentCard: React.FC = () => {
  const { toggleModal, handleToggleModal } = useContext(Context);

  return (
    <AgentCardContainer>
      <AgentCardChar>
        <Image layout="fill" alt="Jett" src="/Jett.png" />
      </AgentCardChar>
      <AgentCardScore>7</AgentCardScore>
      <AgentCardInteraction>
        <AgentCardName>Jett</AgentCardName>
        <AgentCardDescription>Evasion, Mobility</AgentCardDescription>
        <AgentCardMoreInfo onClick={() => handleToggleModal(!toggleModal)} />
      </AgentCardInteraction>
    </AgentCardContainer>
  );
};

export default AgentCard;
