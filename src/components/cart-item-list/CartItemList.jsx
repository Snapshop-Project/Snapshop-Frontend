import React, { useState } from 'react';
import './CartItemList.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import ConfirmDialog from '../confirm-dialog/ConfirmDialog';

function CartItemList() {
  const [items, setItems] = useState([
    { id: 1, name: "The one that got away", price: 10.99, src: '/ExampleImages/Cave.jpg' },
    { id: 2, name: "Sunset", price: 15.99, src: '/ExampleImages/Cityscape.jpg' },
    { id: 3, name: "Morning Hike", price: 12.99, src: '/ExampleImages/Animal.jpg' },
    { id: 4, name: "Jumping", price: 8.99, src: '/ExampleImages/Portrait.jpg' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRemoveClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleConfirmRemove = () => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== selectedItem.id));
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  return (
    <div className="item-grid-container">
      <h2>Cart</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <IconButton className="cancel-button" onClick={() => handleRemoveClick(item)}>
              <CancelIcon fontSize="large" style={{ color: 'red' }} />
            </IconButton>
            <div className="item-header">
              <span className="item-name">{item.name}</span>
            </div>
            <div className="item-image">
              <img src={item.src} alt={item.name} className="item-img" />
            </div>
            <div className="item-price">${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <ConfirmDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmRemove}
      />
    </div>
  );
}

export default CartItemList;