import React from 'react';
import './CartSummary.css';
import { useNavigate } from 'react-router-dom';

function CartSummary({ showMinimal = true, isPaymentAvailable, items }) {
  const itemsInCart = items.length;
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const gst = subtotal * 0.05;
  const fulltotal = gst + subtotal;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { items } });
  };

  return (

      <div className="cart-summary">
      <h2>Summary</h2>
      {showMinimal ? (
      <><div className="summary-details">
          <div className="summary-row">
            <span>Items In Cart</span>
            <span>{itemsInCart}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div><button className="checkout-button-checkout" onClick={handleCheckout} disabled={items.length === 0}>Checkout</button></>
      ): (
        <><div className="summary-details">
        <div className="summary-row">
          <span>Items In Cart</span>
          <span>{itemsInCart}</span>
        </div>
        <div className="summary-row">
          <span>Total Before Tax</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Estimated GST</span>
          <span>${gst.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${fulltotal.toFixed(2)}</span>
        </div>
      </div><button className="checkout-button-purchase" onClick={handleCheckout} disabled={!isPaymentAvailable}>Purchase</button></>
      )}
    </div>
  );
}

export default CartSummary;