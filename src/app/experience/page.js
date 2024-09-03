// pages/experience.js

import Head from 'next/head';
import Link from 'next/link';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Patcharaluk Port's</title>
        <meta name="description" content="My experience!" />
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
