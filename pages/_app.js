import * as React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { createContext } from "react";
import { getStrapiMedia } from "lib/media";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import Script from "next/script";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('G-JTGRWEJ5VG');

export const GlobalContext = createContext({});
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5447622233929013"
/>
      <Head>
        <title>Sikkim News</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5447622233929013"
     crossOrigin="anonymous"></script>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global.attributes}>
          <CssBaseline />
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

/*
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5447622233929013"
     crossorigin="anonymous"></script>

     // _app.js
<Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5447622233929013"
/>

*/