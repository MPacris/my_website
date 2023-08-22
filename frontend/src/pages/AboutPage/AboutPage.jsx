import React from 'react';
import './AboutPage.css'; // You can define your styles in this CSS file


const AboutPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* Place your image here */}
          <img src="/assets/MeynardPacris.jpg" alt="profile" className="profile" />
        </div>
        <div className="col-md-4">
          {/* Text in top middle and top right */}
          <div className="row">
            <div className="col-md-12">
              <h1>About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>This is the about us section where you can describe your company or team.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Multiple images in the bottom row */}
          <div className="d-flex justify-content-between">
            <img src="image_url" alt="Image 1" className="img-fluid" />
            <img src="image_url" alt="Image 2" className="img-fluid" />
            <img src="image_url" alt="Image 3" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;