// import React from 'react';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')!).render(
  <SnackbarProvider>
    <App />
  </SnackbarProvider>,
)
