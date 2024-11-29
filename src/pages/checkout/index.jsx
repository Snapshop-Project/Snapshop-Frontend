import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/main-header/Header.js';
import CartSummary from '../../components/cart-summary/CartSummary.jsx';
import Grid2 from '@mui/material/Grid2';
import CheckoutItemList from '../../components/checkout-item-list/CheckoutItemList.jsx';
import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation();
    const items = location.state?.items || [];
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        nameOnCard: '',
        billingAddress: ''
      });
    
      const handlePaymentInfoUpdate = (updatedPaymentInfo) => {
        setPaymentInfo(updatedPaymentInfo);
      };
    return (
        <div className="cart-app-container">
        <Header />
        <div className="cart-main-content">
          <div className="cart-content-area">
              <Grid2 container spacing={7}>
                  <Grid2 item xs={10}>
                  <CheckoutItemList items={items} paymentInfo={paymentInfo} onPaymentInfoUpdate={handlePaymentInfoUpdate}/>
                  </Grid2>
                  <Grid2 item xs={2}>
                  <div className="cart-summary-placeholder" />
                  <CartSummary items={items} showMinimal ={false} isPaymentAvailable={!!paymentInfo.cardNumber} />
                  </Grid2>
              </Grid2>
          </div>
        </div>
        </div>
        );
    }
export default Checkout;