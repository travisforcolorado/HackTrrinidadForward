import { churches } from '../data/churchData';

// Placeholder fallback until AI generation quota resets
const PLACEHOLDER_IMG = '/assets/images/historic_placeholder.png';

export const HistoricChurches = (target) => {
    const renderChurchCard = (church) => `
        <div class="glass-card zoom-card" style="display: flex; flex-direction: column; height: 100%;">
            <div class="image-wrapper" style="position: relative; height: 200px; overflow: hidden; border-radius: 4px;">
                <img 
                    src="${church.image}" 
                    alt="${church.name}" 
                    style="width: 100%; height: 100%; object-fit: cover;"
                    onerror="this.onerror=null; this.src='${PLACEHOLDER_IMG}';"
                    class="sepia-filter"
                >
                <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">
                    Est. ${church.established}
                </div>
            </div>
            <div style="padding: 1rem; flex-grow: 1; display: flex; flex-direction: column;">
                <h3 style="color: var(--color-dark-brown); margin: 0.5rem 0;">${church.name}</h3>
                <div style="font-size: 0.8rem; color: var(--color-terracotta); margin-bottom: 0.5rem; font-weight: bold;">
                    <i class="fas fa-map-marker-alt"></i> ${church.location}
                </div>
                
                <div style="height: 1px; background: var(--border-color); margin: 0.5rem 0;"></div>
                
                <p style="font-size: 0.9rem; margin-bottom: 1rem; color: var(--text-primary); font-style: italic;">
                    ${church.description}
                </p>

                <div style="background: rgba(255,255,255,0.5); padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem;">
                    <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--color-accent); margin-bottom: 0.4rem;">Architecture & History</h4>
                    <p style="font-size: 0.85rem; line-height: 1.4;">
                        ${church.history}
                    </p>
                </div>

                <div style="margin-top: auto;">
                     <span style="display: inline-block; background: var(--color-primary-light); color: var(--color-dark-brown); padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; border: 1px solid var(--border-color);">
                        ${church.style}
                     </span>
                </div>
            </div>
        </div>
    `;

    const content = `
        <section class="container" style="padding-top: var(--spacing-xl);">
            <div class="text-center mb-xl">
                <h2 style="font-size: 2.5rem; color: var(--color-dark-brown); margin-bottom: 1rem;">Historic Churches & Temples</h2>
                <div style="width: 80px; height: 4px; background: var(--color-terracotta); margin: 0 auto 2rem;"></div>
                <p style="max-width: 700px; margin: 0 auto; color: var(--text-secondary);">
                    Trinidad's skyline is punctuated by the spires and domes of its historic places of worship, 
                    reflecting the diverse faith and architectural ambition of its early community.
                </p>
            </div>

            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                ${churches.map(renderChurchCard).join('')}
            </div>
        </section>
    `;

    target.innerHTML = content;
};
