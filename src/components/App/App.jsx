import { useState } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './App.css';
import HomePage from '../../pages/HomePage';

function App() {
  const [theme, setTheme] = useState('light'); // По умолчанию светлая тема

  // Функция для переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <main className="app" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HomePage />
      <Footer />
    </main>
  );
}

export default App;
