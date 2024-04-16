import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchExchangeRates = createAsyncThunk(
  'exchangeRates/fetchExchangeRates',
  async () => {
    const response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_63lJei6AzWT2QdQmLMam6Kv6FKkJSXsbICpLgQUG');
    const data = await response.json();
    return data.data;
  }
);

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState: {
    rates: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rates = action.payload;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default exchangeRatesSlice.reducer;


/* export const createTest =  (result){ /* Afprøvelse af multiple exports 
  let a = 1;
  let b = 2
  a+b == result;
  return result;
}
/** */