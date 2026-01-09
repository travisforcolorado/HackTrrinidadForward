export const About = (target) => {
  const content = `
    <section class="container" style="padding-top: var(--spacing-xl); max-width: 800px;">
      <div class="glass-card mb-lg">
        <h2 class="text-center" style="color: var(--color-dark-brown);">About This Project</h2>
        <div style="width: 60px; height: 4px; background: var(--color-terracotta); margin: 1rem auto;"></div>
        
        <p class="mb-lg">
          The Las Animas County History App is dedicated to preserving and sharing the rich cultural heritage of our region. 
          From the early Native American inhabitants to the coal camps and the artists of today, our history is vibrant and diverse.
        </p>

        <h3>County Origins</h3>
        <p class="mb-md">
          Las Animas County was not always its own entity. Originally, this vast region was part of a much larger <strong>Huerfano County</strong>, one of the original 17 counties of the Colorado Territory.
        </p>
        <p class="mb-lg">
          On <strong>February 9, 1866</strong>, the Territorial Legislature officially separated Las Animas from Huerfano, creating a new jurisdiction to serve the growing population of the Purgatoire Valley. At the time of its creation, it was the largest county in the territory.
        </p>
        <div class="glass-card mb-lg" style="text-align: center;">
             <img src="/assets/images/historic_placeholder.png" alt="Map showing Las Animas separating from Huerfano" style="max-width: 100%; border-radius: 4px; border: 1px solid var(--border-color);">
             <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-secondary);">Map Verification: Separation of Las Animas from Huerfano (1866)</p>
        </div>

        <h3>Contact Us</h3>
        <p>Have a story to share or a correction to make? We'd love to hear from you.</p>
        
        <form style="margin-top: var(--spacing-md); display: flex; flex-direction: column; gap: var(--spacing-sm);">
          <input type="text" placeholder="Your Name" style="padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 4px;">
          <input type="email" placeholder="Your Email" style="padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 4px;">
          <textarea placeholder="Your Message" rows="4" style="padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 4px;"></textarea>
          <button class="btn" type="submit" onclick="event.preventDefault(); alert('In a real app, this would send an email! Thanks for testing.');">Send Message</button>
        </form>
      </div>
    </section>
  `;

  target.innerHTML = content;
};
