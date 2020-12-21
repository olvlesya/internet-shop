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
} from "../store";
import "../styles/index.css";

const store = createStore(
  combineReducers({
    item: itemReducer,
    items: itemsReducer,
    isLoading: loadingReducer,
    searchQuery: searchQueryReducer,
    sort: sortReducer,
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
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
