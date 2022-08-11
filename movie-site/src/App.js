import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CurrentMovies from "./pages/CurrentMovies"
import './App.css';
import Navigation from "./components/UI/Navigation/Navigation";

function App() {
  return (
    <>
    <Navigation></Navigation>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrentMovies/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
