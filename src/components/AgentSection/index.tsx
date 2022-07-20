import React, { useReducer } from 'react';
import AgentCard from '../AgentCard';
import { AgentContainer } from './styles';

const AgentSection: React.FC = () => {
  return (
    <AgentContainer>
      <AgentCard />
      <AgentCard />
      <AgentCard />
      <AgentCard />
      <AgentCard />
    </AgentContainer>
  );
}

export default AgentSection;
