import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExchangeRates } from './slices/exchangeRatesSlice';
import './LiveExchanges.css';

export function LiveExchanges() {
  const dispatch = useDispatch();
  const rates = useSelector((state) => state.exchangeRates.rates);
  const status = useSelector((state) => state.exchangeRates.status);
  const error = useSelector((state) => state.exchangeRates.error);

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  const handleUpdateRates = () => {
    dispatch(fetchExchangeRates());
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="live-exchanges-container">
      <div className="header">
        <h1>Live Currency Exchanges</h1>
        <button onClick={handleUpdateRates} className="update-button">Update</button>
      </div>
      <div className="currency-rates">
        {Object.keys(rates).map((currency) => (
          <div key={currency} className="currency-rate">
            <div className="currency">{currency}</div>
            <div className="rate">{rates[currency]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const pageTitle = "LiveExchanges";
