import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExchangeRates } from './slices/exchangeRatesSlice'; // Import af action creator til at hente valutakurser
import './Converter.css'; // Import af CSS-styling

// Komponent for valutaomregner
export function Converter() {
  const dispatch = useDispatch(); // Redux dispatch funktion for at dispatche actions
  const rates = useSelector((state) => state.exchangeRates.rates); // Henter valutakurser fra Redux state
  const [amount, setAmount] = useState(''); // State for det indtastede beløb
  const [fromCurrency, setFromCurrency] = useState(''); // State for den valgte startvaluta
  const [toCurrency, setToCurrency] = useState(''); // State for den valgte slutvaluta
  const [result, setResult] = useState(''); // State for det beregnede resultat

  // useEffect hook til at hente valutakurser ved komponentens mount
  useEffect(() => {
    dispatch(fetchExchangeRates()); // Dispatch action for at hente valutakurser
  }, [dispatch]); // Dependency array er tom, så effekten køres kun én gang

  // useEffect hook til at logge valutakurser, når de ændres
  useEffect(() => {
    console.log(rates); // Log the rates object
  }, [rates]); // Køres hver gang rates ændres

  // Funktion til at håndtere form-submit og beregne resultat
  const handleSubmit = (e) => {
    e.preventDefault();

    const fromRate = rates[fromCurrency]; // Henter valutakursen for startvaluta
    const toRate = rates[toCurrency]; // Henter valutakursen for slutvaluta

    // Beregner resultatet, hvis begge valutakurser er tilgængelige
    if (fromRate && toRate) {
      setResult((parseFloat(amount) * toRate) / fromRate);
    }
  };

  // Render komponenten med valutaomregningsformularen og resultatet
  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit} className="converter-form">
        {/* Inputfelt for beløb */}
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (parseFloat(inputValue) <= 0) {
                alert('Please enter a valid amount greater than zero.');
                return;
              }
              setAmount(inputValue);
            }}
            placeholder="Enter amount"
            required
            className="input-field"
          />
        </div>
        {/* Dropdowns for valutaer */}
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
        {/* Convert-knap */}
        {fromCurrency && toCurrency && (
          <button type="submit" className="convert-button">Convert</button>
        )}
      </form>
      {/* Vis resultatet */}
      {result && <p className="result">{result.toFixed(2)} {toCurrency}</p>}
    </div>
  );
}

// Eksporterer sidetitel
export const pageTitle = "Currency Converter";
