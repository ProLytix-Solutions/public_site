// ── ProLytix Solutions — Shared Footer ──
// Include in each page with: <script src="footer.js"></script>
// Place just before </body>. The footer column links adjust per page.

(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const onVelox = page === 'velox.html';

  const platformCol = onVelox ? `
    <div>
      <div class="footer-col-title">Velox</div>
      <ul class="footer-links">
        <li><a href="#use-cases">Four Use Cases</a></li>
        <li><a href="#iq-suite">IQ Suite Modules</a></li>
        <li><a href="#architecture">Architecture</a></li>
        <li><a href="#alpha">Alpha Program</a></li>
      </ul>
    </div>` : `
    <div>
      <div class="footer-col-title">Platform</div>
      <ul class="footer-links">
        <li><a href="velox.html">Velox</a></li>
        <li><a href="#platform">IQ Suite</a></li>
        <li><a href="#platform">Architecture</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>`;

  const footer = `
<footer>
  <div class="footer-inner">
    <div>
      <div style="display:flex; align-items:center; gap:12px;">
        <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="34" fill="#0B3D2E"/>
          <line x1="40" y1="10" x2="40" y2="70" stroke="#E8A030" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="10" y1="40" x2="70" y2="40" stroke="#E8A030" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="40" cy="40" r="10" stroke="#E8A030" stroke-width="2.5" fill="none"/>
          <circle cx="40" cy="40" r="3.5" fill="#E8A030"/>
        </svg>
      </div>
      <div class="footer-brand-name">ProLytix Solutions</div>
      <p class="footer-brand-tagline">Clinical intelligence software for the moments that matter most. On-premise, Epic-compatible, guideline-driven.</p>
    </div>

    ${platformCol}

    <div>
      <div class="footer-col-title">Contact</div>
      <ul class="footer-links">
        <li><a href="index.html#contact">Request Demo</a></li>
        <li><a href="mailto:chris@prolytixsolutions.com">chris@prolytixsolutions.com</a></li>
        <li><a href="https://github.com/ProLytix-Solutions" target="_blank" rel="noopener">GitHub</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span class="footer-copy">© 2026 ProLytix Solutions LLC · Louisiana · All rights reserved</span>
    <span class="footer-copy">prolytixsolutions.com</span>
  </div>
</footer>`;

  document.currentScript.insertAdjacentHTML('beforebegin', footer);
})();
