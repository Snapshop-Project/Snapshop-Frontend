// import './SalesPage.css'
import Header from '../../components/main-header/Header.js';
import SalesSummary from '../../components/sales-summary/SalesSummary.jsx';
import SaleItemList from '../../components/sale-item-list/SaleItemList.jsx';
import Grid2 from '@mui/material/Grid2';
import React, { useState } from 'react';

function SalesPage() {
    const [items, setItems] = useState([
        { id: 1, src: '/Snapshop-Frontend/ExampleImages/Cityscape.jpg', name: 'Cityscape', purchaser: 'Purchased by: John Deer', price: 15.99 },
        { id: 2, src: '/Snapshop-Frontend/ExampleImages/RedPanda.jpg', name: 'Red Panda', purchaser: 'Purchased by: Ron McDonald', price: 16.99 },
        { id: 3, src: '/Snapshop-Frontend/ExampleImages/RedPanda.jpg', name: 'Red Panda', purchaser: 'Purchased by: Burgess King', price: 16.99 },
    ]);
  return (
    <div className="cart-app-container">
      <Header />
      <div className="cart-main-content">
        {/* <Sidebar /> */}
        <div className="cart-content-area">
            <Grid2 container spacing={7}>
                <Grid2 item xs={10}>
                <SaleItemList items={items} setItems={setItems} />
                </Grid2>
                <Grid2 item xs={2}>
                <div className="cart-summary-placeholder" />
                <SalesSummary items={items} />
                </Grid2>
            </Grid2>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;

