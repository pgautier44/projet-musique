import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" aria-label="Retour à l'accueil">
            <img
              src="/images/je-tai-promis.png"
              alt="Je t'ai promis"
              className={styles.albumLogo}
            />
          </Link>
        </div>

        {/* Séparateur décoratif */}
        <div className={styles.separator}></div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/album">Album</Link>
          <Link href="/articles">Articles</Link>
        </nav>

        {/* Bouton clip */}
        <div className={styles.clipButtonWrapper}>
          <button
            className={styles.clipButton}
            onClick={() => setIsModalOpen(true)}
            aria-label="Voir le clip"
          >
            ▶
          </button>
        </div>
      </header>

      {/* Modale vidéo */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer"
            >
              ✕
            </button>

            <video
              src="/videos/clip.mp4"
              controls
              autoPlay
              className={styles.video}
            />
          </div>
        </div>
      )}
    </>
  );
}
