// pages/projects.js

import Head from 'next/head';
import Link from 'next/link';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patcharaluk Port's</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="my projects" />
      </Head>

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/experience" className={styles.navLink}>Experience</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </header>

      <main>
        <section id="projects" className={styles.projects}>
          <h1>My Projects</h1>
          <div className={styles.project}>
            <img src="/project1.jpg" alt="Project 1" />
            <h2>Project 1</h2>
            <p>Description of Project 1.</p>
          </div>
          <div className={styles.project}>
            <img src="/project2.jpg" alt="Project 2" />
            <h2>Project 2</h2>
            <p>Description of Project 2.</p>
          </div>
        </section>
      </main>

    </div>
  );
}
