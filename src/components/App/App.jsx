import Header from '../Header/Header';
// import HomePage from '../../pages/HomePage';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';
import './App.css';
import Container from '../../components/Container/Container';
import ModalPage from '../../components/Modal/ModalPage';
import Child from '../../components/Child/Child';
import {
  EnhancedComponent1,
  EnhancedComponent2,
  EnhancedComponent3,
} from '../EnhancedComponent';

function App() {
  const person = {
    name: 'John',
    age: 30,
  };
  return (
    <main className="app">
      <Header />
      <Child {...person} />
      <Footer />
    </main>
  );
}

export default App;
