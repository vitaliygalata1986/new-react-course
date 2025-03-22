import './Footer.css';

export function Footer({ isDarkMode, text, setText }) {
  const handleChange = (e) => setText(e.target.value);
  return (
    <footer
      style={{ backgroundColor: isDarkMode ? 'red' : 'black' }}
      className='footer'
    >
      <p>Подвал сайта</p>
    </footer>
  );
}
