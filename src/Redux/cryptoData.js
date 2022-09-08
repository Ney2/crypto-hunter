import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD_COINS = 'crypto-hunter/crytoData/load';

export const coinList = [];

const cryptoReducer = (state = coinList, action) => {
  switch (action.type) {
    case 'crypto-hunter/crytoData/load/fulfilled':
      return [...action.payload];
    default:
      return state;
  }
};

export const singleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;
export const historicalChart = (id) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`;

export const loadData = createAsyncThunk(
  LOAD_COINS,
  async () => axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => res.data),
);

export default cryptoReducer;
