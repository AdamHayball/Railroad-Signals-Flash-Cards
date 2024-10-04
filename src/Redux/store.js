import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // persistedReducer,
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { store, persistor };
