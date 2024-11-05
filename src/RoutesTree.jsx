import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Cart from "./pages/cart";
import ProfilePage from './pages/profile/ProfilePage';


const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Fragment>
            <Route path="/" element={<Browser />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/profile" element={<ProfilePage />} />
        </Fragment>
      </Routes>
    </div>

  )
}

export default RoutesTree;