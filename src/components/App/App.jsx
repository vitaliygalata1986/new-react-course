import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';
import './App.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Counter from '../Counter/Counter';
import UserProfile from '../UserProfile/UserProfile';
import ParentComponent from '../ParentComponent/ParentComponent';
import RegForm from '../RegForm/RegForm';
import ReactHoockForm from '../../components/ReactHoockForm/ReactHoockForm';

function App() {
  const handleClick = () => {
    alert('message');
  };

  return (
    <main className="app">
      <Header />
      <ReactHoockForm />
      <Footer />
    </main>
  );
}

export default App;
