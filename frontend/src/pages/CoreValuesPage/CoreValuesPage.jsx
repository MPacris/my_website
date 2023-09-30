import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./CoreValuesPage.css";

const CoreValuesPage = () => {
  const mainImages = [
    "/assets/P_Slide.png",
    "/assets/A_Slide.png",
    "/assets/C_Slide.png",
    "/assets/R_Slide.png",
    "/assets/I_Slide.png",
    "/assets/S_Slide.png",
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
        Professionalism extends beyond technical competence; it encompasses
        qualities such as integrity, reliability, and strong communication
        skills. Professionals are expected to exhibit honesty and transparency
        in their interactions, act with diligence and consistency in fulfilling
        their responsibilities, and effectively engage with colleagues, clients,
        or the public. This combination of expertise and interpersonal skills
        distinguishes professionals and positions them as trusted and respected
        figures within their professions or industries.
      </p>
    </div>,

    <div>
      <h4>Accountable</h4>
      <p>
        Being accountable means taking responsibility for one's actions,
        decisions, and obligations. It involves acknowledging and owning up to
        both successes and failures, and being answerable for the outcomes of
        one's choices. Accountability is a fundamental aspect of personal and
        professional integrity, as it demonstrates a willingness to be
        transparent and to learn from mistakes. In a professional context,
        accountability often includes meeting deadlines, honoring commitments,
        and fulfilling duties with a sense of diligence and reliability.
      </p>
      <p>
        Accountability is a reflection of an individual's core values and
        character. It signifies a person's commitment to ethical behavior,
        honesty, and the well-being of others. Accountable individuals are not
        only accountable to themselves but also to their colleagues, clients,
        and the community at large. They understand the impact of their actions
        on others and strive to make choices that align with their values and
        the greater good. Ultimately, accountability is a trait that fosters
        trust and respect in both personal and professional relationships, as it
        shows that one can be counted on to act with integrity and honor their
        commitments.
      </p>
    </div>,

    <div>
      <h4>Collaborative</h4>
      <p>
        Collaboration refers to the act of working together with others to
        achieve a common goal or purpose. It involves individuals or groups
        pooling their resources, knowledge, and skills to solve problems, create
        innovative solutions, or accomplish tasks more effectively than they
        could on their own. Collaboration often requires effective
        communication, active listening, and a willingness to compromise and
        share responsibilities. In professional settings, collaboration is
        highly valued because it can lead to increased productivity, better
        decision-making, and the generation of diverse ideas.
      </p>
      <p>
        Being collaborative reflects a person's core values of teamwork,
        cooperation, and a recognition of the collective strength of a group.
        Collaborative individuals thrive in environments where they can foster
        positive relationships, build trust, and contribute to the success of a
        team or organization. They are open to different perspectives and are
        willing to embrace the ideas and contributions of others. This trait
        also often indicates a commitment to achieving common goals and a desire
        to create a harmonious and inclusive work environment where everyone's
        contributions are valued and respected.
      </p>
    </div>,

    <div>
      <h4>Resourceful</h4>
      <p>
        Resourcefulness is the ability to find creative and effective solutions
        to challenges or problems, often with limited resources. It involves
        thinking outside the box, adapting to changing circumstances, and making
        the most of available tools and assets. Resourceful individuals are
        skilled at problem-solving, innovation, and finding alternative paths to
        success when faced with obstacles. In professional contexts,
        resourcefulness can lead to increased efficiency, cost savings, and the
        ability to navigate complex situations with confidence.
      </p>
      <p>
        Resourcefulness reflects a person's core values of adaptability,
        resilience, and a proactive mindset. Resourceful individuals are not
        easily discouraged by setbacks or constraints; instead, they view them
        as opportunities for growth and learning. They are often driven by a
        strong sense of determination and a desire to make the most of their
        talents and resources to achieve their goals. Resourcefulness also
        implies a commitment to continuous improvement and a belief in the power
        of innovation to create positive change in both personal and
        professional life.
      </p>
    </div>,

    <div>
      <h4>Innovative</h4>
      <p>
        Innovative characterizes the capacity of an individual or entity to
        imaginatively and effectively generate new ideas, solutions, and methods
        to address challenges or achieve objectives. It denotes a profound level
        of creativity, adaptability, and originality in navigating intricate
        scenarios, often by employing unconventional or groundbreaking
        approaches. An innovative person excels in pushing the boundaries of
        conventional thinking, continually exploring uncharted territories, and
        crafting resourceful strategies to conquer obstacles, thereby
        revolutionizing established norms and practices.
      </p>
      <p>
        Being innovative reflects a person's core values of curiosity,
        creativity, and a forward-thinking mindset. Innovative individuals are
        driven by a desire to make a meaningful impact on their field or
        industry by pushing boundaries and exploring uncharted territories. They
        value experimentation and embrace failure as a valuable learning
        experience on the path to innovation. Innovation also implies a
        commitment to staying at the forefront of knowledge and technology, as
        it often requires keeping up with the latest developments and trends in
        one's field.
      </p>
    </div>,

    <div>
      <h4>Strategic</h4>
      <p>
        Being strategic involves the ability to think critically and plan for
        the future, taking into consideration both short-term and long-term
        goals. Strategic individuals have a knack for analyzing complex
        situations, identifying key factors, and devising effective plans or
        approaches to achieve desired outcomes. They often prioritize tasks and
        resources based on their potential impact and align their actions with a
        clear vision or purpose. In professional contexts, strategic thinking
        can lead to more efficient decision-making, effective resource
        allocation, and the ability to adapt to changing circumstances.
      </p>
      <p>
        Strategic individuals embody core values such as foresight,
        adaptability, and a commitment to achieving meaningful objectives. They
        are often driven by a sense of purpose and a desire to make a positive
        impact on their organizations or communities. Strategic thinking also
        implies a willingness to learn from past experiences and adjust
        strategies as needed, recognizing that the path to success may require
        flexibility and continuous refinement. Ultimately, being strategic is
        about setting a course for the future and making deliberate choices that
        lead to the fulfillment of long-term goals and aspirations.
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
        <div className="col-lg-12">
          <div className="title">
          <h1>Core Values</h1>
          </div>
        </div>
      </div>
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
        <div className="bottom-container">
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
    </div>
  );
};

export default CoreValuesPage;
