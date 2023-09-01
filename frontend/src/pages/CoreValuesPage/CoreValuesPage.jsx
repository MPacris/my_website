import React, { useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './CoreValuesPage.css';

const CoreValuesPage = () => {
  const mainImages = [
    '/assets/IRELAND.JPG',
    '/assets/LSU_alumn.jpg',
    '/assets/rollercoasters.jpg',
    '/assets/love_the_beach.jpg',
  ];

  // Add descriptions for each image
  const imageDescriptions = [
    "The oldest church in Dublin is St. Michan's Church, a historic and atmospheric place of worship located in the heart of the city. Dating back to the 11th century, this ancient church has borne witness to over a millennium of Dublin's history. What sets St. Michan's apart are its famous crypts, which house remarkably well-preserved mummies, some dating back to the 17th century, providing a unique and eerie glimpse into Dublin's past. The church itself is a beautiful example of Gothic architecture, with a rich history of religious services, making it a must-visit destination for both history enthusiasts and those interested in Dublin's spiritual heritage",
    "Description for Image 2",
    "Description for Image 3",
    "Description for Image 4",
  ];

  const splideRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index); // Go to the clicked thumbnail's corresponding slide
      setCurrentImageIndex(index);
    }
  };

  return (
    <div className='gallery-container'>
      <div className='row'>
        <div className='main-image'>
          <Splide
            options={{
              rewind: true,
              gap: '1rem',
              perPage: 1,
              maxheight: 600,
              width: 300,
            }}
            ref={splideRef}
            onMoved={(splide, newIndex) => setCurrentImageIndex(newIndex)}
            aria-label="My Favorite Images"
          >
            {mainImages.map((image, index) => (
              <SplideSlide key={index}>
                <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: '100%' }} />
              </SplideSlide>
            ))}
          </Splide>
          <p>{imageDescriptions[currentImageIndex]}</p> {/* Display the description for the current image */}
        </div>
      </div>
      <div className='row'>
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
    </div>
  );
};

export default CoreValuesPage;