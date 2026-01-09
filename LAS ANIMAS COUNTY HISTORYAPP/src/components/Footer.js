export const Footer = (target) => {
    const content = `
    <div class="container text-center">
      <div class="mb-lg">
        <h4 style="color: var(--color-parchment);">Las Animas County History App</h4>
        <p style="color: rgba(255,255,255,0.7);">Preserving our heritage for future generations.</p>
      </div>
      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: var(--spacing-sm);">
        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">&copy; ${new Date().getFullYear()} Las Animas County. All rights reserved.</p>
      </div>
    </div>
  `;

    target.style.backgroundColor = 'var(--color-dark-brown)';
    target.style.color = 'var(--color-white)';
    target.style.marginTop = 'var(--spacing-xl)';
    target.style.padding = 'var(--spacing-xl) 0';

    target.innerHTML = content;
};
