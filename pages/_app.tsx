import "normalize.css";
import { ParallaxProvider } from "react-scroll-parallax";

import "../theme/fonts.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default MyApp;
