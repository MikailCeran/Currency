import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExchangeRates } from './slices/exchangeRatesSlice';
import './Converter.css';



export function About() {
  
 

  return (
    <h1>
        About
    </h1>
  );
}


export const pageTitle = "About";
 


