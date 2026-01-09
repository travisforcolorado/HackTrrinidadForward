export const Home = (target) => {
    const heroImage = '/assets/images/hero.png';

    const content = `
    <!-- Hero Section -->
    <section class="hero" style="
      position: relative;
      height: 80vh;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: var(--color-white);
      text-align: center;
    ">
      <!-- Background Image with Overlay -->
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${heroImage}');
        background-size: cover;
        background-position: center;
        z-index: -2;
      "></div>
      
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
        z-index: -1;
      "></div>

      <!-- Content -->
      <div class="container" style="position: relative; z-index: 1;">
        <h1 style="
          font-size: 4rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          margin-bottom: var(--spacing-md);
          color: var(--color-paper);
        ">Las Animas County</h1>
        <p style="
          font-family: var(--font-heading);
          font-size: 2rem;
          font-style: italic;
          margin-bottom: var(--spacing-lg);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          color: var(--color-turquoise);
        ">Where the West Was Won</p>
        <button onclick="window.location.hash='#timeline'" class="btn" style="
          font-size: 1.2rem;
          padding: 1rem 2.5rem;
          box-shadow: var(--shadow-lg);
        ">Start the Journey</button>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="container" style="padding: var(--spacing-xl) var(--common-padding);">
      <div class="glass-card text-center" style="max-width: 800px; margin: 0 auto; background: rgba(255, 255, 255, 0.8);">
        <h2 style="color: var(--color-dark-brown);">A Rich Heritage</h2>
        <div style="width: 60px; height: 4px; background: var(--color-terracotta); margin: 1rem auto;"></div>
        <p style="font-size: 1.1rem; color: var(--color-charcoal);">
          From the ancient peaks of the Sangre de Cristo Mountains to the bustling streets of Trinidad, 
          Las Animas County holds the stories of coal miners, cattle ranchers, and pioneers. 
          Discover the legends that shaped this land.
        </p>
      </div>
    </section>
  `;

    target.innerHTML = content;
};
