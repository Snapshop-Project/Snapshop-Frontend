import React, { useState } from 'react';
import './PaymentInfoModal.css';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';

function PaymentInfoModal({ isOpen, onClose, onSave, initialData }) {
    const [cardNumber, setCardNumber] = useState(initialData?.cardNumber || '');
    const [expiryDate, setExpiryDate] = useState(initialData?.expiryDate || '');
    const [nameOnCard, setNameOnCard] = useState(initialData?.nameOnCard || '');
    const [CVV, setCVV] = useState(initialData?.CVV || '');
    const [billingAddress, setBillingAddress] = useState(initialData?.billingAddress || '');

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};

        if (!/^[0-9]{16}$/.test(cardNumber.replace(/\s/g, ''))) {
            newErrors.cardNumber = '*Valid credit card number';
        }

        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
          newErrors.expiryDate = 'Expiry date must be in MM/YY format';
        }

        if (!/^[0-9]{3}$/.test(CVV)) {
            newErrors.CVV = '*3 digits';
        }

        if (!nameOnCard.trim()) {
            newErrors.nameOnCard = 'Name on card is required';
        }

        if (!billingAddress.trim()) {
            newErrors.billingAddress = 'Billing address is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
      const formatCardNumber = (value) => {
        const onlyNumbers = value.replace(/[^0-9]/g, '');
        return onlyNumbers.replace(/(\d{4})(?=\d)/g, '$1 ');
    };
    const formatExpiryDate = (value) => {
      const onlyNumbers = value.replace(/[^0-9]/g, '');
      if (onlyNumbers.length > 4) {
          return onlyNumbers.slice(0, 4).replace(/(\d{2})(?=\d)/, '$1/');
      }
      return onlyNumbers.replace(/(\d{2})(?=\d)/, '$1/');
  };
    const handleSave = () => {
        if (validateFields()) {
            onSave({ cardNumber, expiryDate, nameOnCard, CVV, billingAddress });
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="payment-modal-overlay">
            <div className="payment-modal-content">
                <CancelIcon className="cancel-icon-payment" onClick={onClose} />
                <h3 className="header-payment">Add or Edit Payment Info</h3>
                <div>
                    <Stack direction="row" gap={2}>
                        <div className={`form-group card-number-container ${errors.cardNumber ? 'payment-info-error ' : ''}`}>
                            <label>Card Number</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => {
                                  const formattedValue = formatCardNumber(e.target.value);
                                  if (formattedValue.replace(/\s/g, '').length <= 16) setCardNumber(formattedValue);
                              }}
                                placeholder="Card number"
                            />
                            {errors.cardNumber && <p className="payment-info-error-message">{errors.cardNumber}</p>}
                        </div>
                        <div className={`form-group ${errors.expiryDate ? 'payment-info-error ' : ''}`}>
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => {
                                    const formattedValue = formatExpiryDate(e.target.value);
                                    setExpiryDate(formattedValue);
                                }}
                                placeholder="MM/YY"
                            />
                            {errors.expiryDate && <p className="payment-info-error-message">{errors.expiryDate}</p>}
                        </div>
                        <div className={`form-group ${errors.CVV ? 'payment-info-error ' : ''}`}>
                            <label>CVV</label>
                            <input
                                type="text"
                                value={CVV}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/[^0-9]/g, '');
                                  if (value.length <= 3) setCVV(value); 
                                }}
                            />
                            {errors.CVV && <p className="payment-info-error-message">{errors.CVV}</p>}
                        </div>
                    </Stack>
                    <div className={`form-group ${errors.nameOnCard ? 'payment-info-error ' : ''}`}>
                        <label>Name on Card</label>
                        <input
                            type="text"
                            value={nameOnCard}
                            onChange={(e) => setNameOnCard(e.target.value)}
                            placeholder="First and last name"
                        />
                        {errors.nameOnCard && <p className="payment-info-error-message">{errors.nameOnCard}</p>}
                    </div>
                    <div className={`form-group ${errors.billingAddress ? 'payment-info-error ' : ''}`}>
                        <label>Billing Address</label>
                        <input
                            type="text"
                            value={billingAddress}
                            onChange={(e) => setBillingAddress(e.target.value)}
                            placeholder="Billing address"
                        />
                        {errors.billingAddress && <p className="payment-info-error-message">{errors.billingAddress}</p>}
                    </div>
                </div>
                <div className="modal-actions">
                    <button onClick={handleSave} className="payment-save-button">Save</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentInfoModal;