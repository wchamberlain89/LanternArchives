import React from 'react';
import {textStyles, imageStyles, containerStyles} from './styles';
import lanternLogo from './../../assets/lanternLogo.png';

function HomeLogo() {
  return(
    <div style={containerStyles}>
      <h1 style={textStyles}>Lantern Archives</h1>
      <img src={lanternLogo} style={imageStyles} alt=""/>
    </div>
  );
}

export default HomeLogo;
