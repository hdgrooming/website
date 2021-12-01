import Head from "next/head";
import "normalize.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Happy Dog Grooming Salon</title>
        <link href="/fonts/fonts.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
