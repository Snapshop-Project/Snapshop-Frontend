// src/RoutesTree.js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Cart from "./pages/cart";
import ProfilePage from './pages/profile/ProfilePage';
import EditProfilePage from './pages/editProfile/EditProfilePage';

import Checkout from "./pages/checkout";
import SalesPage from './pages/sales/SalesPage';
import PicturePage from "./pages/PicturePage";
import CreateAccount from "./pages/createAccount";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Browser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/editProfile" element={<EditProfilePage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/picture/:id" element={<PicturePage />} />
    </Routes>
  );
}

export default RoutesTree;
