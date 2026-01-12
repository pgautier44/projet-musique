import styles from './Article.module.css';

export default function Article({
  title,
  artist,
  year,
  image,
  children
}) {
  return (
    <article className={styles.article}>
      {/* Titre */}
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>
          {artist} — {year}
        </h3>
      </header>

      {/* Contenu */}
      <div className={styles.content}>
        <div className={styles.text}>
          {children}
        </div>

        <div className={styles.imageWrapper}>
          <img src={image} alt={artist} />
        </div>
      </div>
    </article>
  );
}
