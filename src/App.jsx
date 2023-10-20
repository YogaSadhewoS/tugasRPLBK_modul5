import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { PokemonProvider } from "./PokemonContext";
import HalamanPertama from "./HalamanPertama";
import HalamanKedua from "./HalamanKedua";
import "./App.css";

function App() {
  return (
    <Router>
      <PokemonProvider>
        <h1>Kelompok 13</h1>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/halaman-pertama">Halaman Pertama</Link>
            </li>
            <li className="navbar-item">
              <Link to="/halaman-kedua">Halaman Kedua</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/halaman-pertama" element={<HalamanPertama />} />
            <Route path="/halaman-kedua" element={<HalamanKedua />} />
          </Routes>
        </div>
      </PokemonProvider>
    </Router>
  );
}

export default App;
