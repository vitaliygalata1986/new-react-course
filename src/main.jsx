import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import './main.css';
// import { GlobalStyles } from './components/globalStyle';

createRoot(document.getElementById('root')).render(
  <>
    {/* <GlobalStyles /> */}
    <App />
  </>
);
