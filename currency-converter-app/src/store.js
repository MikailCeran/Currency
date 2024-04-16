import { configureStore } from '@reduxjs/toolkit';
import exchangeRatesReducer from './slices/exchangeRatesSlice';

export const store = configureStore({
  reducer: {
    exchangeRates: exchangeRatesReducer,
  },
});
// Denne Store - A.K.A Redux Store har slice component ("ExchangeRates") Og reducer for at lede echange rates.
//Jeg har implementeret RTK-Query for at fetch exchange rates asynkront med brug af thunks