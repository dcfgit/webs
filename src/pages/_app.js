// pages/_app.js
import App from "next/app";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// Esta línea agrega compatibilidad con getInitialProps si alguna librería lo necesita
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
