// ── ProLytix Solutions — Shared Navigation ──
// Include in each page with: <script src="nav.js"></script>
// The script detects the current page to set the active nav link.

(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const solutionPages = ['healthcare.html', 'velox.html', 'government.html', 'education.html', 'custom-solutions.html'];
  const onSolutions = solutionPages.includes(page);

  const nav = `
<nav class="nav">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-mark">
      <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="34" fill="#0B3D2E"/>
        <line x1="40" y1="10" x2="40" y2="70" stroke="#E8A030" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="10" y1="40" x2="70" y2="40" stroke="#E8A030" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="40" cy="40" r="10" stroke="#E8A030" stroke-width="2.5" fill="none"/>
        <circle cx="40" cy="40" r="3.5" fill="#E8A030"/>
        <circle cx="55" cy="25" r="2.5" fill="#E8A030" opacity=".65"/>
        <circle cx="25" cy="25" r="2.5" fill="#E8A030" opacity=".65"/>
        <circle cx="55" cy="55" r="2.5" fill="#E8A030" opacity=".65"/>
        <circle cx="25" cy="55" r="2.5" fill="#E8A030" opacity=".65"/>
      </svg>
    </div>
    <div class="nav-logo-text">
      <span class="nav-logo-name">ProLytix Solutions</span>
      <span class="nav-logo-sub">Applied Intelligence</span>
    </div>
  </a>

  <ul class="nav-links">
    <li><a href="index.html" ${page === 'index.html' || page === '' ? 'class="active"' : ''}>Home</a></li>
    <li class="nav-dropdown">
      <a href="index.html#solutions" ${onSolutions ? 'class="active"' : ''}>Solutions ▾</a>
      <ul class="nav-dropdown-menu">
        <li><a href="healthcare.html">Healthcare</a></li>
        <li><a href="government.html">Government</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="custom-solutions.html">Custom Solutions</a></li>
      </ul>
    </li>
    <li><a href="careers.html" ${page === 'careers.html' ? 'class="active"' : ''}>Careers</a></li>
    <li><a href="index.html#contact" class="nav-cta">Contact Us</a></li>
  </ul>

  <button class="nav-hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-drawer" id="drawer">
  <a href="index.html">Home</a>
  <a href="healthcare.html">Healthcare</a>
  <a href="velox.html" style="padding-left:24px; font-size:12px;">— Velox</a>
  <a href="government.html">Government</a>
  <a href="education.html">Education</a>
  <a href="custom-solutions.html">Custom Solutions</a>
  <a href="careers.html">Careers</a>
  <a href="index.html#contact" class="drawer-cta">Contact Us</a>
</div>`;

  // Write nav before the page body content
  document.currentScript.insertAdjacentHTML('afterend', nav);

  // Wire up hamburger after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('drawer');
    if (!hamburger || !drawer) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      });
    });
  });
})();
