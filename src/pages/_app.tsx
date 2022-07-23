import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import ContextProvider from '../context';
import { GlobalStyles } from '../styles/Global/styles';
import { defaultTheme } from '../styles/Theme/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
