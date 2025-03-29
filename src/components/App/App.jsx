import { useState } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './App.css';
import { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/HomePage';
import { GlobalStyle } from '../globalStyle';

function App() {
  // const [theme, setTheme] = useState('light'); // По умолчанию светлая тема

  // Функция для переключения темы
  /*
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  */

  // с сохранием выбранной темы в LocalStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // console.log(savedTheme); // изначально null
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const lightTheme = {
    body: '#FFF', // body - это просто переменная
    text: '#363537',
    // Другие стили светлой темы
  };

  const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    // Другие стили темной темы
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <main className="app" data-theme={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <button onClick={toggleTheme}>Сменить тему</button>
        <HomePage />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
