import Head from 'next/head';
import React, { useContext } from 'react';
import { Context } from '../../context';
import Footer from '../Footer';
import { Blur, LayoutContainer } from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({children}) => {
  const {toggleModal} = useContext(Context);

  return (
    <LayoutContainer>
      {toggleModal && <Blur />}
      <Head>
        <title>Valorant Cards</title>
      </Head>
      {children}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;