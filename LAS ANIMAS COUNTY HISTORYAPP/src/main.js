import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Stories } from './components/Stories';
import { Timeline } from './components/Timeline';
import { HistoricBusinesses } from './components/HistoricBusinesses';
import { HistoricChurches } from './components/HistoricChurches';
import { Ludlow } from './components/Ludlow';
import { PinonCanyon } from './components/PinonCanyon';
import { RanchingHeritage } from './components/RanchingHeritage';
import { SimpsonsRest } from './components/SimpsonsRest';
import { GenericStory } from './components/GenericStory';

const app = document.querySelector('#app');

// Initial Layout
app.innerHTML = `
  <div id="header-container"></div>
  <main id="main-content" style="min-height: 80vh; padding-top: 80px;"></main>
  <div id="footer-container"></div>
`;

// Render Header and Footer
Header(document.querySelector('#header-container'));
Footer(document.querySelector('#footer-container'));

const contentDiv = document.querySelector('#main-content');

// Router
const router = () => {
  const hash = window.location.hash || '#';

  // Scroll to top on route change
  window.scrollTo(0, 0);

  // Clear previous content (optional, innerHTML overwrite handles it)
  contentDiv.innerHTML = '';

  switch (hash) {
    case '#':
    case '#home':
      Home(contentDiv);
      break;
    case '#about':
      About(contentDiv);
      break;
    case '#stories':
      Stories(contentDiv);
      break;
    case '#timeline':
      Timeline(contentDiv);
      break;
    case '#businesses':
      // Group History sections? Or just redirect?
      // User wanted "SECTION" for churches. We can render both or use separate route.
      // Let's render Business grid.
      HistoricBusinesses(contentDiv);
      break;
    case '#churches':
      HistoricChurches(contentDiv);
      break;

    // Story Sub-routes
    case '#ludlow':
      Ludlow(contentDiv);
      break;
    case '#pinon-canyon':
      PinonCanyon(contentDiv);
      break;
    case '#ranching':
      RanchingHeritage(contentDiv);
      break;
    case '#simpsons-rest':
      SimpsonsRest(contentDiv);
      break;

    default:
      if (hash.startsWith('#story/')) {
        const storyId = hash.replace('#story/', '');
        GenericStory(contentDiv, storyId);
      } else {
        Home(contentDiv);
      }
  }
};

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
