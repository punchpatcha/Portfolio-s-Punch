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
    "/images/techsauce/image2.png",
    "/images/techsauce/image3.png",
    "/images/techsauce/image4.png",
    "/images/techsauce/image5.png",
    "/images/techsauce/image6.png",
  ],
  binbuddy: [
    "/images/binbuddy/img1.png",
    "/images/binbuddy/image2.png",
    "/images/binbuddy/image3.png",
    "/images/binbuddy/image4.jpg",
  ],
  bu2023: [
    "/images/bu2023/image1.png",
    "/images/bu2023/image2.png",
    "/images/bu2023/image3.png",
    "/images/bu2023/image4.png",
  ],
  workpoint: [
    "/images/workpoint/image1.jpg",
    "/images/workpoint/image2.jpg",
    "/images/workpoint/image3.jpg",
    "/images/workpoint/image4.jpg",
    "/images/workpoint/image5.jpg",
  ],
  youtuber: [
    "/images/youtuber/image1.png",
    "/images/youtuber/image2.png",
    "/images/youtuber/image3.png",
    "/images/youtuber/image4.png",
  ],
  scl: [
    "/images/scl/image1.jpg",
    "/images/scl/image2.jpg",
    "/images/scl/image3.png",
    "/images/scl/image4.png",
    "/images/scl/image5.png",
  ],
  freelance: [
    "/images/freelance/img.png",
    "/images/freelance/img1.jpg",
    "/images/freelance/img2.jpg",
    "/images/freelance/img3.png",
    "/images/freelance/img4.jpg",
    "/images/freelance/img5.png"
  ],

};

const ExperienceDetail = ({ params }) => {
  const { year } = params;
  const experiences = {
    2024: [
      {
        title: "Thai SMS Showcase",
        date: "29 - 30 August 2024",
        description: `I developed and showcased an AI model for detecting Thai SMS messages, coding the model 
        and integrating it into a web application. I designed and implemented the web app using Python and Next.js, enabling real-time SMS detection. During live demonstrations, I explained how the AI model works and how the code facilitates SMS detection, offering real-time testing and insights on the web platform.
`,
        imageId: "thai-sms-showcase",
      },
      {
        title: "Techsauce Volunteer",
        date: "7 - 9 August 2024",
        description: `As a volunteer at Techsauce, I played a key role in escorting speakers and guests, serving as an interpreter between them and the backstage team. I managed the showcase stage, providing essential support to overseas speakers, Thai government agencies, and Thai startups. My responsibilities included ensuring speakers had everything they needed, from refreshments to resolving any presentation issues, contributing to the smooth execution of the event.

`,
        imageId: "techsauce",
      },
      {
        title: "BinBuddy",
        date: "11 May 2024",
        description: `I led the development of "BinBuddy," an innovative smart exchange machine designed to address the increasing issue of parcel waste from online shopping. Using the concept "Transform Your Trash into Happiness," I created a system that promotes recycling by offering personalized rewards. This project was recognized with the First Place Award in a pitching competition, highlighting its impact and effectiveness in promoting sustainable waste management.`,
        imageId: "binbuddy",
      },
    ],
    2023: [
      {
        title: "Part of Speaker Volunteer at Bu Openhouse 2023",
        date: "9 November 2023",
        description: `I had the opportunity to be a Volunteer at Bangkok University’s Openhouse 2023, where I guided high school students through an introduction to IoT (Internet of Things) using Arduino. This hands-on project
         is part of the third-year curriculum, and I helped the students understand its fundamentals, providing them with insights into what they will be learning in their future studies. It was a rewarding experience, allowing me to share my knowledge while inspiring the next generation of learners.`,
        imageId: "bu2023",
      },
    ],
    2022: [
      {
        title: "BU x Workpoint Creative Sandbox Competition 2022 ",
        date: "13 August 2022",
        description: `I participated in the BU x Workpoint Creative Sandbox, a competition aimed at creating innovative TV show concepts, sponsored by Workpoint. Our team developed "Killer Lies ไม่ตายก็รอด," a thrilling reality game show inspired by board games, where contestants navigate a suspenseful
         challenge to uncover a "killer" among them. In my role as the video editor, I designed and edited dynamic motion graphics and produced a captivating teaser for the show using Adobe After Effects, Premiere Pro, and Photoshop. Our efforts were recognized with an Honorable Mention award, highlighting the project's creativity and execution.`,
        imageId: "workpoint",
      },
      {
        title: "Youtuber",
        date: "2022 - Present",
        description: `"P Punchi" is my YouTube channel where I take charge of scripting, ideating, and editing all content. 
        I never grow tired of the creative process, whether it’s editing videos, illustrating graphics, 
        or crafting engaging sponsorship scripts. The channel primarily focuses on makeup tutorials, 
        which has attracted beauty brands to collaborate with me for product reviews. This experience has honed my skills in negotiating deals, applying creative problem-solving, and managing time efficiently, given the detailed work involved in content creation and troubleshooting.`,
        imageId: "youtuber",
      },
    ],
    2021: [
      {
        title: "SCL [Social Change Leader Incubation Program]",
        date: "12 June 2021 - 12 August 2022",
        description: `As part of the Social Change Leader Incubation Program, I developed a project focused on waste segregation. This initiative involved designing distinctive waste bins and creating educational content about waste separation, which is often overlooked by the public. The content was delivered through an online platform and tested at Bangkok University. My responsibilities included brainstorming and analyzing innovative ideas for waste segregation, and collecting and analyzing data from the bins on a weekly basis. At the conclusion of the program, our team donated the collected waste to recycling facilities. This experience enhanced my leadership skills and refined my abilities in critical thinking and analysis.`,
        imageId: "scl",
      },
      {
        title: "Freelance Arts & Content Creator",
        date: "2021 – Present",
        description: `I began accepting illustration commissions around 2021 when my Instagram page, _shopskyy, started gaining traction. Since then, I have taken on various graphic design projects and content creation tasks, including promotional 
        designs for clients. I also launched a new page, bechubbyy, focused on digital art with animated elements. These projects have been a creative outlet and a source of income while balancing my studies.`,
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
            mainImages[experience.imageId] ;

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
                    <h1>{experience.date}</h1>
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
                    <h1>{experience.date}</h1>
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
