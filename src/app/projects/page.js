"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import styles from "./Projects.module.css";

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const projects = [
    {
      id: 1,
      category: "Coding",
      title: "Thai SMS classification by AI model",
      image: "/cv1.png",
    },
    {
      id: 2,
      category: "System Analysis",
      title: "Patient System Design",
      image: "/cv.png"
    },
    {
      id: 3,
      category: "Graphic Design",
      title: "Matify UI Design",
      image: "/cv.png"
    },
    {
      id: 4,
      category: "Coding",
      title: "Woca Demo C+",
      image: "/cv.png"
    },
    {
      id: 5,
      category: "Coding",
      title: "My Portfolio",
      image: "/cv.png"
    },
    {
      id: 6,
      category: "Coding",
      title: "Dog home Demo Python",
      image: "/cv.png"
    },
    {
      id: 7,
      category: "Coding",
      title: "Math Game Demo Java",
      image: "/cv.png"
    },

    {
      id: 8,
      category: "System Analysis",
      title: "Matify",
      image: "/cv.png"
    },
    {
      id: 9,
      category: "System Analysis",
      title: "Noodle",
      image: "/cv.png"
    },
    {
      id: 10,
      category: "Graphic Design",
      title: "Content Design",
      image: "/cv.png"
    },
    {
      id: 11,
      category: "Graphic Design",
      title: "Digital Art",
      image: "/cv.png"
    },
    {
      id: 12,
      category: "Graphic Design",
      title: "T-Shirt Design",
      image: "/cv.png"
    },
    {
      id: 13,
      category: "Graphic Design",
      title: "Motion Art",
      image: "/cv.png"
    },

    
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

      <main>
        <section id="projects" className={styles.projectsSection}>
          <h1>Projects</h1>

          <div className={styles.categoryTabs}>
            {["All", "Coding", "System Analysis", "Graphic Design"].map(
              (category) => (
                <button
                  key={category}
                  className={`${styles.categoryTab} ${
                    selectedCategory === category ? styles.activeTab : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>

          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className={styles.projectCard}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <h2>{project.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
