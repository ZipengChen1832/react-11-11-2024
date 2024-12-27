import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import storeConfig from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = storeConfig();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
