import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
