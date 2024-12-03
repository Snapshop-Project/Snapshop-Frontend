import React, { useState } from 'react';
import './SalesSummary.css';
import { useNavigate } from 'react-router-dom';

function SalesSummary({ showMinimal = true, isPaymentAvailable, items }) {
  const itemsInCart = items.length;
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const gst = subtotal * 0.05;
  const fulltotal = gst + subtotal;

  return (
      <div className="sale-summary">
      <h2>Summary</h2>
      {showMinimal ? (
      <><div className="sale-summary-details">
          <div className="sale-summary-row">
            <span>Number of Images Sold</span>
            <span>{itemsInCart}</span>
          </div>
          <div className="sale-summary-row total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div></>
      ): (
        <><div className="sale-summary-details">
        <div className="sale-summary-row">
          <span>Number of Images Sold</span>
          <span>{itemsInCart}</span>
        </div>
        <div className="sale-summary-row">
          <span>Total Before Tax</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="sale-summary-row">
          <span>Estimated GST</span>
          <span>${gst.toFixed(2)}</span>
        </div>
        <div className="sale-summary-row total">
          <span>Total</span>
          <span>${fulltotal.toFixed(2)}</span>
        </div>
      </div></>
      )}
    </div>
  );
}

export default SalesSummary;