import React from 'react';
import Footer from '../Footer';
import { LayoutContainer } from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({children}) => {
  return (
    <LayoutContainer>
      {children}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;