import "../styles/globals.css";
import { createContext } from "react";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
