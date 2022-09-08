import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as BsIcon from 'react-icons/bs';
import { singleCoin } from '../../Redux/cryptoData';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const navigate = useNavigate();
  const navigateHistoricalChart = () => {
    navigate(`/details/histroicalchart/${id}`);
  };

  const fetchCoin = async () => {
    const { data } = await axios.get(singleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="symbol-container">
        <img className="pic" src={coin?.image.large} alt={coin?.name} />
        <BsIcon.BsFillArrowRightCircleFill className="arrow" id={id} onClick={navigateHistoricalChart} key={id} />
      </div>
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
      <div className="details-header">
        <h1>
          Details About
          { ' '}
          {coin?.name}
          { ' '}
          Crypto
        </h1>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="title">Current Price</td>
            <td className="result">{coin?.market_data.current_price.usd}</td>
          </tr>
          <tr>
            <td className="title">Public Interest Score</td>
            <td className="result">{coin?.public_interest_score}</td>
          </tr>
          <tr>
            <td className="title">Liquidity Score</td>
            <td className="result">{coin?.liquidity_score}</td>
          </tr>
          <tr>
            <td className="title">Ath Percentage Change</td>
            <td className="result">{coin?.market_data.ath_change_percentage.usd}</td>
          </tr>
          <tr>
            <td className="title">Ath</td>
            <td className="result">{coin?.market_data.ath.usd}</td>
          </tr>
          <tr>
            <td className="title">High Market Data of 24h</td>
            <td className="result">{coin?.market_data.high_24h.usd}</td>
          </tr>
          <tr>
            <td className="title">Low Market Data of 24h</td>
            <td className="result">{coin?.market_data.low_24h.usd}</td>
          </tr>
          <tr>
            <td className="title">Market Cap 24h Change</td>
            <td className="result">{coin?.market_data.market_cap_change_24h}</td>
          </tr>
          <tr>
            <td className="title">Circulating Supply</td>
            <td className="result">{coin?.market_data.circulating_supply}</td>
          </tr>
          <tr>
            <td className="title">Market Cap 24h Percentage Change</td>
            <td className="result">{coin?.market_data.market_cap_change_percentage_24h}</td>
          </tr>
          <tr>
            <td className="title">Max Supply</td>
            <td className="result">{coin?.market_data.max_supply}</td>
          </tr>
          <tr>
            <td className="title">Price Change 24h</td>
            <td className="result">{coin?.market_data.price_change_24h}</td>
          </tr>
          <tr>
            <td className="title">Sentiment Votes Up Percentage</td>
            <td className="result">{coin?.sentiment_votes_up_percentage}</td>
          </tr>
          <tr>
            <td className="title">Sentiment Votes Down Percentage</td>
            <td className="result">{coin?.sentiment_votes_down_percentage}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Details;
