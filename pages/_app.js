import Head from "next/head";
import "../styles/positions.scss";
import "../styles/pl.scss";
import "../styles/DateRangePicker.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/kite-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
