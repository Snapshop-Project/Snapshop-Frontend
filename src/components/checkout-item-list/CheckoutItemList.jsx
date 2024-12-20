import React, { useState } from 'react';
import PaymentInfoModal from '../payment-info-modal.jsx/PaymentInfoModal';
import './CheckoutItemList.css';
import { useNavigate } from 'react-router-dom';

function CheckoutItemList({ items, paymentInfo, onPaymentInfoUpdate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const handleChangeClick = () => {
      setIsModalOpen(true);
    };
    const handleBack = () => {
      navigate('/Snapshop-Frontend/cart');
    };
    const handleModalSave = (data) => {
      onPaymentInfoUpdate(data);
      setIsModalOpen(false);
    };
    return (
      <div className="item-grid-container">
        <div className='checkout-header-container'>
        <h2>Checkout</h2>
        <span className="change-text" onClick={handleBack}>
            Return to Cart
          </span>
          </div>
        <div className="payment-info">
          <h3>
            Payment Info
          </h3>
          {paymentInfo?.cardNumber ? <span className="change-text" onClick={handleChangeClick}>
            Change
          </span> : ""}
          </div>
          <div className="payment-method">
            <p>Payment Method:</p>
            <p style={{ fontWeight: 'bold' }}>
              {paymentInfo?.cardNumber ? `**** **** **** ${paymentInfo.cardNumber.slice(-4)}` :         <span className="change-text" onClick={handleChangeClick}>
            Add Payment Method
          </span>}
            </p>
        </div>
        <div className="review-items-section">
        <h3>Review Items</h3>
        <div className="checkout-item-grid">
          {items.map((item) => (
            <div key={item.id} className="checkout-item-card">
              <div className="checkout-item-image">
                <img src={item.src} alt={item.name} className="checkout-item-img" />
              </div>
              <div className="checkout-item-details">
              <div className="checkout-item-info">
                <div>
                <div className="checkout-item-name">{item.name}</div>
                <div className="checkout-item-format">{item.format}</div>
                </div>
                <div className="checkout-item-price">Price: ${item.price.toFixed(2)}</div>
              </div>
              
            </div>
            </div>
          ))}
        </div>
      </div>
        <PaymentInfoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleModalSave}
          initialData={paymentInfo}
        />
      </div>
    );
}

export default CheckoutItemList;