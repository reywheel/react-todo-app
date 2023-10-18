import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import { App } from '@/app/ui';
import '@/app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
