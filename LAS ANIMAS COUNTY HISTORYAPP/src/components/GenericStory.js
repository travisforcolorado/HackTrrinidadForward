import { stories } from '../data/stories.js';

export const GenericStory = (target, storyId) => {
    const story = stories.find(s => s.id === storyId);

    // Handle case where story isn't found
    if (!story) {
        target.innerHTML = `<div class="container" style="text-align:center; padding-top: 100px;"><h2>Story Not Found</h2><button class="btn" onclick="window.history.back()">Go Back</button></div>`;
        return;
    }

    const content = `
    <section class="container" style="padding-top: var(--spacing-xl); max-width: 800px;">
      <div class="glass-card mb-lg">
        <button class="btn-outline mb-md" onclick="window.location.hash='#stories'">← Back to Stories</button>
        
        <h2 class="text-center" style="color: var(--color-dark-brown); font-size: 2.5rem; margin-bottom: var(--spacing-sm);">${story.title}</h2>
        <div style="width: 60px; height: 4px; background: var(--color-terracotta); margin: 0 auto 2rem auto;"></div>

        ${story.image ? `
        <div class="mb-lg" style="text-align: center;">
             <img src="${story.image}" alt="${story.title}" style="max-width: 100%; border-radius: 4px; border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
             ${story.imageCredit ? `<p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-secondary); font-style: italic;">${story.imageCredit}</p>` : ''}
        </div>
        ` : ''}

        <div class="story-content" style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text);">
            ${story.content || `<p>${story.excerpt}</p><p><em>Full historical details coming soon.</em></p>`}
        </div>

      </div>
    </section>
  `;

    target.innerHTML = content;
    // Scroll to top
    window.scrollTo(0, 0);
};
