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
  const handleClick = () => {
    alert('message');
  };

  return (
    <main className="app">
      <HomePage />
    </main>
  );
}

export default App;
