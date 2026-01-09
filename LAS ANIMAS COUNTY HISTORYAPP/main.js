import './src/styles/main.css';
import { Header } from './src/components/Header.js';
import { Footer } from './src/components/Footer.js';
import { Home } from './src/components/Home.js';

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header id="main-header"></header>
    <main id="main-content"></main>
    <footer id="main-footer"></footer>
  </div>
`;

// Router
import { Timeline } from './src/components/Timeline.js';
import { Stories } from './src/components/Stories.js';
import { About } from './src/components/About.js';
import { Ludlow } from './src/components/Ludlow.js';
import { SimpsonsRest } from './src/components/SimpsonsRest.js';
import { RanchingHeritage } from './src/components/RanchingHeritage.js';
import { PinonCanyon } from './src/components/PinonCanyon.js';
import { HistoricBusinesses } from './src/components/HistoricBusinesses.js';

const routes = {
  '': Home,
  '#home': Home,
  '#timeline': Timeline,
  '#stories': Stories,
  '#about': About,
  '#ludlow': Ludlow,
  '#simpsons-rest': SimpsonsRest,
  '#ranching': RanchingHeritage,
  '#pinon-canyon': PinonCanyon,
  '#businesses': HistoricBusinesses,
};

const router = () => {
  const hash = window.location.hash || '#home';
  const component = routes[hash] || routes['#home'];
  // clear content
  const mainContent = document.querySelector('#main-content');
  mainContent.innerHTML = '';
  // render component
  component(mainContent);
  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Initialize Components
Header(document.querySelector('#main-header'));
Footer(document.querySelector('#main-footer'));
