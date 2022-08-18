import Head from "next/head";
import "../styles/positions.scss";
import "../styles/pl.scss";
import "../styles/DateRangePicker.css";
import LoadingContext from "../context/loadingContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [positionsLoading, setPositionLoading] = useState(true);
  const [initialLoader, setInitialLoader] = useState(true);

  return (
    <>
      <LoadingContext.Provider
        value={{
          positionsLoading: positionsLoading,
          setPositionLoading: setPositionLoading,
          initialLoader: initialLoader,
          setInitialLoader: setInitialLoader,
        }}
      >
        <Head>
          <link rel="icon" href="/kite-logo.svg" />
        </Head>
        <Component {...pageProps} />
      </LoadingContext.Provider>
    </>
  );
}

export default MyApp;
