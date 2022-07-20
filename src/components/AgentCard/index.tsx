import Image from "next/image";
import React from "react";
import {
  AgentCardChar,
  AgentCardContainer,
  AgentCardDescription,
  AgentCardMoreInfo,
  AgentCardName,
  AgentCardScore,
} from "./styles";

const AgentCard: React.FC = () => {
  return (
    <AgentCardContainer>
      <AgentCardChar>
        <Image layout="fill" alt="Jett" src="/Jett.png" />
      </AgentCardChar>
      <AgentCardScore>7</AgentCardScore>
      <AgentCardName>Jett</AgentCardName>
      <AgentCardDescription>Evasion, Mobility</AgentCardDescription>
      <AgentCardMoreInfo />
    </AgentCardContainer>
  );
};

export default AgentCard;
