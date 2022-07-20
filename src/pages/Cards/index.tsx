import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import AgentCardModal from "../../components/AgentCardModal";
import AgentSection from "../../components/AgentSection";
import ButtonSection from "../../components/ButtonSection";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import { Context, ContextProvider } from "../../context";
import { CardWrapper, GlobalStyles } from "../../styles/Global/styles";
import { defaultTheme } from "../../styles/Theme/styles";

const Cards: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContextProvider>
        <Layout>
          <Header />
          <CardWrapper>
            <Logo />
            <AgentSection />
            <ButtonSection />
          </CardWrapper>
        </Layout>
        <GlobalStyles />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default Cards;
