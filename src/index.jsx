import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './common.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App />
   </StrictMode>
);
