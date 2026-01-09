import { simpsonData } from '../data/simpsonData.js';

export const SimpsonsRest = (target) => {
    const sectionsHtml = simpsonData.sections.map((section, index) => `
    <div class="simpson-section" style="
      display: flex;
      flex-direction: ${index % 2 === 0 ? 'row' : 'row-reverse'};
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-xl);
      align-items: center;
      flex-wrap: wrap;
    ">
      <div style="flex: 1; min-width: 300px;">
        <h3 style="color: var(--color-terracotta); font-size: 2rem; margin-bottom: var(--spacing-sm);">${section.heading}</h3>
        <p style="font-size: 1.1rem; line-height: 1.8;">${section.content}</p>
        ${section.quote ? `
          <blockquote style="
            margin-top: var(--spacing-md);
            padding-left: var(--spacing-md);
            border-left: 4px solid var(--color-teal);
            font-style: italic;
            font-size: 1.2rem;
            color: var(--color-dark-teal);
          ">"${section.quote}"</blockquote>
        ` : ''}
      </div>
      
      ${section.image ? `
        <div style="flex: 1; min-width: 300px;">
          <div class="glass-card" style="padding: var(--spacing-xs);">
            <img src="${section.image}" alt="${section.heading}" style="width: 100%; border-radius: 4px;">
            ${section.imageCredit ? `<p style="font-size: 0.8rem; margin-top: 0.5rem; text-align: right; color: var(--text-secondary);">${section.imageCredit}</p>` : ''}
          </div>
        </div>
      ` : ''}
    </div>
  `).join('');

    const content = `
    <div style="background-color: var(--color-paper); min-height: 100vh;">
      <!-- Hero Header -->
      <div style="
        background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/assets/images/simpsons_rest_postcard.png');
        background-size: cover;
        background-position: center;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        margin-bottom: var(--spacing-xl);
      ">
        <div class="container" style="background: rgba(0,0,0,0.6); padding: 2rem; border-radius: 8px; backdrop-filter: blur(4px);">
          <h1 style="font-size: 3.5rem; margin-bottom: var(--spacing-md); color: var(--color-sand);">${simpsonData.title}</h1>
          <p style="font-size: 1.5rem; font-family: var(--font-heading); color: white;">${simpsonData.subtitle}</p>
        </div>
      </div>

      <div class="container" style="max-width: 1000px;">
        <div class="intro mb-lg text-center">
          <p style="font-size: 1.3rem; font-weight: 500; color: var(--color-charcoal);">${simpsonData.intro}</p>
          <div style="width: 100px; height: 4px; background: var(--color-terracotta); margin: 2rem auto;"></div>
        </div>

        ${sectionsHtml}

        <div class="text-center" style="margin-top: 4rem; padding-bottom: 4rem;">
          <h3 style="margin-bottom: var(--spacing-md);">A Trinidad Legacy</h3>
          <p class="mb-lg">Visit the landmark and see the view that George Simpson loved.</p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="window.location.hash='#stories'" class="btn">Back to Stories</button>
            <button onclick="window.location.hash='#timeline'" class="btn btn-outline">Back to Timeline</button>
          </div>
        </div>
      </div>
    </div>
  `;

    target.innerHTML = content;
    window.scrollTo(0, 0);
};
