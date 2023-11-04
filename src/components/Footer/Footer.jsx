import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Built by Diogo Stein</p>
        <a
          href="https://github.com/thediogostein"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
