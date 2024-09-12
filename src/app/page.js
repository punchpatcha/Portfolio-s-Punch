"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const images = [
    "/cover/image1.png",
    "/cover/image2.jpg",
    "/cover/image3.jpg",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

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

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Reset the carousel and progress bars when the page becomes visible
        setCurrentIndex(0);
        setProgressBars(Array(images.length).fill(0));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Timer progress
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBars, setProgressBars] = useState(
    Array(images.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setProgressBars(Array(images.length).fill(0)); // Reset progress bars
      }
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds for each image

    const progressInterval = setInterval(() => {
      setProgressBars((prevProgressBars) => {
        const newProgressBars = [...prevProgressBars];
        newProgressBars[currentIndex] = newProgressBars[currentIndex] + 1;
        return newProgressBars;
      });
    }, 100); // Update progress every 100ms (10 seconds / 100 steps)

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentIndex, images.length]);

  return (
    <div className={styles.container}>
      {/* Header Section */}
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

      {/* Image Carousel Section */}
      <section className={styles.carousel}>
        <div className={styles.progressContainer}>
          {progressBars.map((progress, index) => (
            <div key={index} className={styles.progressBarWrapper}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          ))}
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselImage} ${
              currentIndex === index ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </section>

      {/* Profile Section */}
      <section className={styles.profile}>
        <div className={styles.profileText}>
          <p className={styles.smallerTextp}>Hello,</p>
          <h1>
            <span className={styles.smallerTexth1}>I'm </span>
            <span className={styles.largeText}>Patcharaluk Klinsrisuk</span>
          </h1>
          <p className={styles.smallText}>
            {" "}
            I’m a fourth-year Computer Science student at Bangkok University
            with a strong background in design and a growing passion for data
            analysis and AI.
            <br></br> As a scholarship student, I’m recognized for my quick
            learning and dedication. I recently showcased an AI analysis
            project, demonstrating my ability to integrate data insights and
            practical applications. Eager to combine my design skills with data
            and AI,I’m ready to tackle new challenges and advance in data
            analysis
          </p>
        </div>
        <div className={styles.profileImage}>
          <img src="/cv.png" alt="Profile" />
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.educationSection}>
        <h2 className={styles.educationTitle}>Education</h2>
        <div className={styles.educationContainer}>
          <div className={styles.educationDetails}>
            <div className={styles.educationItem}>
              <div className={styles.circleNumber}>01</div>
              <div className={styles.textContent}>
                <div className={styles.year}>2021 - Recently</div>
                <li className={styles.name}>Bangkok University </li>
                <div className={styles.degree}>
                  Bachelor of Science in Computer Science
                </div>
                <div className={styles.degree}>
                  School of Information technology and innovation
                </div>
                <div className={styles.degree}>
                Scholarship Student
                </div>
                <div className={styles.degree}>
                GPA: 3.98
                </div>
              </div>
            </div>
            <div className={styles.educationItem}>
              <div className={styles.circleNumber}>02</div>
              <div className={styles.textContent}>
                <div className={styles.year}>2015 - 2021</div>
                <li className={styles.name}>
                  Triamudom Suksa Pattanakarn Nonthaburi
                </li>
                <div className={styles.degree}>Science and Mathematic Program</div>
                <div className={styles.degree}>
                GPA: 3.75
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillsContent}>
          <div className={styles.skillsText}>
            <h2 className={styles.skillsTitle}>My Projects</h2>
            <Link href="/projects">
              <button className={styles.seeMoreButton}>View More</button>
            </Link>
          </div>
          <div className={styles.skillsImages}>
            <div className={`${styles.serviceItem} ${styles.draggable}`}>
              <img src="/myskill/image1.jpg" alt="Project 1" />
              <p className={styles.imageDescription}>
                Thai SMS Classification by AI
              </p>
            </div>
            <div className={`${styles.serviceItem} ${styles.draggable}`}>
              <img src="/myskill/image2.png" alt="Project 2" />
              <p className={styles.imageDescription}>Artwork Design</p>
            </div>
            <div className={`${styles.serviceItem} ${styles.draggable}`}>
              <img src="/myskill/image3.png" alt="Project 3" />
              <p className={styles.imageDescription}>Woca Mobile App</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skillsDetails}>
        <div className={styles.row}>
          {/* Technical Skills Section */}
          <div className={styles.leftColumn}>
    <h2 className={styles.skillsTitleT}>Technical Skills</h2>
    <ul>
      <li>Python</li>
      <li>JavaScript</li>
      <li>HTML/CSS</li>
      <li>Next.js</li>
      <li>React.js</li>
      <li>Data Visualization</li>
      <li>Microsoft Office</li>
      <li>Visual Studio Code</li>
    </ul>
  </div>

          {/* Design Skills Section */}
          <div className={styles.rightColumn}>
    <h2 className={styles.skillsTitleT}>Design Skills</h2>
    <ul>
      <li>UI/UX Design</li>
      <li>Adobe Photoshop</li>
      <li>Adobe Premiere Pro</li>
      <li>Figma</li>
      <li>Procreate</li>
    </ul>
  </div>
        </div>

        {/* Soft Skills Section */}
        <div className={styles.centerRow}>
          <h2 className={styles.skillsTitleT}>Soft Skills</h2>
          <div className={styles.skillList}>
            <div className={styles.skill}>
              <li> Leadership</li>
            </div>
            <div className={styles.skill}>
              <li>Adaptability </li>
            </div>
            <div className={styles.skill}>
              <li>Creativity </li>
            </div>
            <div className={styles.skill}>
              <li>Attention to Detail</li>
            </div>
            <div className={styles.skill}>
              <li>Time Management</li>
            </div>
            <div className={styles.skill}>
              <li>Problem-Solving</li>
            </div>
            <div className={styles.skill}>
              <li>Presentation</li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
