import React from 'react';
import iphone from './assets/iphone.png';
// import { Container } from './styles';
import logo from './assets/logo.png';


const src: React.FC = () => {
  return (
    <div>
      <img src={logo} />
      <img src={iphone} />
    </div>
  )
}

export default src;