import Head from "next/head";
import "../styles/globals.css";
import { createContext } from "react";
import { getStrapiMedia } from "lib/media";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sikkim News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
