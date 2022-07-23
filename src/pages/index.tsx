import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Jett from '../components/Jett';
import Layout from '../components/Layout';
import MainInteraction from '../components/MainInteraction';
import Phoenix from '../components/Phoenix';
import { GlobalStyles, HomeWrapper } from '../styles/Global/styles';
import { defaultTheme } from '../styles/Theme/styles';

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
