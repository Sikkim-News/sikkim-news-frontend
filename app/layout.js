import "../styles/globals.css";


export const metadata = {
  title: 'Sikkim News',
  description: 'A news website for Sikkim and nearby areas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// import { createContext } from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "../config/createEmotionCache";
// import Script from "next/script";

// export const GlobalContext = createContext({});
// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

// function MyApp(props) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

//   return (
//     <CacheProvider value={emotionCache}>

//       <Head>
//         <title>Sikkim News</title>
//       </Head>

//       <Script
//             async={true}
//             crossOrigin="anonymous"
//             src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5447622233929013"/>
      
//         <GlobalContext.Provider value={global.attributes}>
//           <CssBaseline />
//           <Component {...pageProps} />
//         </GlobalContext.Provider>
//     </CacheProvider>
//   );
// }

// export default MyApp;