import React from 'react';
import './CartSummary.css';

function CartSummary() {
  const itemsInCart = 2;
  const subtotal = 360.00;

  return (
    <div className="cart-summary">
      <h2>Summary</h2>
      <div className="summary-details">
        <div className="summary-row">
          <span>Items In Cart</span>
          <span>{itemsInCart}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default CartSummary;