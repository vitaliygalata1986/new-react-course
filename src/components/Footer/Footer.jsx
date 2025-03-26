import './Footer.css';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`footer ${styles.footer}`}>
      <p>Подвал сайта</p>
    </footer>
  );
}
