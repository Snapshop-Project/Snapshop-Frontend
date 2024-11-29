import './styles.css'
import Header from '../../components/main-header/Header.js';
import CartSummary from '../../components/cart-summary/CartSummary.jsx';
import CartItemList from '../../components/cart-item-list/CartItemList.jsx';
import Grid2 from '@mui/material/Grid2';
import React, { useState } from 'react';

function Cart() {
    const [items, setItems] = useState([
      { id: 1, name: "The one that got away", price: 10.99, format: "1920x1080 (JPEG)", src: '/ExampleImages/Cave.jpg' },
      { id: 2, name: "Sunset", price: 15.99, format: "4K (PNG)", src: '/ExampleImages/Cityscape.jpg' },
      { id: 3, name: "Morning Hike", price: 12.99, format: "1920x1080 (JPEG)", src: '/ExampleImages/Animal.jpg' },
      { id: 4, name: "Jumping", price: 8.99, format: "1080x720 (JPEG)", src: '/ExampleImages/Portrait.jpg' },
    ]);
  return (
    <div className="cart-app-container">
      <Header />
      <div className="cart-main-content">
        {/* <Sidebar /> */}
        <div className="cart-content-area">
            <Grid2 container spacing={7}>
                <Grid2 item xs={10}>
                <CartItemList items={items} setItems={setItems} />
                </Grid2>
                <Grid2 item xs={2}>
                <div className="cart-summary-placeholder" />
                <CartSummary items={items} />
                </Grid2>
            </Grid2>
        </div>
      </div>
    </div>
  );
}

export default Cart;