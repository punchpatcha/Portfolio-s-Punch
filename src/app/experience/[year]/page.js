"use client";

import { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./ExperienceDetail.module.css";
import { getImageSrc } from "../../utils/imageUtils"; // Adjust the import path as needed

// Define image sets for each experience
const imageSets = {
  "thai-sms-showcase": [
    "/images/thai-sms-showcase/image1.jpg",
    "/images/thai-sms-showcase/image2.jpg",
    "/images/thai-sms-showcase/image3.jpg",
    "/images/thai-sms-showcase/image4.jpg",
  ],
  techsauce: [
    "/images/techsauce/image1.png",
    "/images/techsauce/image2.jpg",
    "/images/techsauce/image3.jpg",
    "/images/techsauce/image4.jpg",
    "/images/techsauce/image5.jpg",
    "/images/techsauce/image6.jpg",
  ],
  binbuddy: [
    "/images/binbuddy/image1.png",
    "/images/binbuddy/image2.jpg",
    "/images/binbuddy/image3.jpg",
    "/images/binbuddy/image4.jpg",
  ],
  bu2023: [
    "/images/bu2023/image1.jpg",
    "/images/bu2023/image2.jpg",
    "/images/bu2023/image3.jpg",
    "/images/bu2023/image4.jpg",
  ],
  workpoint: [
    "/images/workpoint/image1.jpg",
    "/images/workpoint/image2.jpg",
    "/images/workpoint/image3.jpg",
    "/images/workpoint/image4.jpg",
    "/images/workpoint/image5.jpg",
  ],
  youtuber: [
    "/images/youtuber/image1.jpg",
    "/images/youtuber/image2.jpg",
    "/images/youtuber/image3.jpg",
    "/images/youtuber/image4.jpg",
  ],
  scl: [
    "/images/scl/image1.jpg",
    "/images/scl/image2.jpg",
    "/images/scl/image3.jpg",
    "/images/scl/image4.jpg",
  ],
  freelance: [
    "/images/freelance/image1.jpg",
    "/images/freelance/image2.jpg",
    "/images/freelance/image3.jpg",
    "/images/freelance/image4.jpg",
  ],

};

const ExperienceDetail = ({ params }) => {
  const { year } = params;
  const experiences = {
    2024: [
      {
        title: "Thai SMS Showcase",
        date: "29 - 30 August 2024",
        description: `Developed and presented an AI model for detecting Thai SMS, 
        including coding the model and integrating it into a web application. 
        Designed and implemented the web application, utilizing technologies 
        such as Python and Next.js to enable real-time SMS detection. Conducted 
        live demonstrations, explaining the AI model's functionality and how the 
        code supports SMS detection, while providing real-time testing on the web platform.`,
        imageId: "thai-sms-showcase",
      },
      {
        title: "Techsauce Volunteer",
        date: "7 - 9 August 2024",
        description: `Escorted speakers and guests, acted as an interpreter between speakers 
                  and the backstage team. Coordinated the showcase stage, assisted overseas speakers, 
                  Thai government agencies, and Thai startups. Provided support to speakers, including 
                  attending to their needs, such as water or presentation issues.`,
        imageId: "techsauce",
      },
      {
        title: "BinBuddy",
        date: "11 May 2024",
        description: `Led the development of "BinBuddy," a smart exchange machine that addresses 
                      the increasing problem of parcel waste from online shopping. Used the concept 
                      of startup business with the idea "Transform Your Trash into Happiness" to promote 
                      recycling of waste by offering personalized rewards.`,
        imageId: "binbuddy",
      },
    ],
    2023: [
      {
        title: "Part of Speaker Volunteer at Bu Openhouse 2023",
        date: "9 November 2023",
        description: `Developed and presented an AI model for detecting Thai SMS, 
          including coding the model and integrating it into a web application. 
          Designed and implemented the web application, utilizing technologies 
          such as Python and Next.js to enable real-time SMS detection. Conducted 
          live demonstrations, explaining the AI model's functionality and how the 
          code supports SMS detection, while providing real-time testing on the web platform.`,
        imageId: "bu2023",
      },
    ],
    2022: [
      {
        title: "BU x Workpoint Creative Sandbox Competition ",
        date: "13 August 2022",
        description: `Developed and presented an AI model for detecting Thai SMS, 
              including coding the model and integrating it into a web application. 
              Designed and implemented the web application, utilizing technologies 
              such as Python and Next.js to enable real-time SMS detection. Conducted 
              live demonstrations, explaining the AI model's functionality and how the 
              code supports SMS detection, while providing real-time testing on the web platform.`,
        imageId: "workpoint",
      },
      {
        title: "Youtuber",
        date: "2022 - Present",
        description: `Developed and presented an AI model for detecting Thai SMS, 
              including coding the model and integrating it into a web application. 
              Designed and implemented the web application, utilizing technologies 
              such as Python and Next.js to enable real-time SMS detection. Conducted 
              live demonstrations, explaining the AI model's functionality and how the 
              code supports SMS detection, while providing real-time testing on the web platform.`,
        imageId: "youtuber",
      },
    ],
    2021: [
      {
        title: "SCL [Social Change Leader Incubation Program]",
        date: "29 - 30 August 2024",
        description: `Developed and presented an AI model for detecting Thai SMS, 
                  including coding the model and integrating it into a web application. 
                  Designed and implemented the web application, utilizing technologies 
                  such as Python and Next.js to enable real-time SMS detection. Conducted 
                  live demonstrations, explaining the AI model's functionality and how the 
                  code supports SMS detection, while providing real-time testing on the web platform.`,
        imageId: "scl",
      },
      {
        title: "Freelance Arts & Content Creator",
        date: "2021 – Present",
        description: `Developed and presented an AI model for detecting Thai SMS, 
                  including coding the model and integrating it into a web application. 
                  Designed and implemented the web application, utilizing technologies 
                  such as Python and Next.js to enable real-time SMS detection. Conducted 
                  live demonstrations, explaining the AI model's functionality and how the 
                  code supports SMS detection, while providing real-time testing on the web platform.`,
        imageId: "freelance",
      },
    ],
  };

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const [mainImages, setMainImages] = useState({});

  const openGallery = (experience) => {
    setSelectedExperience(experience);
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedExperience.images.length
    );
  };

  const handleBack = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedExperience.images.length) %
        selectedExperience.images.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(new Event("swipedLeft")),
    onSwipedRight: () => handleBack(new Event("swipedRight")),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isGalleryOpen]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains(styles.hamburger)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const loadMainImages = async () => {
      const updatedMainImages = {};
      for (const experience of experiences[year] || []) {
        const src = await getImageSrc(
          `/images/${experience.imageId}/main-image`,
          ["jpg", "png"]
        );
        updatedMainImages[experience.imageId] = src;
      }
      setMainImages(updatedMainImages);
    };
    loadMainImages();
  }, [year]);

  const currentExperiences = experiences[year] || [];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/">Patcharaluk</a>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <nav
          className={`${styles.navbar} ${isMenuOpen ? styles.open : ""}`}
          ref={menuRef}
        >
          <ul className={styles.navLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {isMenuOpen && (
          <div className={styles.backdrop} onClick={closeMenu}></div>
        )}
      </header>

      <div className={styles.content}>
        <div className={styles.yearTitle}>
          <h1>{year}</h1>
        </div>

        {/* Iterate through each experience for the selected year */}
        {currentExperiences.map((experience, index) => {
          const selectedImages = imageSets[experience.imageId] || [];
          const mainImageSrc =
            mainImages[experience.imageId] || "/images/placeholder.jpg";

          return (
            <div
              className={`${styles.detailSection} ${
                index % 2 === 0 ? styles.evenRow : styles.oddRow
              }`}
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  <div className={styles.textColumn}>
                    <h2>{experience.title}</h2>
                    <p className={styles.grayText}>{experience.date}</p>
                    <p>{experience.description}</p>
                  </div>
                  <div className={styles.experienceDetails}>
                    <img
                      src={mainImageSrc}
                      alt={`Experience of ${year}`}
                      onClick={() =>
                        openGallery({
                          images: selectedImages,
                          title: experience.title,
                        })
                      }
                      className={styles.mainImage}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.experienceDetails}>
                    <img
                      src={mainImageSrc}
                      alt={`Experience of ${year}`}
                      onClick={() =>
                        openGallery({
                          images: selectedImages,

                          title: experience.title,
                        })
                      }
                      className={styles.mainImage}
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <h2>{experience.title}</h2>
                    <p className={styles.grayText}>{experience.date}</p>
                    <p>{experience.description}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}

        {/* Popup Gallery */}
        {isGalleryOpen && selectedExperience && (
          <div className={styles.popupGallery} onClick={closeGallery}>
            <div className={styles.galleryContent} {...swipeHandlers}>
              <button className={styles.closeButton} onClick={closeGallery}>
                &times;
              </button>
              <img
                src={selectedExperience.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className={styles.galleryImage}
              />
              <button className={styles.prevButton} onClick={handleBack}>
                &#8249;
              </button>
              <button className={styles.nextButton} onClick={handleNext}>
                &#8250;
              </button>
              <div className={styles.pagination}>
                {selectedExperience.images.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      index === currentImageIndex ? styles.activeDot : ""
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;
