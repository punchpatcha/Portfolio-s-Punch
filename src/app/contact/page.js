"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Contact.module.css";

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
        <section id="contact" className={styles.contact}>
          <h1>Contact Me</h1>
          <p>Email: your.email@example.com</p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/yourprofile">Your LinkedIn</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/yourprofile">Your GitHub</a>
          </p>
          <p>
            Resume:{" "}
            <a href="/resume.pdf" download>
              Download My Resume
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
