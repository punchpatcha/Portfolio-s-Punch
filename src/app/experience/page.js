"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Experience.module.css";

const ExperienceTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);
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

  const years = [
    { year: 2024, img: "/cv1.png" },
    { year: 2023, img: "/cv1.png" },
    { year: 2022, img: "/cv1.png" },
    { year: 2021, img: "/cv1.png" },
  ];

  useEffect(() => {
    const yearSections = document.querySelectorAll(`.${styles.yearSection}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute("data-year");
            setActiveYear(Number(year));
          }
        });
      },
      { threshold: 0.6 }
    );

    yearSections.forEach((section) => observer.observe(section));
    return () => yearSections.forEach((section) => observer.unobserve(section));
  }, []);

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
      
      {/* Title section */}
      <div className={styles.pageTitle}>
        <h1>Experience</h1>
      </div>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          {years.map((item) => (
            <div
              key={item.year}
              className={`${styles.yearSection} ${
                activeYear === item.year ? styles.activeSection : ""
              }`}
              data-year={item.year}
            >
              <div className={styles.pointLineContainer}>
                <div
                  className={`${styles.timelinePoint} ${
                    activeYear === item.year ? styles.activePoint : ""
                  }`}
                ></div>
                {activeYear === item.year && (
                  <div className={`${styles.yearInfo} ${styles.activeInfo}`}>
                    <div className={styles.yearBox}>
                      <h3>{item.year}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.yearImageContainer}>
                <img
                  src={item.img}
                  alt={`Experience of ${item.year}`}
                  className={styles.yearImage}
                />
                {/* View Button */}
                <a
                  href={`/experience/${item.year}`}
                  className={styles.viewButton}
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
