"use client"; // Ensure this file is a Client Component

import { useState } from "react";
import styles from "./ProjectDetail.module.css";

const projectData = [
  { 
    id: 1, 
    title: "Project 1", 
    images: ["/cv.png", "/cv1.png", "/cv2.png"], 
    description: "Detailed description of Project 1.", 
    tools: ["Python", "Next.js"], 
    githubLink: "https://github.com/project1" 
  },
  // Add other projects here
];

export default function ProjectDetail({ params }) {
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
      <h1>{project.title}</h1>

      {/* Main image with transition */}
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

      {/* Description */}
      <section className={styles.projectDetails}>
        <h2>Description</h2>
        <p>{project.description}</p>

        <h2>Tools Used</h2>
        <ul>
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>

        <h2>GitHub Link</h2>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          {project.githubLink}
        </a>
      </section>
    </div>
  );
}
