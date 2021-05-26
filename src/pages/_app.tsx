import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

import Nav from '../components/Nav';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Header />

      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
