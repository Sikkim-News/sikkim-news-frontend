import "../styles/globals.css";
import styles from "../styles/Layout.module.css";
import Footer from "@/layoutComponents/Footer";
import Header from "@/layoutComponents/Head";

export const metadata = {
	metadataBase: new URL("https://thesikkimnews.com"),
	title: {
		default: "Sikkim News",
		template: "%s | Sikkim News",
	},
	description:
		"Explore the latest and trending news from Sikkim and Nearby Areas.",
	keywords: ["sikkim news", "top news sikkim", "latest news sikkim"],
	openGraph: {
		title: "Sikkim News",
		description:
			"Explore the latest and trending news from Sikkim and Nearby Areas.",
		url: "https://thesikkimnews.com",
		siteName: "Sikkim News",
		locale: "en_IN",
		images: [
			{
				url: "../public/resources/logo-original.png",
				width: 800,
				height: 600,
				alt: "Sikkim News",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.layout}>
				<Header />
				<main className={styles.layout__children}>{children}</main>
				<Footer />
			</body>
		</html>
	);
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
