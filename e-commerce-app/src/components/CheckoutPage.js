import React, { useState } from 'react';
import './CheckoutPage.css';

function CheckoutPage({ cartItems, deliveryAddress, handlePayment, processOrder }) {
  const [cardNumber, setCardNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [feedback, setFeedback] = useState('');
  const [amount, setAmount] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    const paymentSuccessResponse = {
      paymentStatus: 'success',
      paymentId: '1234567890',
    };

    handlePayment(paymentSuccessResponse);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-section-header">Checkout Page</h2>

      <div>
        <h3 className="checkout-section-header">Contact Information</h3>
        <form>
          <label className="checkout-label">
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="checkout-input"
              placeholder="Enter your phone number"
            />
          </label>
          <label className="checkout-label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="checkout-input"
              placeholder="Enter your email"
            />
          </label>
        </form>
      </div>

      <div>
        <h3 className="checkout-section-header">Destination</h3>
        <form>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="checkout-input"
            placeholder="Enter the destination"
          />
        </form>
      </div>

      <div>
        <h3 className="checkout-section-header">Feedback</h3>
        <form>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="checkout-textarea"
            placeholder="Enter your feedback"
          />
        </form>
      </div>

      <button className="checkout-save-button" type="button">
        Save Details
      </button>

      <div>
        <h3 className="checkout-section-header">Payment</h3>
        <form onSubmit={handlePaymentSubmit} className="checkout-payment-form">
          <label className="checkout-payment-label">
            Phone Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="checkout-payment-input"
              placeholder="Enter your card number"
            />
          </label>
          <label className="checkout-payment-label">
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="checkout-payment-input"
              placeholder="Enter amount in Ksh."
            />
          </label>
          <button className="checkout-payment-button" type="submit">
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
