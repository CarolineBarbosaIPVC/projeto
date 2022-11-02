import React from "react";
import "./styles.css";
import About from "./pages/About";
import Apium from "./pages/Apium";
import Apidois from "./pages/Apidois";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/apium" element={<Apium/>}></Route>
          <Route path="/apidois" element={<Apidois/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

