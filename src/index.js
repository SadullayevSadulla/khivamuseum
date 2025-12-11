import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Remove the early preloader smoothly after React mounts
const preloader = document.getElementById('preloader');
if (preloader) {
  // give a tiny delay to make transition visible
  setTimeout(() => {
    preloader.classList.add('preloader--hide');
    // finally remove from DOM to clean up
    preloader.addEventListener('transitionend', function onEnd() {
      if (preloader && preloader.parentNode) preloader.parentNode.removeChild(preloader);
      preloader.removeEventListener('transitionend', onEnd);
    });
  }, 150);
}