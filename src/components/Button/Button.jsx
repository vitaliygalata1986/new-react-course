import styles from './Button.module.css';
import stylesAdded from './AddedStyles.module.css';

function Button({ variant = 'primary' }) {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  return (
    <>
      <button className={buttonClass}>Кнопка</button>
      <a href="#" className={stylesAdded['link']}>
        Link
      </a>
      <div className={styles['bottom-block']}>Блок</div>
    </>
  );
}

export default Button;
