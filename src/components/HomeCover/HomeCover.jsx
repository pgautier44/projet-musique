import styles from './HomeCover.module.css';
import Link from 'next/link';

export default function HomeCover() {
  return (
    <section className={styles.homeCover}>
      <div className={styles.homeCoverContent}>

        <div className={styles.homeCoverImage}>
          <img
            src="/images/PageAlbum.png"
            alt="Pochette de l’album"
          />
        </div>

        <div className={styles.homeCoverText}>
          <h1 className={styles.homeCoverTitle}>Je t'ai promis</h1>
          <p className={styles.homeCoverArtist}>Johnny Gautier</p>

          <Link href="/album" className={styles.homeCoverButton}>
            ▶ Écouter
          </Link>
        </div>

      </div>
    </section>
  );
}
