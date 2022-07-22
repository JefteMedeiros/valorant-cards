import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';
import { LayoutContainer } from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Head>
        <title>Valorant Cards</title>
      </Head>
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
