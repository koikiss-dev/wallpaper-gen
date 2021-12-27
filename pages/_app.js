import Global from "../styles/Global";
import Script from "next/script";
import "../styles/font.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></Script>

      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
