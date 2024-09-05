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
      title: "Project 1",
      image: "/cv.png",
      description: "Description of Project 1.",
    },
    {
      id: 2,
      category: "System Analysis",
      title: "Project 2",
      image: "/project2.jpg",
      description: "Description of Project 2.",
    },
    {
      id: 3,
      category: "Graphic Design",
      title: "Project 3",
      image: "/project3.jpg",
      description: "Description of Project 3.",
    },
    {
      id: 4,
      category: "Coding",
      title: "Project 4",
      image: "/project4.jpg",
      description: "Description of Project 4.",
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
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
