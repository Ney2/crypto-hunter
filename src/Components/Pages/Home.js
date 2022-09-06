/* eslint-disable react/prop-types */
import React from 'react';
import * as BsIcon from 'react-icons/bs';
import './Home.css';

const Home = ({
  name, pic, price, id,
}) => (
  <div className="coin">
    <div className="first-container">
      <img className="pic" src={pic} alt={name} />
      <BsIcon.BsFillArrowRightCircleFill className="arrow" id={id} />
    </div>
    <div className="second-container">
      <h2 className="name">{name}</h2>
      <p className="price">{price}</p>
    </div>
  </div>
);

export default Home;
