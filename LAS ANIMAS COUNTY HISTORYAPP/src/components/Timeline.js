import { timelineEvents } from '../data/timelineEvents.js';

export const Timeline = (target) => {
  const eventsHtml = timelineEvents.map((event, index) => {
    const isLeft = index % 2 === 0;
    return `
      <div class="timeline-item" style="
        display: flex;
        justify-content: ${isLeft ? 'flex-end' : 'flex-start'};
        padding-bottom: var(--spacing-xl);
        position: relative;
        width: 50%;
        margin-left: ${isLeft ? '0' : '50%'};
        margin-right: ${isLeft ? '50%' : '0'};
        padding-right: ${isLeft ? '30px' : '0'};
        padding-left: ${isLeft ? '0' : '30px'};
      ">
        <!-- Content Box -->
        <div class="glass-card timeline-content" style="
          text-align: ${isLeft ? 'right' : 'left'};
          position: relative;
          transition: transform var(--transition-normal);
        ">
          <span style="
            display: inline-block;
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 2rem;
            color: var(--accent-secondary);
            margin-bottom: var(--spacing-xs);
          ">${event.year}</span>
          <h3 style="color: var(--color-dark-teal);">${event.title}</h3>
          
          ${event.image ? `
            <div style="margin: var(--spacing-sm) 0;">
              <img src="${event.image}" alt="${event.title}" style="
                width: 100%;
                border-radius: 4px;
                box-shadow: var(--shadow-sm);
                border: 1px solid rgba(0,0,0,0.1);
              ">
              ${event.imageCredit ? `
                <p style="
                  font-size: 0.7rem;
                  color: var(--text-secondary);
                  margin-top: 4px;
                  font-style: italic;
                ">Photo: ${event.imageCredit}</p>
              ` : ''}
            </div>
          ` : ''}
          
          
          <p>${event.description}</p>
          
          ${event.link ? `
            <a href="${event.link}" style="
              display: inline-block;
              margin-top: var(--spacing-sm);
              color: var(--color-terracotta);
              text-decoration: none;
              font-weight: 600;
              border-bottom: 2px solid transparent;
            " onmouseover="this.style.borderBottomColor='var(--color-terracotta)'" onmouseout="this.style.borderBottomColor='transparent'">
              ${event.linkText} →
            </a>
          ` : ''}
        </div>
        
        <!-- Center Dot -->
        <div style="
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: var(--accent-secondary);
          border: 4px solid var(--color-paper);
          border-radius: 50%;
          top: 10px;
          ${isLeft ? 'right: -10px;' : 'left: -10px;'}
          z-index: 10;
          box-shadow: var(--shadow-sm);
        "></div>
      </div>
    `;
  }).join('');

  const content = `
    <section id="timeline" class="container" style="padding-top: var(--spacing-xl); position: relative;">
      <div class="text-center mb-lg">
        <h2 style="font-size: 3rem;">Timeline of Events</h2>
        <p style="font-style: italic; color: var(--color-dark-teal);">Walking through time</p>
      </div>
      
      <div class="timeline-container" style="position: relative;">
        <!-- Center Line -->
        <div style="
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background-color: var(--color-sand);
          opacity: 0.5;
        "></div>
        
        ${eventsHtml}
      </div>
    </section>
  `;

  target.innerHTML = content;
};
