import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          « Je t'ai promis » est une œuvre originale de <strong>Johnny Gautier</strong>.<br/>
          Tous droits réservés © 2026. Aucune reproduction, critique ou moquerie n’est autorisée.<br/>
          Merci de respecter cette création, déjà candidate à entrer dans le top 50 des albums les plus mémorables.
        </p>

        <div className={styles.footerExtras}>
          <span>℗ 2026 Johnny Gautier Records</span>
          <span>Design &amp; Artwork: Studio Big Muscle PG</span>
        </div>
      </div>
    </footer>
  );
}
