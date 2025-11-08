// src/components/PaymentGateway.jsx
import React, { useState } from 'react';
import Loader from './Loader'; 
import './PaymentGateway.css';

const PaymentGateway = ({ amount, onPaymentSuccess, onPaymentError }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentProcessing(true);
    setPaymentError('');

    setTimeout(() => {
      if (cardNumber === '1111222233334444') {
        setPaymentError('Payment failed. Please check your card details.');
        onPaymentError('Payment failed.');
      } else if (cardNumber.length < 16) {
        setPaymentError('Invalid card number. Must be 16 digits.');
        onPaymentError('Invalid card number.');
      } else {
        onPaymentSuccess('Transaction ID: ' + Math.random().toString(36).substr(2, 9));
      }
      setPaymentProcessing(false);
    }, 2000);
  };

  return (
    <div className="payment-gateway-container">
      <h3>Payment Details:</h3>
      <p className="payment-amount">Total Amount: <strong>Rp {amount ? amount.toLocaleString('id-ID') : '0'}</strong></p>

      {paymentProcessing ? (
        <div className="loader-overlay"> {}
          <Loader />
          <p>Processing your payment...</p>
        </div>
      ) : (
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').substring(0, 16))}
              required
              disabled={paymentProcessing}
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-holder-name">Card Holder Name</label>
            <input
              type="text"
              id="card-holder-name"
              placeholder="Name on card"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              required
              disabled={paymentProcessing}
            />
          </div>
          <div className="form-row">
            <div className="form-group expiry-date">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input
                type="text"
                id="expiry-date"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value.replace(/\D/g, '').substring(0, 4))}
                required
                disabled={paymentProcessing}
              />
            </div>
            <div className="form-group cvv">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="XXX"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                required
                disabled={paymentProcessing}
              />
            </div>
          </div>

          {paymentError && <p className="payment-error">{paymentError}</p>}

          <button type="submit" className="pay-button" disabled={paymentProcessing}>
            <span>Pay Now</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentGateway;