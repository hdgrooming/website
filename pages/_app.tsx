import Head from "next/head";
import "normalize.css";

import { GlobalStyles } from "../components/GlobalStyles";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Happy Dog Grooming Salon</title>
        <link href="/fonts/fonts.css" rel="stylesheet" />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
