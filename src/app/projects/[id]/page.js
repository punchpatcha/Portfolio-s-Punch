"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./ProjectDetail.module.css";
const projectData = [
  {
    id: 1,
    title: "Thai SMS classification by AI model",
    images: ["/project/coding1/img1.jpg", "/project/coding1/img2.jpg", "/project/coding1/img3.jpg", "/project/coding1/img4.jpg"],
    description: `I developed an AI model using Linear SVM to classify Thai SMS messages as spam or non-spam with 91% accuracy, trained on a dataset of 809 Thai SMS messages. 
    The project uses PyThaiNLP for data preprocessing,
    integrated into a Next.js website where users can input SMS messages for real-time classification. I also tried a Naive Bayes model, achieving 85% accuracy. Due to the small
     size of my dataset, accuracy isn’t the only factor to consider. I selected the SVM model for its better performance in this scenario, ensuring the best results for the web demo. `,

    outcome: [
      "Successfully deployed a fully functional website where users can interact with the AI model",
      "The project has been presented at the Bangkok University (BU) Openhouse event.",
    ],

    tools: [
      "Python (AI model, PyThaiNLP)",
      "Next.js, CSS (Frontend)",
      "Flask (Backend API)",
      "Vercel, Render (Deployment)",
    ],

    githubLink:
      "Github : https://github.com/punchpatcha/thai-sms-detection.git",

    web: "Thai SMS Demo : https://thai-sms-detection.vercel.app/",
  },
  {
    id: 2,
    title: "Woca Mobile App",
    images: ["/project/coding2/img1.jpg",
       "/project/coding2/img2.jpg",
        "/project/coding2/img3.jpg"],
    description: ` Woca Mobile App is a vocabulary practice tool designed for English to Thai translation, developed using Microsoft Visual Studio 2022, XAML, and C#. The app includes a default collection of 300 vocabulary words, organized by difficulty and category. Users can also create and manage their own custom vocabulary collections for various language pairs. In this group project, I was responsible for developing and managing new vocabulary collections, adding vocabulary items, and integrating these collections with the flashcard feature for interactive practice.`,
    tools: ["Microsoft Visual Studio 2022",
       "XAML (UI Design)",
       "C# / Java (Backend and Layout)"],
    githubLink: "https://github.com/punchpatcha/Woca-Mobile-App.git",
    outcome: [
      "The app successfully implements all planned features, delivering a comprehensive vocabulary practice experience with both default and custom collections.",
    ],
    web: "",
  },
  {
    id: 3,
    title: "My Portfolio",
    images: ["/project/coding3/img1.jpg",
       "/project/coding3/img2.jpg",
        "/project/coding3/img3.jpg"],
    description: " I developed a portfolio website using Next.js and Vercel to showcase details about myself, including my projects and experiences. This site serves as a comprehensive platform to present my skills and background to potential employers or collaborators. The project allowed me to deepen my understanding of Next.js, Node.js, and React, providing hands-on experience with these technologies while creating a professional online presence.",
    tools: ["Next.js (Framework for building the website)",
       "Vercel (Hosting and deployment)",
      "Node.js (Backend and server-side functionality)",
      "React (Frontend user interface)","JavaScript (Programming language for both frontend and backend development)"],
    githubLink: "https://github.com/punchpatcha/Portfolio-s-Punch.git",
    outcome: [
      "The website effectively highlights my projects and experiences, presenting a well-organized and professional online portfolio. It successfully demonstrates my skills in Next.js, Node.js, and React, and provides a user-friendly interface for visitors to learn more about me.",
    ],
    web: "Web Portfolio : https://portfolio-s-punch.vercel.app/"

  },
  {
    id: 4,
    title: "Matify",
    images: ["/project/sad/img1.jpg",
       "/project/sad/img2.png",
        "/project/sad/img3.jpg","/project/sad/main.jpg"],
    description: "Matify is a mobile application designed to help users find friends and communities based on their MBTI personality type. The app aims to connect users with like-minded individuals and relevant communities. During the system analysis phase, I analyzed the system’s requirements, designed the database structure, and created ERD and activity diagrams to outline the system's workflow. For the design phase, I developed an interactive prototype in Figma, allowing users to explore key features like clickable buttons, swipe gestures, and text input. I also created a detailed wireframe to map out the app’s layout and navigation.",
    tools: ["Draw.io (for Diagrams)"
      , " Figma (for wireframes and interactive prototypes)",
    "Adobe Photoshop (edit icon)"],
    githubLink: "",
    outcome: [
      "The Matify app is currently in the early stages of development, with the coding phase beginning based on the system analysis and design work completed. Once fully developed, the app will be available for public use, allowing users to explore its features and functionality.",
    ],
    web: "",


  },
  {
    id: 5,
    title: " information management system of Restaurant",
    images: ["/project/sad2/main.jpg",
      "/project/sad2/img1.jpg",
        "/project/sad2/img2.jpg"],
    description: `As the project leader, I guided a team through the system analysis and design process for an
     information management system tailored to improve restaurant operations. We conducted a thorough analysis of the restaurant's pain points, identified inefficiencies,
      and developed data-driven solutions to optimize workflows. This included designing key system components such as context diagrams, data flow diagrams, ER diagrams, and data dictionaries, all aimed at streamlining operations and improving decision-making. My leadership ensured that the project met its objectives by applying systematic analysis, focusing on data accuracy, and creating a clear structure for information flow.`,
    tools: ["Draw.io", "Microsoft Word"],
    githubLink: "",
    outcome: [
      "Led a team in analyzing complex data sets, identifying bottlenecks, and translating insights into actionable system designs.",
      "The system design aids in better decision-making by organizing critical operational data for restaurant management.",
    ],
    web: "",


  },
  {
    id: 6,
    title: "_shopskyy: Art and Design on Instagram",
    images: ["/project/design1/img1.jpg", 
      "/project/design1/img2.jpg", 
    "/project/design1/img3.png", 
    "/project/design1/img4.jpg", 
    "/project/design1/main.png"],
    description: `_shopskyy is an Instagram account I created in 2019 out of my passion for drawing. Initially, I posted my artwork, but since 2021, I expanded into creating interactive game stories for Instagram, which gained popularity and led to a significant increase in followers. 
    As my content gained traction, I started accepting commissions for promotional designs, custom drawings, and other graphic design work. This hobby has not only allowed me to showcase my creativity but has also become a source of income, which I continue to pursue to this day.` ,
    tools: ["Procreate", "Adobe Photoshop", "Google Sheets (for managing time and scheduling tasks effectively.)"],
    githubLink: "",
    outcome: [
      " _shopskyy has flourished into a successful platform for my graphic design work, marked by a growing follower base and a steady stream of commissions.",
      "Running this account has significantly enhanced my skills in client communication, effective time management, and meeting deadlines, turning this creative endeavor into a valuable learning experience that benefits both my professional and personal growth.",
    ],
    web: "Follow on Instagram : https://www.instagram.com/_shopskyy?igsh=MTRqczlzbHUxeHlubg== ",


  },
  {
    id: 7,
    title: "bechubbyy Digital Art on Instagram",
    images: ["/project/design2/img1.jpg", 
      "/project/design2/img2.png", 
    "/project/design2/img3.png", 
    "/project/design2/main.png"],
    description:`In early 2024, I launched bechubbyy on Instagram with the aim of creating something memorable and impactful. Using my strengths in ideation and design, 
    I introduced a cute, animated white cat character with captions that touch on happiness, blessings, heartbreak, and love. My hope is that people who come across my posts 
    will feel a connection to the emotions expressed and share them as a representation of their own feelings, using the charm of the character to communicate what they want to say. 
    This heartfelt approach has resonated with many, and I now have over 7,000 followers who appreciate and share the content. Looking ahead, I plan to expand the white cat character into stickers and merchandise to further connect with my audience and explore new income opportunities.`,
    tools: ["Procreate", "Capcut"],
    githubLink: "",
    outcome: [
      "Successfully built a community of over 7,000 followers who actively engage with and share the character’s messages. Some reels have surpassed 100K views, demonstrating strong audience connection and content appeal.",
    ],
    web: "Follow on Instagram : https://www.instagram.com/bechubbyy?igsh=MWQ1bjlpbzMwenNreg==",


  },
  {
    id: 8,
    title: "T-Shirt Design",
    images: ["/project/design3/img1.png", 
      "/project/design3/img2.jpg", 
    "/project/design3/img3.png", 
    "/project/design3/img4.png", 
    "/project/design3/main.jpg"],
    description: "In 2022, at the age of 19, I launched Xhaw.official, a clothing brand that combines my passion for fashion with my love for drawing and design. Starting with no prior knowledge of the fashion industry, I dove in headfirst, creating my custom screen prints for shirts and learning about the market as I went. Despite the challenges, I took the initiative to produce small batches of shirts to test customer interest. Thankfully, my designs resonated with people, and the first batch sold out quickly, marking a successful start to my entrepreneurial journey.",
    tools: ["Procreate", "Adobe Photoshop", "Social Platforms (Instagram, Tiktok, Line)"],
    githubLink: "",
    outcome: [
      " Gained practical experience in analyzing sales patterns, tracking customer behavior, and using data to optimize marketing strategies.",
      " Learned to make data-informed choices, such as adjusting production quantities and designs based on customer demand and feedback.",
    ],
    web: "",


  },
  {
    id: 9,
    title: "BU x Workpoint Creative Sandbox 2022",
    images: ["/project/design4/img1.jpg", 
      "/project/design4/img2.jpg", 
    "/project/design4/img3.jpg", 
    "/project/design4/img4.jpg", 
    "/project/design4/img5.jpg"],
    description:`I participated in the BU x Workpoint Creative Sandbox, a competition focused on creating compelling TV show concepts, sponsored by Workpoint. My team developed "Killer Lies ไม่ตายก็รอด", a reality game show inspired by board games, where contestants must uncover the identity of a "killer" to survive. As the team's video editor, I was responsible for editing motion graphics and creating the teaser for our show using Adobe After Effects (Ae), Premiere Pro (Pr), and Photoshop (PS).`,
    tools: ["Adobe After Effects (Ae): For motion graphics and visual effects."
      , "Adobe Premiere Pro (Pr): For video editing.",
      "Adobe Photoshop (PS): For graphic design and image editing"
    ],
    githubLink: "",
    outcome: [
      "My team and I received an honorable mention award with a cash prize of 1,000 THB.",
      " I was offered a direct job opportunity at Workpoint as a result of my work on this project.",
    ],
    web: "",


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
        <h1 className={styles.container}> {project.title}</h1>
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
            <h2>Overview</h2>
            <p>{project.description}</p>

            <h2>Tools</h2>
            <ul>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>

            <h2>Project Outcome</h2>
            <ul>
              {project.outcome.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>

            <h2></h2>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubLink}
            </a>

            <h2></h2>
            <a
              href={project.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.web}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
