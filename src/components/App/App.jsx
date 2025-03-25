import Header from '../Header/Header';
// import HomePage from '../../pages/HomePage';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';
import './App.css';
import Container from '../../components/Container/Container';
import ModalPage from '../../components/Modal/ModalPage';
import {
  EnhancedComponent1,
  EnhancedComponent2,
  EnhancedComponent3,
} from '../EnhancedComponent';

function App() {
  return (
    <main className="app">
      <Header />
      <Container>
        <h2>Это дочерний компонент</h2>
      </Container>

      <Container>
        <h2>Это дочерний компонент 2</h2>
      </Container>

      <Container>
        <h2>Это дочерний компонент 3</h2>
      </Container>

      <ModalPage />
      <Footer />
    </main>
  );
}

export default App;
