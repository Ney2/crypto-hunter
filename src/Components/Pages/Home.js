import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as BsIcon from 'react-icons/bs';
import './Home.css';

const Home = ({
  name, pic, price, id,
}) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <section>
      <div className="coin">
        <div className="first-container">
          <img className="pic" src={pic} alt={name} />
          <BsIcon.BsFillArrowRightCircleFill className="arrow" id={id} onClick={navigateDetails} key={id} />
        </div>
        <div className="second-container">
          <h2 className="name">{name}</h2>
          <p className="price">{price}</p>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  pic: PropTypes.node.isRequired,
};

export default Home;
