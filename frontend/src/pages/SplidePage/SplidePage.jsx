import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SplidePage= () => {

  

  return (

    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        perPage: 1,
        maxheight: 600,
        width: 300,
        
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="/assets/IRELAND.JPG" alt="Image 1" style={{ maxWidth: '100%', height: '100%' }}/>
        
      </SplideSlide>
      <SplideSlide>
        <img src="/assets/LSU_alumn.jpg" alt="Image 2" style={{ maxWidth: '100%', height: '100%' }}/>
      </SplideSlide>
      <SplideSlide>
        <img src="/assets/rollercoasters.jpg" alt="Image 3" style={{ maxWidth: '100%', height: '100%' }}/>
      </SplideSlide>
      <SplideSlide>
        <img src="/assets/love_the_beach.jpg" alt="Image 4" style={{ maxWidth: '100%', height: '100%' }}/>
      </SplideSlide>
    </Splide>

  );
}

export default SplidePage;