export const Header = (target) => {
  const content = `
    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
      <div class="logo" style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--color-dark-teal);">
        Las Animas History
      </div>
      <nav>
        <ul style="display: flex; list-style: none; gap: var(--spacing-md);">
          <li><a href="#home" style="font-weight: 500;">Home</a></li>
          <li><a href="#timeline" style="font-weight: 500;">Timeline</a></li>
          <li><a href="#stories" style="font-weight: 500;">Stories</a></li>
          <li><a href="#businesses" style="font-weight: 500;">Businesses</a></li>
          <li><a href="#about" style="font-weight: 500;">About</a></li>
        </ul>
      </nav>
    </div>
  `;

  // Apply a subtle bottom border/shadow
  target.style.background = 'rgba(253, 251, 247, 0.9)';
  target.style.backdropFilter = 'blur(10px)';
  target.style.borderBottom = '1px solid var(--border-color)';
  target.style.position = 'sticky';
  target.style.top = '0';
  target.style.zIndex = '100';

  target.innerHTML = content;
};
