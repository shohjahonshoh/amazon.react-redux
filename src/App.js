import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
