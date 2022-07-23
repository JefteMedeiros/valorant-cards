import { useState, createContext, useEffect } from 'react';
import { Data } from '../@types';

interface IProps {
  dataShuffle: () => void;
  data: Data[];
  username: string;
  handleSetUsername: (username: string) => void;
  addRandom: () => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const DataContext = createContext({} as IProps);

const ContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  useEffect(() => {
    const dataLoader = async () => {
      const response = await fetch('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true');
      const { data } = await response.json();
      const shuffled = data.sort(() => 0.5 - Math.random());
      setRemaining(shuffled.slice(6, 19));
      setData(shuffled.slice(0, 5));
    };
    dataLoader();
  }, []);

  const [username, setUsername] = useState<string>();
  const [remaining, setRemaining] = useState<Data[]>([]);
  const [data, setData] = useState<Data[]>([]);

  const dataShuffle = () => {
    const newArray = [...data];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setData(newArray);
  };

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * (remaining.length - 1));
    const randomItem = remaining[randomIndex];
    setData([...data, randomItem]);
    setRemaining(remaining.filter(data => data.uuid !== randomItem.uuid));
  };

  const handleSetUsername = (username: string) => {
    setUsername(username);
  };

  return <DataContext.Provider value={{ handleSetUsername, username, addRandom, dataShuffle, data }}>{children}</DataContext.Provider>;
};

export default ContextProvider;
