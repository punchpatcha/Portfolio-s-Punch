"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./ProjectDetail.module.css";
const projectData = [
  {
    id: 1,
    title: "Thai SMS classification by AI model",
    images: ["/cv.png", "/cv1.png", "/cv2.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 2,
    title: "Patient System Design",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 3,
    title: "Matify UI Design",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 4,
    title: "Woca Demo C+",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 5,
    title: "My Portfolio",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 6,
    title: "Dog home Demo Python",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 7,
    title: "Math Game Demo Java",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 8,
    title: "Matify",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 9,
    title: "Noodle",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 10,
    title: "Content Design",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 11,
    title: "Digital Art",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 12,
    title: "T-Shirt Design",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
  {
    id: 13,
    title: "Thai SMS classification by AI model",
    images: ["/cv.png", "/cv1.png", "/cv2.png"],
    description: "Detailed description of Project 1.",
    tools: ["Python", "Next.js"],
    githubLink: "https://github.com/project1",
  },
];

export default function ProjectDetail({ params }) {
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const { id } = params;
  const [selectedImage, setSelectedImage] = useState(null);
  const project = projectData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>404 - Project Not Found</div>;
  }

  // Set initial image
  if (selectedImage === null) {
    setSelectedImage(project.images[0]);
  }

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

      {/* Main image with transition */}
      <main>
      <h1  className={styles.container}> {project.title}</h1>
        <section className={styles.projectSection}> 
          <div className={styles.imageGallery}>
            <img
              src={selectedImage}
              alt={project.title}
              className={styles.mainImage}
            />
            <div className={styles.thumbnailGrid}>
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={styles.thumbnail}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          <div className={styles.projectDetails}>
            <h2>Description</h2>
            <p>{project.description}</p>

            <h2>Tools</h2>
            <ul>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>

            <h2>GitHub</h2>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubLink}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
