'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const images = [
    "/cv.jpg",
    "/cv1.png",
    "/cv2.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBars, setProgressBars] = useState(Array(images.length).fill(0));

  useEffect(() => {
    let resetTimeout;
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        resetTimeout = setTimeout(() => {
          setProgressBars(Array(images.length).fill(0)); // Reset progress bars
          setCurrentIndex(0); // Reset the index to the first image
        }, 100); // Short delay before resetting
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1));
      }
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
      clearTimeout(resetTimeout);
    };
  }, [currentIndex, images.length]);

  return (
    <div className={styles.container}>

      {/* Header Section */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a href="/">Portfolio</a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="/home">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
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
          className={`${styles.carouselImage} ${currentIndex === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>
      ))}
    </section>
    
      {/* Profile Section */}
      <section className={styles.profile}>
        <div className={styles.profileText}>
          <p className={styles.smallText}>Hello,</p>
          <h1 className={styles.largeText}>I'm Punch</h1>
          <p className={styles.smallText}>I am...</p>
        </div>
        <div className={styles.profileImage}>
          {/* Insert your image here */}
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.education}>
        <div className={styles.timeline}>
          {/* Timeline with icons */}
        </div>
        <div className={styles.educationDetails}>
          <div className={styles.educationItem}>Bachelor's Degree</div>
          <div className={styles.educationItem}>High School</div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <h2>What skill I have?</h2>
        <div className={styles.skillsContent}>
          <div className={styles.skillsProjects}>
            <p>My project</p>
            <button>See More</button>
          </div>
          <div className={styles.skillsImages}>
            {/* Insert images with short descriptions here */}
          </div>
        </div>
      </section>

      {/* Skills Details Section */}
      <section className={styles.skillsDetails}>
        <div className={styles.technicalSkills}>
          {/* Technical skills icons */}
        </div>
        <div className={styles.designSkills}>
          {/* Design skills icons */}
        </div>
        <div className={styles.softSkills}>
          {/* Soft skills icons and text */}
        </div>
      </section>
    </div>
  );
}
