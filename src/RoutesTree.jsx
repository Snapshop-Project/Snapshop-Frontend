// src/RoutesTree.js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Cart from "./pages/cart";
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
      <Route path="Snapshop-Frontend/" element={<Browser />} />
      <Route path="Snapshop-Frontend/login" element={<Login />} />
      <Route path="Snapshop-Frontend/forgotPassword" element={<ForgotPassword />} />
      <Route path="Snapshop-Frontend/createAccount" element={<CreateAccount />} />
      <Route path="Snapshop-Frontend/cart" element={<Cart />} />
      <Route path="Snapshop-Frontend/checkout" element={<Checkout />} />
      <Route path="Snapshop-Frontend/editProfile" element={<EditProfilePage />} />
      <Route path="Snapshop-Frontend/sales" element={<SalesPage />} />
      <Route path="Snapshop-Frontend/picture/:id" element={<PicturePage />} />
    </Routes>
  );
}

export default RoutesTree;
