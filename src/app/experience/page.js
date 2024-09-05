"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Experience.module.css";

export default function Projects() {
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

      <main>
        <section id="experience" className={styles.experience}>
          <h1>My Experience</h1>
          <div className={styles.experienceItem}>
            <h2>Certification</h2>
            <p>Details about your certification.</p>
          </div>
          <div className={styles.experienceItem}>
            <h2>Volunteer Work</h2>
            <p>Details about your volunteer work.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
