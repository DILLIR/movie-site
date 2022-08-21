import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/UI/Navigation/Navigation";

import { routs } from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {routs.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
