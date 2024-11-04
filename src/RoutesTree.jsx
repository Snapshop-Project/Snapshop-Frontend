import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import Browser from './pages/browsing/index';
import Header from "./components/main-header/Header";
import Sidebar from "./components/side-bar/Sidebar";

const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Fragment>
            <Route path="/" element={<Browser />}/>
        </Fragment>
      </Routes>
    </div>
  )
}

export default RoutesTree;