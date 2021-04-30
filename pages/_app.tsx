import Head from "next/head";
import "normalize.css";

import "../theme/fonts.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Happy Dog Grooming Salon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
