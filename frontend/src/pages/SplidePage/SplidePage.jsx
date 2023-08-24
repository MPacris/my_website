import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./SplidePage.css"
import '@splidejs/react-splide/css';

export default () => {
  return (

    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        height: 600,
        width: 300,
        
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="/assets/IRELAND.JPG" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/assets/LSU_alumn.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/assets/rollercoasters.jpg" alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/assets/love_the_beach.jpg" alt="Image 4"/>
      </SplideSlide>
    </Splide>

  );
}