import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import Jett from "../../components/Jett";
import Layout from "../../components/Layout";
import MainInteraction from "../../components/MainInteraction";
import Phoenix from "../../components/Phoenix";
import { GlobalStyles } from "../../styles/Global/styles";
import { defaultTheme } from "../../styles/Theme/styles";
import { MainWrapper } from "./styles";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <MainWrapper>
          <Phoenix />
          <MainInteraction />
          <Jett />
        </MainWrapper>
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Home;
