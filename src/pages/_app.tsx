import React from 'react';

import Head from 'next/head';

import { Providers } from '@/Providers';

const AppHead = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04047b" />
      <meta name="msapplication-TileColor" content="#04047b" />
      <meta name="theme-color" content="#04047b" />
    </Head>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <Providers>
      <AppHead />
      <Component {...pageProps} />
    </Providers>
  );
};
export default App;
