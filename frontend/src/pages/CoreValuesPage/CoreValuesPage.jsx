import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./CoreValuesPage.css";

const CoreValuesPage = () => {
  const mainImages = [
    "/assets/P_Slide.png",
    "/assets/A_Slide.png",
    "/assets/C_Slide.png",
    "/assets/E_Slide.png",
    "/assets/R_Slide.png",
  ];

  // Add descriptions for each image as text with multiple paragraphs
  const textDescriptions = [
    <div>
      <h4>Professional</h4>
      <p>
        A professional is an individual who has attained a high level of
        expertise, skill, and competence in a specific occupation, field, or
        discipline. This expertise is typically backed by specialized education,
        training, or experience, allowing professionals to provide specialized
        services, insights, or solutions. Professionals are often held to a set
        of ethical and moral standards within their respective fields, and their
        conduct is expected to adhere to these standards. These individuals
        demonstrate a commitment to continuous learning and improvement, staying
        up-to-date with developments in their field, and applying their
        knowledge to solve complex problems or deliver valuable services.
      </p>
      <p>
        Furthermore, professionalism extends beyond technical competence; it
        encompasses qualities such as integrity, reliability, and strong
        communication skills. Professionals are expected to exhibit honesty and
        transparency in their interactions, act with diligence and consistency
        in fulfilling their responsibilities, and effectively engage with
        colleagues, clients, or the public. This combination of expertise and
        interpersonal skills distinguishes professionals and positions them as
        trusted and respected figures within their professions or industries.
      </p>
    </div>,

    <div>
      <h4>Accountable</h4>
      <p>
        The term "accountable" refers to a fundamental concept that signifies an
        individual's responsibility for their actions, decisions, and
        obligations. It denotes the willingness and readiness to accept the
        consequences, whether positive or negative, for one's behavior or
        performance. Accountability involves being answerable to others, such as
        authorities, peers, or stakeholders, for the outcomes of one's actions
        and for meeting commitments, expectations, or standards.
      </p>
      <p>
        In essence, being accountable implies a sense of ownership and
        transparency in one's actions and decisions. It is a quality that is
        highly regarded in various aspects of life, including professional,
        personal, and ethical contexts. Individuals who are accountable take
        their duties and obligations seriously, and they proactively ensure that
        they meet the agreed-upon standards and expectations. Accountability
        fosters trust, reliability, and ethical behavior, making it an essential
        trait in both professional and personal settings.
      </p>
    </div>,

    <div>
      <h4>Collaborative</h4>
      <p>
        Collaborative describes a cooperative and mutually beneficial effort
        involving the active participation and contributions of multiple
        individuals or groups working together toward a shared goal, objective,
        or project. Collaboration emphasizes open communication, synergy, and
        the combined expertise of all parties involved. It often transcends
        individual boundaries, promoting teamwork, unity, and the pooling of
        resources, knowledge, and skills to achieve more collectively than what
        could be accomplished individually.
      </p>
      <p>
        In essence, being accountable implies a sense of ownership and
        transparency in one's actions and decisions. It is a quality that is
        highly regarded in various aspects of life, including professional,
        personal, and ethical contexts. Individuals who are accountable take
        their duties and obligations seriously, and they proactively ensure that
        they meet the agreed-upon standards and expectations. Accountability
        fosters trust, reliability, and ethical behavior, making it an essential
        trait in both professional and personal settings.
      </p>
    </div>,

    <div>
      <h4>Ethical</h4>
      <p>
        Ethical pertains to principles, standards, and behaviors that conform to
        a moral code or a system of accepted values, often involving notions of
        what is right, virtuous, and just. It encompasses the distinction
        between right and wrong, and ethical conduct is guided by a sense of
        integrity, fairness, and responsibility towards others and the broader
        community. Ethical actions and decisions align with established moral
        norms and are characterized by honesty, transparency, and a commitment
        to uphold the welfare and rights of individuals and society as a whole.
      </p>
      <p>
        Ethical behavior is fundamental in various aspects of life, including
        professions, businesses, and personal relationships. It serves as a
        foundation for trust, credibility, and social harmony. Ethical
        principles guide individuals and organizations in making choices that
        consider the consequences of their actions, promoting a sense of
        accountability and respect for diverse perspectives. Upholding ethics
        fosters a sense of social responsibility, empathy, and justice,
        contributing to the betterment of society and the cultivation of a moral
        and conscientious environment.
      </p>
    </div>,

<div>
<h4>Resourceful</h4>
<p>
Resourceful describes the ability of an individual or entity to effectively and cleverly find solutions, overcome challenges, and make the most of available resources to achieve their goals or address problems. It signifies a high degree of creativity, adaptability, and ingenuity in navigating complex situations, often by using limited or unconventional means. A resourceful person excels in thinking outside the box, efficiently managing resources, and generating innovative approaches to tackle obstacles, making the most of what is at their disposal.
</p>
<p>
Being resourceful is a highly valuable trait in various aspects of life, including professional endeavors, problem-solving, and entrepreneurship. It involves leveraging one's knowledge, skills, and existing resources to optimize outcomes and seize opportunities, even when faced with constraints or uncertainties. Resourcefulness fosters resilience and self-reliance, enabling individuals to confront adversity with confidence and find inventive solutions that can lead to personal growth and success.
</p>
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
                onMoved={(splide, newIndex) => setCurrentImageIndex(newIndex)}
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
