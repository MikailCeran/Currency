import { configureStore } from '@reduxjs/toolkit'; // Import af configureStore fra Redux Toolkit
import exchangeRatesReducer from './slices/exchangeRatesSlice'; // Import af exchangeRatesReducer fra slices

// Konfiguration af Redux store med exchangeRatesReducer som en del af den
export const store = configureStore({
  reducer: {
    exchangeRates: exchangeRatesReducer, // Tilføjelse af exchangeRatesReducer til reducer-listen
  },
});

/*
Denne Redux Store indeholder en slice component ("ExchangeRates") og en reducer, 
der styrer valutakurser. Vi bruger Redux Toolkit til at konfigurere og oprette store.
*/

// Med implementeringen af Redux Toolkit er det også nemt at integrere RTK-Query for asynkrone datahentninger.
