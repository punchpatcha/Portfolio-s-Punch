// pages/contact.js

import Head from 'next/head';
import Link from 'next/link';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Patcharaluk Port's</title>
        <meta name="description" content="Get in touch with me!" />
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
        <section id="contact" className={styles.contact}>
          <h1>Contact Me</h1>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">Your LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/yourprofile">Your GitHub</a></p>
          <p>Resume: <a href="/resume.pdf" download>Download My Resume</a></p>
        </section>
      </main>

    </div>
  );
}
