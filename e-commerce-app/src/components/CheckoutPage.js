import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutForm = ({ cartItems, totalCost, handleCheckout }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleCheckout();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {isSubmitted ? (
        <h2>Payment was successful! Thank you for your purchase.</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
          <label>
            Card Holder:
            <input type="text" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
          </label>
          <label>
            Expiry Date:
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          </label>
          <label>
            CVV:
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
          </label>
          <button type="submit">Submit Payment</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;