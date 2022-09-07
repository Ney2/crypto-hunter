import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as BsIcon from 'react-icons/bs';
import * as FiIcon from 'react-icons/fi';
import './Navigation.css';

export default function Navigation() {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  return (
    <div className="header-container">
      <BsIcon.BsFillArrowLeftCircleFill onClick={home} />
      <p>Crypto Hunter</p>
      <div className="accessories">
        <BsIcon.BsMic className="mic" />
        <FiIcon.FiSettings className="setting" />
      </div>
    </div>
  );
}
