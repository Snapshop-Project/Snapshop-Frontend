import React from 'react';
import './CartItemList.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

function CartItemList() {
  const items = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 15.99 },
    { id: 3, name: "Item 3", price: 12.99 },
    { id: 4, name: "Item 4", price: 8.99 },
  ];

  return (
    <div className="item-grid-container">
      <h2>Cart</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-header">
              <span className="item-name">{item.name}</span>
              <IconButton>
                <CancelIcon fontSize="small" />
            </IconButton>
            </div>
            <div className="item-image"></div>
            <div className="item-price">${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItemList;