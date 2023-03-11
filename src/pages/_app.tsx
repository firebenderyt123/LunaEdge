import { useEffect } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@store";

import "@styles/globals.scss";
import "@styles/header.scss";
import "@styles/movieCard.scss";
import "@styles/moviePage.scss";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
