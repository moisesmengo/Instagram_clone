import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

// import { Container } from './styles';

export default function Header() {
  return (
    <header id='main-header'>
        <div class="header-content">
            <Link to="/">
              <img src={logo} alt='MozaGram' />
            </Link>
            <Link to="/new">
              <img src={camera} alt='Enviar publicação' />
            </Link>
        </div>
    </header>
  );
}
