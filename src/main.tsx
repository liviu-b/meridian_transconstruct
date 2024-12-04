import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Select the button
const backToTopButton = document.getElementById('backToTop');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton?.classList.remove('hidden');
  } else {
    backToTopButton?.classList.add('hidden');
  }
});

// Scroll to the top when the button is clicked
backToTopButton?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
