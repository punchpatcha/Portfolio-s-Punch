"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const images = ["/images/freelance/main-image.png", "/images/techsauce/image5.png", "/images/binbuddy/image4.jpg"];
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
    <div className={styles.main}>
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
      
      <main>
        <section id="contact" className={styles.contact}>
          <h1>Contact Me</h1>
          <p>Email: patcharaluk.klin@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/patcharaluk-klinsrisuk-3b9329325"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/patcharaluk-klinsrisuk
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/punchpatcha"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/punchpatcha
            </a>
          </p>
          <p>
            Resume:{" "}
            <a href="/Resume.pdf" download>
              Download My Resume
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
