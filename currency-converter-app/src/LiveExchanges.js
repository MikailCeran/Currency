import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExchangeRates } from './slices/exchangeRatesSlice'; // Import af action creator til at hente valutakurser
import './LiveExchanges.css'; // Import af CSS-styling

// Komponent for live valutakurser
export function LiveExchanges() {
  const dispatch = useDispatch(); // Redux dispatch funktion for at dispatche actions
  const rates = useSelector((state) => state.exchangeRates.rates); // Henter valutakurser fra Redux state
  const status = useSelector((state) => state.exchangeRates.status); // Henter status fra Redux state
  const error = useSelector((state) => state.exchangeRates.error); // Henter fejlmeddelelse fra Redux state

  // useEffect hook til at hente valutakurser ved komponentens mount
  useEffect(() => {
    dispatch(fetchExchangeRates()); // Dispatch action for at hente valutakurser
  }, [dispatch]); // Dependency array er tom, så effekten køres kun én gang

  // Funktion til at opdatere valutakurser
  const handleUpdateRates = () => {
    dispatch(fetchExchangeRates()); // Dispatch action for at hente valutakurser
  };

  // Visning af indlæsningstekst, hvis data indlæses
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Visning af fejlmeddelelse, hvis hentning fejler
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Render komponenten med valutakurser
  return (
    <div className="live-exchanges-container">
      <div className="header">
        <h1>Live Currency Exchanges</h1>
        <button onClick={handleUpdateRates} className="update-button">Update</button>
      </div>
      <div className="currency-rates">
        {/* Mapper over valutakurser og viser dem */}
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

// Eksporterer sidetitel
export const pageTitle = "LiveExchanges";
