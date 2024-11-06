import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Cart from "./pages/cart";
import Sales from "./pages/sales";

const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Fragment>
            <Route path="/" element={<Browser />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/sales" element={<Sales />}/>
        </Fragment>
      </Routes>
    </div>

  )
}

export default RoutesTree;