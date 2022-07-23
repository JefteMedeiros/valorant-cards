import type { NextPage } from 'next';
import Jett from '../components/Jett';
import MainInteraction from '../components/MainInteraction';
import Phoenix from '../components/Phoenix';
import { HomeWrapper } from '../styles/Global/styles';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Phoenix />
      <MainInteraction />
      <Jett />
    </HomeWrapper>
  );
};

export default Home;
