/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { loadData } from '../Redux/cryptoData';
import Home from './Pages/Home';
import './Pages/Home.css';

const Coins = () => {
  const coin = useSelector((state) => state.cryptoReducer, shallowEqual);
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  return (
    <section>
      <div className="crypto-img">
        <h2 className="intro">Get All Info About Your Favorite Crypto Currency</h2>
        <input type="text" className="filter" placeholder="Search" onChange={(event) => { setInputText(event.target.value); }} />
      </div>
      <div className="coin-list">
        { coin.filter((item) => item.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())).map((crypto) => (
          <Home
            key={crypto.id}
            name={crypto.name}
            pic={crypto.image}
            price={crypto.current_price}
            id={crypto.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Coins;
