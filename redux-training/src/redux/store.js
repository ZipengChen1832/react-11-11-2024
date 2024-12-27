import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { thunk } from "redux-thunk";

import logger from "redux-logger";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["theme"],
  },
  rootReducer
);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);
  return { store, persistor };
};
