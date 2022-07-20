import React from "react";
import { ThemeProvider } from "styled-components";
import AgentSection from "../../components/AgentSection";
import ButtonSection from "../../components/ButtonSection";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import { CardWrapper, GlobalStyles } from "../../styles/Global/styles";
import { defaultTheme } from "../../styles/Theme/styles";

const Cards: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Header />
        <CardWrapper>
          <Logo />
          <AgentSection />
          <ButtonSection />
        </CardWrapper>
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Cards;