import { useLocalStorage } from '../../customHoks/useLocalStorage';

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light'); // пробрасываем имя ключа и начальное состояние
  const [language, setLanguage] = useLocalStorage('language', 'ua');
  return (
    <div>
      <h1>Настройки</h1>
      <div>
        <h2>Тема: {theme}</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div>
        <h2>Язык: {language}</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="ua">Ua</option>
          <option value="en">En</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
