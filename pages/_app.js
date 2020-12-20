import { createStore, combineReducers, applyMiddleware } from "redux";
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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
