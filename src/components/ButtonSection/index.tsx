import React, { useContext, useState } from 'react';
import { DataContext } from '../../context';
import { CardButtonsContainer, MixCardsButton, PullCardButton } from './styles';

const ButtonSection: React.FC = () => {
  const { dataShuffle, addRandom } = useContext(DataContext);
  const [pulls, setPulls] = useState(3);

  const handlePull = () => {
    addRandom();
    setPulls(pulls - 1);
  };

  return (
    <CardButtonsContainer>
      <MixCardsButton onClick={() => dataShuffle()}>Embaralhar</MixCardsButton>
      <PullCardButton disabled={pulls !== 0 ? false : true} title={`Cartas restantes : ${pulls}`} onClick={() => handlePull()}>
        Puxar carta
      </PullCardButton>
    </CardButtonsContainer>
  );
};

export default ButtonSection;
