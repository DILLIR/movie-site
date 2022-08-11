import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CurrentMovies from "./pages/CurrentMovies"
import './App.css';
import Navigation from "./components/UI/Navigation/Navigation";
import Genres from "./pages/Genres";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<CurrentMovies/>}/>
        <Route path="/genres" element={<Genres/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
