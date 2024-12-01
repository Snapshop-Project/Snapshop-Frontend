// import './SalesPage.css'
import Header from '../../components/main-header/Header.js';
import SalesSummary from '../../components/sales-summary/SalesSummary.jsx';
import SaleItemList from '../../components/sale-item-list/SaleItemList.jsx';
import Grid2 from '@mui/material/Grid2';
import React, { useState } from 'react';

const pics = [
    // { id: 'cave', src: '/ExampleImages/Cave.jpg', name: 'The one that got away', format: '1920x1080 (JPEG)', price: 10.99 },
    // { id: 'cityscape', src: '/ExampleImages/Cityscape.jpg', name: 'Sunset', format: '4K (PNG)', price: 15.99 },
    // { id: 'animal', src: '/ExampleImages/Animal.jpg', name: 'Morning Hike', format: '1920x1080 (JPEG)', price: 12.99 },
    // { id: 'portrait', src: '/ExampleImages/Portrait.jpg', name: 'Jumping', format: '1080x720 (JPEG)', price: 8.99 },
    
];

function SalesPage() {
    const [items, setItems] = useState([
        { id: 1, src: '/ExampleImages/RushingFalls.jpg', name: 'Rushing Falls', purchaser: 'Purchased by: John Deer', price: 17.99 },
        { id: 2, src: '/ExampleImages/RushingFalls.jpg', name: 'Rushing Falls', purchaser: 'Purchased by: Ron McDonald', price: 17.99 },
        { id: 3, src: '/ExampleImages/RushingFalls.jpg', name: 'Rushing Falls', purchaser: 'Purchased by: Burgess King', price: 17.99 },
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

