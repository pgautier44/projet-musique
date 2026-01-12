import { useState } from 'react';
import styles from './Track.module.css';

export default function Track({
  index,
  title,
  artist,
  year,
  image,
  audioOriginal,
  audioCover,
  lyrics,       // toutes les paroles
  previewLength = 150 // nombre de caractères à afficher par défaut
}) {
  const [open, setOpen] = useState(false);

  // Si on est fermé, on affiche seulement le début
  const preview = lyrics.length > previewLength ? lyrics.slice(0, previewLength) + '...' : lyrics;

  return (
    <section className={styles.track}>
      {/* En-tête du titre */}
      <header className={styles.header}>
        <span className={styles.index}>{index}</span>

        <div className={styles.meta}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.artist}>
            {artist} — {year}
          </p>
        </div>
      </header>

      {/* Contenu */}
      <div className={styles.content}>
        {/* Image artiste */}
        <img src={image} alt={artist} className={styles.image} />

        {/* Paroles */}
        <div className={styles.lyrics}>
          <p className={styles.text}>
              {(open ? lyrics : preview)
                .split('\n')
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>

          {lyrics.length > previewLength && (
            <button
              className={styles.toggle}
              onClick={() => setOpen(!open)}
            >
              {open ? 'Réduire' : 'Afficher tout'}
            </button>
          )}
        </div>

        {/* Lecteurs audio */}
        <div className={styles.players}>
          {audioOriginal && (
            <figure className={styles.player}>
              <figcaption>Version originale</figcaption>
              <audio controls src={audioOriginal} />
            </figure>
          )}

          {audioCover && (
            <figure className={styles.player}>
              <figcaption>Interprétation personnelle</figcaption>
              <audio controls src={audioCover} />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
