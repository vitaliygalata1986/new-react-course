import { useState } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import HomePage from '../../pages/HomePage';
import { Button } from '../Button';

function App() {
  return (
    <main>
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}

export default App;
