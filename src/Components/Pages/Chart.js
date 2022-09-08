import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import * as BsIcon from 'react-icons/bs';
import axios from 'axios';
import './Chart.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { historicalChart } from '../../Redux/cryptoData';

ChartJS.register(...registerables);

const Chart = () => {
  const { id } = useParams();
  const capitalized = id.charAt(0).toUpperCase() + id.slice(1);
  const year = 365;
  const navigate = useNavigate();
  const backtoDetails = () => {
    navigate(`/details/${id}`);
  };
  const [historicData, sethistoricData] = useState([]);
  const fetchHistoricData = async () => {
    const { data } = await axios.get(historicalChart(id));
    sethistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1]);

  return (
    <div className="chart-container">
      <BsIcon.BsArrowLeftCircleFill onClick={backtoDetails} className="back-arrow" />
      <p className="chart-title">
        Line Graph Market Price Graphical Respresentaion of
        {' '}
        {capitalized}
        {' '}
      </p>
      <div className="graph">
        <Line
          data={{
            labels: historicData.map((coin) => {
              const date = new Date(coin[0]);
              const time = date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
              return year === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: 'Price for the past 365days in USD',
                borderColor: '#EEBC1D',
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      </div>
      <div>
        <p className="chart-title">
          Bar Chart Market Price Graphical Respresentaion of
          {' '}
          {capitalized}
          {' '}
        </p>
        <div className="graph">
          <Bar
            data={{
              labels: historicData.map((coin) => {
                const date = new Date(coin[0]);
                const time = date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
                return year === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: 'Price for the past 365days in USD',
                  backgroundColor: '#EEBC1D',
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
