import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './new/App';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { theme } from './new/theme';
// import { Repo } from './network/Repo'; // Not needed for frontend-only portfolio
// Repo.ping(); // Commented out for frontend-only portfolio

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
