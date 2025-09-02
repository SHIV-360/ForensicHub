import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Import Bootstrap's CSS first
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.tsx';

// 2. Import your custom CSS last to override Bootstrap
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);