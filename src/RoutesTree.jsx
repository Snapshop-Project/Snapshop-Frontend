// src/RoutesTree.js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Cart from "./pages/cart";
import ProfilePage from './pages/profile/ProfilePage';
import Checkout from "./pages/checkout";
import SalesPage from './pages/sales/SalesPage';

import PicturePage from "./pages/PicturePage"; // Make sure the path is correct

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Browser />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/picture/:id" element={<PicturePage />} /> {/* Route for PicturePage */}
    </Routes>
  );
}

export default RoutesTree;
