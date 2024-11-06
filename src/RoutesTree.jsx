// src/RoutesTree.js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Cart from "./pages/cart";
import PicturePage from "./pages/PicturePage"; // Make sure the path is correct

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Browser />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/picture/:id" element={<PicturePage />} /> {/* Route for PicturePage */}
    </Routes>
  );
}

export default RoutesTree;
