import React from "react";
import "./AboutPage.css"; // You can define your styles in this CSS file

const AboutPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Place your image here */}
          <img
            src="/assets/NOLA header.png"
            alt="profile"
            className="profile"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {/* Place your image here */}
          <img
            src="/assets/MeynardPacris.png"
            alt="profile"
            className="profile"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {/* Place your image here */}
          <img
            src="/assets/AboutMe.png"
            alt="profile"
            className="profile"
          />
        </div>
      </div>



      <div className="row">
        <div className="col-md-12">
          {/* Multiple images in the bottom row */}
          <div className="d-flex justify-content-between">
            <div className="picturecard">
              <img
                src="/assets/LSU_alumn.jpg" 
                alt="interests"
                className="image-fluid"
              />
              <div className="figcaption">
                <p>LSU Alumn: Love Purple, Live Gold </p>
              </div>
            </div>

            <div className="picturecard">
              <img
                src="/assets/rollercoasters.jpg" 
                alt="interests"
                className="image-fluid"
              />
              <div className="figcaption">
                <p>Theme Park Enthusiast!!</p>
              </div>
            </div>

            <div className="picturecard">
              <img
                src="/assets/love_the_beach.jpg" 
                alt="interests"
                className="image-fluid"
              />
              <div className="figcaption">
                <p>Ocean Views are the Best Views</p>
              </div>
            </div>

            <div className="picturecard">
              <img
                src="/assets/travel.jpg" 
                alt="interests"
                className="image-fluid"
              />
              <div className="figcaption">
                <p>Early Morning Flights are Preferred</p>
              </div>
            </div>

            <div className="picturecard">
              <img
                src="/assets/saints_fan.jpg" 
                alt="interests"
                className="image-fluid"
              />
              <div className="figcaption">
                <p>Who Dat!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;