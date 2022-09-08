import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';
import * as BsIcon from 'react-icons/bs';
import * as FiIcon from 'react-icons/fi';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  return (
    <div className="header-container">
      <FaIcon.FaHome onClick={home} />
      <p>Crypto Hunter</p>
      <div className="accessories">
        <BsIcon.BsMic className="mic" />
        <FiIcon.FiSettings className="setting" />
      </div>
    </div>
  );
};

export default Navigation;
