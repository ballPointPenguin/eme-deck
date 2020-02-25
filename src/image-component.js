import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'spectacle';

const images = {
  cdnjs: '../assets/cdnjs.png',
  codepen: '../assets/codepen.png',
  garfield: '../assets/garfield.png',
  rube: '../assets/rube.gif',
  whatis: '../assets/whatis.jpg'
}

const Img = ({ name, width='32rem' }) => {
  return <Image src={images[name]} style={{ width, marginLeft: 'auto', marginRight: 'auto' }} />;
};

Img.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default Img;
