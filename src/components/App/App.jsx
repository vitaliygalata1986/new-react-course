import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';
import './App.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Counter from '../Counter/Counter';
import UserProfile from '../UserProfile/UserProfile';
import ParentComponent from '../ParentComponent/ParentComponent';

function App() {
  const [clicks, setClicks] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState('false');
  const [text, setText] = useState('Dafault text');
  return (
    <main className='app'>
      <Header clicks={clicks} text={text} />
      <HomePage clicks={clicks} setClicks={setClicks} />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isDarkMode={isDarkMode} text={text} setText={setText} />
      <Counter />
      <UserProfile />
      <ParentComponent />
    </main>
  );
}

export default App;
