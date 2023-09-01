import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./CoreValuesPage.css";

const CoreValuesPage = () => {
  const mainImages = [
    "/assets/P_Slide.png",
    "/assets/LSU_alumn.jpg",
    "/assets/rollercoasters.jpg",
    "/assets/love_the_beach.jpg",
  ];

  // Add descriptions for each image as text with multiple paragraphs
  const textDescriptions = [
    <div>
      <p>

      Professionalism is a multifaceted term that encompasses a set of qualities, behaviors, and standards expected of individuals within their respective fields or occupations. Often regarded as a core value, professionalism revolves around the demonstration of expertise, competence, and ethical conduct in one's work. It signifies a commitment to upholding established industry standards and best practices, thereby ensuring the highest level of quality and integrity in all professional endeavors.
      </p>
      <p>
      In addition to competence and adherence to ethical principles, professionalism also involves qualities such as reliability, punctuality, and accountability. Professionals are expected to fulfill their responsibilities with dedication, consistency, and a strong sense of duty. Effective communication, both within the professional context and with clients or colleagues, is another integral aspect of professionalism. It fosters collaborative environments, facilitates problem-solving, and contributes to positive relationships. Overall, professionalism sets the benchmark for excellence and ethical conduct in various domains, guiding individuals toward the achievement of their goals while promoting mutual respect and trust within their respective fields.
      </p>
    </div>,
    <div>
      <p>Paragraph 1 of Description for Image 2.</p>
      <p>Paragraph 2 of Description for Image 2.</p>
      <p>Paragraph 3 of Description for Image 2.</p>
    </div>,
    // Repeat the pattern for other descriptions
    // ...
  ];

  const splideRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
      setCurrentImageIndex(index);
    }
  };

  return (
    <div className="gallery-container">
      <div className="row">
        <div className="top-container">
          <div className="col-md-4">
            <div className="main-image">
              <Splide
                options={{
                  rewind: true,
                  gap: "1rem",
                  perPage: 1,
                  height: 600,
                  width: 400,
                }}
                ref={splideRef}
                onMoved={(splide, newIndex) =>
                  setCurrentImageIndex(newIndex)
                }
                aria-label="My Favorite Images"
              >
                {mainImages.map((image, index) => (
                  <SplideSlide key={index}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={{ maxWidth: "100%", height: "100%" }}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
          <div className="col-md-8">
            <div className="description">
              {textDescriptions[currentImageIndex]}
              {/* Display the text description for the current image */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
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