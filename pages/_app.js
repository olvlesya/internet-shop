import { createStore, combineReducers, applyMiddleware } from "redux";
import Head from "next/head";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  itemReducer,
  itemsReducer,
  loadingReducer,
  searchQueryReducer,
  sortReducer,
  cartReducer,
} from "../store";
import "../styles/index.css";

const store = createStore(
  combineReducers({
    item: itemReducer,
    items: itemsReducer,
    isLoading: loadingReducer,
    searchQuery: searchQueryReducer,
    sort: sortReducer,
    cart: cartReducer,
  }),
  applyMiddleware(thunk)
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Internet shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Internet shop" key="title" />
        <meta
          property="og:image"
          content="https://cdn.statically.io/gh/olvlesya/internet-shop/gh-pages/out/assets/images/site-preview.png"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
