import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { loadData } from '../Redux/cryptoData';
import Home from './Pages/Home';
import bg from './Assets/bg.jpg';

const Coins = () => {
  const coin = useSelector((state) => state.cryptoReducer, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <section>
      <div className="crypto-img">
        <img src={bg} alt="crypto-background" />
        <input className="filter" placeholder="Search" />
      </div>
      <div className="coin-list">
        { coin.map((crypto) => (
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
