import React from 'react';
import './AboutPage.css'; // You can define your styles in this CSS file

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="top-left">
        {/* Place your image here */}
        <img src="image_url" alt="Top Left" />
      </div>
      <div className="top-right">
        {/* Text in top middle and top right */}
        <div className="top-middle">
          <h1>About Us</h1>
        </div>
        <div className="top-right-text">
          <p>This is the about us section where you can describe your company or team.</p>
        </div>
      </div>
      <div className="bottom-row">
        {/* Multiple images in the bottom row */}
        <div className="image-flex-container">
          <img src="image_url" alt="Image 1" />
          <img src="image_url" alt="Image 2" />
          <img src="image_url" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;