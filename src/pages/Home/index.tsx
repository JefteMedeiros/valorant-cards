import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import Layout from '../../components/Layout';
import MainInteraction from '../../components/MainInteraction';
import { GlobalStyles } from '../../styles/Global/styles';
import { defaultTheme } from '../../styles/Theme/styles';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <MainInteraction />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Home;
