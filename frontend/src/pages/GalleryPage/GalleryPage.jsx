import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './GalleryPage.css';

const GalleryPage = () => {
  const mainImages = [
    '/assets/IRELAND.JPG',
    '/assets/LSU_alumn.jpg',
    '/assets/rollercoasters.jpg',
    '/assets/love_the_beach.jpg',
  ];

  const splideRef = useRef(null);

  const handleThumbnailClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index); // Go to the clicked thumbnail's corresponding slide
    }
  };

  return (
    <div>
      <Splide
        options={{
          rewind: true,
          gap: '1rem',
          perPage: 1,
          maxheight: 600,
          width: 300,
        }}
        ref={splideRef}
        aria-label="My Favorite Images"
      >
        {mainImages.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: '100%' }} />
          </SplideSlide>
        ))}
      </Splide>

      <div className="thumbnails">
        {mainImages.map((image, index) => (
          <div
            key={index}
            className={`thumbnail`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;