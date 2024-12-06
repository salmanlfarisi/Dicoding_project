import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
 
document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu-button'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});