import { useState, createContext, useEffect } from 'react';
import { mock } from '../mock';

type DataMock = typeof mock.data;
interface IProps {
  dataShuffle: () => void;
  data: DataMock;
  addRandom: () => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const DataContext = createContext({} as IProps);

const ContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  useEffect(() => {
    const dataLoader = async () => {
      const response = await (await fetch('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true')).json();
      const shuffled = response.data.sort(() => 0.5 - Math.random());
      setRemaining(shuffled.slice(5, -1));
      setData(shuffled.slice(0, 5));
    };
    dataLoader();
  }, []);

  const [remaining, setRemaining] = useState<DataMock>([])
  const [data, setData] = useState<DataMock>([]);

  const dataShuffle = () => {
    const newArray = [...data];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setData(newArray);
  };

  const addRandom = () => {
    const randomIndex = Math.floor((Math.random() * (remaining.length) - 1) + 1)
    const randomItem = remaining[randomIndex];
    setData([...data, randomItem]);
  }

  return <DataContext.Provider value={{ addRandom, dataShuffle, data }}>{children}</DataContext.Provider>;
};

export default ContextProvider;
