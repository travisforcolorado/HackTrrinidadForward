import { businesses } from '../data/businessData';

export const HistoricBusinesses = (target) => {
    const renderBusinessCard = (business) => `
        <div class="glass-card zoom-card" style="display: flex; flex-direction: column; height: 100%;">
            <div class="image-wrapper" style="position: relative; height: 200px; overflow: hidden; border-radius: 4px;">
                <img src="${business.image}" alt="${business.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">
                    Est. ${business.established}
                </div>
            </div>
            <div style="padding: 1rem; flex-grow: 1; display: flex; flex-direction: column;">
                <h3 style="color: var(--color-dark-brown); margin: 0.5rem 0;">${business.name}</h3>
                <div style="font-size: 0.8rem; color: var(--color-terracotta); margin-bottom: 0.5rem; font-weight: bold;">
                    <i class="fas fa-map-marker-alt"></i> ${business.location}
                </div>
                
                <p style="font-size: 0.9rem; margin-bottom: 1rem; color: var(--text-primary); font-style: italic;">
                    ${business.description}
                </p>

                <div style="background: rgba(255,255,255,0.5); padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem;">
                    <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--color-accent); margin-bottom: 0.4rem;">Historical Profile</h4>
                    <p style="font-size: 0.85rem; line-height: 1.4;">
                        ${business.history}
                    </p>
                </div>

                <div style="margin-top: auto; border-top: 1px solid var(--border-color); padding-top: 0.8rem;">
                     <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--color-success); margin-bottom: 0.4rem;">Today</h4>
                     <p style="font-size: 0.85rem;">${business.today}</p>
                </div>
            </div>
        </div>
    `;

    const content = `
        <section class="container" style="padding-top: var(--spacing-xl);">
            <div class="text-center mb-xl">
                <h2 style="font-size: 2.5rem; color: var(--color-dark-brown); margin-bottom: 1rem;">Historic Businesses of Trinidad</h2>
                <div style="width: 80px; height: 4px; background: var(--color-terracotta); margin: 0 auto 2rem;"></div>
                <p style="max-width: 700px; margin: 0 auto; color: var(--text-secondary);">
                    Explore the enduring legacy of Trinidad's commercial history. These 12 establishments have stood the test of time, 
                    evolving from the Wild West era to the present day while preserving their unique heritage.
                </p>
            </div>

            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                ${businesses.map(renderBusinessCard).join('')}
            </div>
            
            <div class="text-center mt-xl mb-xl">
                 <p style="font-size: 0.9rem; color: var(--text-secondary);">
                    * Historical images are high-fidelity recreations representing the era of establishment.
                 </p>
            </div>
        </section>
    `;

    target.innerHTML = content;
};
