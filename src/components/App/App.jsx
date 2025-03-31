import { useState } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import HomePage from '../../pages/HomePage';
import { Button } from '../Button';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <main data-theme={theme} className="dark:bg-green-950">
      <Header />
      <HomePage />
      <Button
        label="Смена темы"
        callback={toggleTheme}
        className="block bg-amber-700 p-1 text-white dark:text-green-900 cursor-pointer dark:bg-amber-50"
      />
      <Footer />
    </main>
  );
}

export default App;
