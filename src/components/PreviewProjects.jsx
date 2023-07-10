import React from 'react';
import Carousel from './Carousel';

import calc from '../img/calc.jpg'
import gva from '../img/gva.png'
import breve from '../img/breve.png'



const PreviewProjects = () => {
  const images = [
    {img: calc, site: 'https://calculator-app-rosy-eight.vercel.app/'}, 
    {img: gva, site: 'https://calculator-app-rosy-eight.vercel.app/'}, 
    {img: breve, site: 'https://calculator-app-rosy-eight.vercel.app/'}
  ]

  const image = images.map(image => image.img);
  return (
    <div>
      <Carousel images={image} />
    </div>
  );
};

export default PreviewProjects;
