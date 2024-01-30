import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../style.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
