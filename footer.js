// ── ProLytix Solutions — Shared Footer ──
// Include in each page with: <script src="footer.js"></script>
// Place just before </body>.

(function () {
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
      <p class="footer-brand-tagline">Guideline-driven intelligence software for healthcare, government, and education. On-premise. Traceable. Human-reviewed, always.</p>
    </div>

    <div>
      <div class="footer-col-title">Solutions</div>
      <ul class="footer-links">
        <li><a href="healthcare.html">Healthcare</a></li>
        <li><a href="government.html">Government</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="custom-solutions.html">Custom Solutions</a></li>
      </ul>
    </div>

    <div>
      <div class="footer-col-title">Company</div>
      <ul class="footer-links">
        <li><a href="careers.html">Careers</a></li>
        <li><a href="index.html#contact">Contact Us</a></li>
        <li><a href="mailto:chris@prolytixsolutions.com">chris@prolytixsolutions.com</a></li>
        <li><a href="https://github.com/ProLytix-Solutions" target="_blank" rel="noopener">GitHub</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span class="footer-copy">© 2026 ProLytix Solutions LLC · All rights reserved</span>
    <span class="footer-copy">prolytixsolutions.com</span>
  </div>
</footer>`;

  document.currentScript.insertAdjacentHTML('beforebegin', footer);
})();
