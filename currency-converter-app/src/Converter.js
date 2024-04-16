import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExchangeRates } from './slices/exchangeRatesSlice';
import './Converter.css';

export function Converter() {
  const dispatch = useDispatch();
  const rates = useSelector((state) => state.exchangeRates.rates);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  useEffect(() => {
    console.log(rates);  // Log the rates object
  }, [rates]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (fromRate && toRate) {
      setResult((parseFloat(amount) * toRate) / fromRate);
    }
  };

  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit} className="converter-form">
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            className="input-field"
          />
        </div>
        <div className="dropdown-group">
          <select
            className="currency-dropdown"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="" disabled>Select currency</option>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          <select
            className="currency-dropdown"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="" disabled>Select currency</option>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        {fromCurrency && toCurrency && (
          <button type="submit" className="convert-button">Convert</button>
        )}
      </form>
      {result && <p className="result">{result.toFixed(2)} {toCurrency}</p>}
      
      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <textarea
              placeholder="Message"
              required
              className="input-field"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export const pageTitle = "Currency Converter";
