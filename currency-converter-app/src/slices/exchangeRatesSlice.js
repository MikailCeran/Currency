import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; // Import af nødvendige funktioner fra Redux Toolkit

// Async action creator til at hente valutakurser fra API
export const fetchExchangeRates = createAsyncThunk(
  'exchangeRates/fetchExchangeRates',
  async () => {
    const response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_63lJei6AzWT2QdQmLMam6Kv6FKkJSXsbICpLgQUG');
    const data = await response.json();
    return data.data;
  }
);

// Slice for valutakurser
const exchangeRatesSlice = createSlice({ // slicen hooker information om valutakurser
  name: 'exchangeRates',
  initialState: {
    rates: {}, 
    status: 'idle', // Initial status for asynkrone operationer
    error: null, 
  },

  reducers: {}, // Reducers (ikke i brug i dette slice)
  extraReducers: (builder) => {
    builder
      // Håndtering af 'pending' status for async action
      .addCase(fetchExchangeRates.pending, (state) => {
        state.status = 'loading';
      })
      // Håndtering af 'fulfilled' status for async action
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rates = action.payload;
      })
      // Håndtering af 'rejected' status for async action
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default exchangeRatesSlice.reducer; // Eksporter reducer for brug i store

/*
// Eksempel på anden funktion med flere exports
export const createTest =  (result) => {
  let a = 1;
  let b = 2;
  return a + b === result;
}
*/
