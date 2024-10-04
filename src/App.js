import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import Routes from "./Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
