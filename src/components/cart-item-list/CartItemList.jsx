import React, { useState } from 'react';
import './CartItemList.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import ConfirmDialog from '../confirm-dialog/ConfirmDialog';

function CartItemList({ items, setItems }) {
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
      {items.length === 0 ? <span>Cart Is Empty, Add Images to Cart to Checkout</span> : ""}
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