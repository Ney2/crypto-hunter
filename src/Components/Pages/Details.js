import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { singleCoin } from '../../Redux/cryptoData';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const fetchCoin = async () => {
    const { data } = await axios.get(singleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <section>
      <div className="symbol-container">
        <img className="pic" src={coin?.image.large} alt={coin?.name} />
        <div className="symbol-info">
          <p>
            Name:
            {' '}
            {coin?.name}
          </p>
          <p>
            Symbol:
            {' '}
            {coin?.symbol}
          </p>
          <p>
            Rank:
            {' '}
            {coin?.market_cap_rank}
          </p>
        </div>
      </div>
      <div className="details-header">
        <h3>
          Details About
          { ' '}
          {coin?.name}
        </h3>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Current Price</td>
            <td>{coin?.market_data.current_price.usd}</td>
          </tr>
          <tr>
            <td>Public Interest Score</td>
            <td>{coin?.public_interest_score}</td>
          </tr>
          <tr>
            <td>Liquidity Score</td>
            <td>{coin?.liquidity_score}</td>
          </tr>
          <tr>
            <td>Ath Percentage Change</td>
            <td>{coin?.market_data.ath_change_percentage.usd}</td>
          </tr>
          <tr>
            <td>Ath</td>
            <td>{coin?.market_data.ath.usd}</td>
          </tr>
          <tr>
            <td>High Market Data of 24h</td>
            <td>{coin?.market_data.high_24h.usd}</td>
          </tr>
          <tr>
            <td>Low Market Data of 24h</td>
            <td>{coin?.market_data.low_24h.usd}</td>
          </tr>
          <tr>
            <td>Market Cap 24h Change</td>
            <td>{coin?.market_data.market_cap_change_24h}</td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td>{coin?.market_data.circulating_supply}</td>
          </tr>
          <tr>
            <td>Market Cap 24h Percentage Change</td>
            <td>{coin?.market_data.market_cap_change_percentage_24h}</td>
          </tr>
          <tr>
            <td>Max Supply</td>
            <td>{coin?.market_data.max_supply}</td>
          </tr>
          <tr>
            <td>Price Change 24h</td>
            <td>{coin?.market_data.price_change_24h}</td>
          </tr>
          <tr>
            <td>Sentiment Votes Up Percentage</td>
            <td>{coin?.sentiment_votes_up_percentage}</td>
          </tr>
          <tr>
            <td>Sentiment Votes Down Percentage</td>
            <td>{coin?.sentiment_votes_down_percentage}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Details;
