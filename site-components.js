/* ═══════════════════════════════════════════════════════════
   Active Inference Institute — Shared Components
   
   Usage: Include on every page:
     <link rel="stylesheet" href="site.css">
     <div id="site-header"></div>
     ... page content ...
     <div id="site-footer"></div>
     <script src="site-components.js"></script>
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ═══ CONFIGURATION ═══
  // Adjust basePath if your pages are in subdirectories
  const basePath = '';

  // ═══ HEADER HTML ═══
  const headerHTML = `
<header class="header">
  <div class="header-inner">
    <div class="logo-container">
      <a href="${basePath}index.html"><canvas id="header-logo" width="280" height="40"></canvas></a>
    </div>
    <nav class="nav-links">
      <div class="nav-item" data-menu="about">
        <button aria-expanded="false" aria-haspopup="true">About <span class="nav-chevron"></span></button>
        <div class="mega-menu" role="menu">
          <div class="mega-menu-grid">
            <div class="mega-menu-col">
              <h4>Our Story</h4>
              <ul>
                <li><a href="${basePath}index.html#history" role="menuitem">History<span class="menu-desc">From founding to present day</span></a></li>
                <li><a href="${basePath}index.html#vision-mission" role="menuitem">Vision, Mission &amp; Objectives<span class="menu-desc">What drives us forward</span></a></li>
              </ul>
            </div>
            <div class="mega-menu-col">
              <h4>Our People</h4>
              <ul>
                <li><a href="${basePath}sab.html" role="menuitem">Scientific Advisory Board<span class="menu-desc">Research &amp; rigour</span></a></li>
                <li><a href="${basePath}bod.html" role="menuitem">Board of Directors<span class="menu-desc">Governance and leadership</span></a></li>
              </ul>
            </div>
            <div class="mega-menu-col">
              <h4>Our Work</h4>
              <ul>
                <li><a href="${basePath}index.html#research" role="menuitem">Past Projects<span class="menu-desc">Completed research programmes</span></a></li>
                <li><a href="${basePath}index.html#research" role="menuitem">Current Projects<span class="menu-desc">Ongoing research and initiatives</span></a></li>
                <li><a href="${basePath}index.html#research" role="menuitem">Future Aspirations<span class="menu-desc">Where we are headed</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item" data-menu="learn">
        <button aria-expanded="false" aria-haspopup="true">Learn <span class="nav-chevron"></span></button>
        <div class="mega-menu" role="menu">
          <div class="mega-menu-grid">
            <div class="mega-menu-col">
              <h4>Study</h4>
              <ul>
                <li><a href="${basePath}index.html#education" role="menuitem">Courses &amp; Dates<span class="menu-desc">Upcoming cohorts and enrolment</span></a></li>
                <li><a href="${basePath}index.html#education" role="menuitem">Textbook Group<span class="menu-desc">Peer-led study of the foundational text</span></a></li>
                <li><a href="${basePath}index.html#education" role="menuitem">Internship Programme<span class="menu-desc">Mentored research curriculum</span></a></li>
              </ul>
            </div>
            <div class="mega-menu-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="https://www.youtube.com/c/ActiveInference" target="_blank" role="menuitem">Livestreams &amp; Lectures<span class="menu-desc">Weekly presentations on YouTube</span></a></li>
                <li><a href="${basePath}index.html#tutorials" role="menuitem">Interactive Simulations<span class="menu-desc">Hands-on FEP and Active Inference demos</span></a></li>
              </ul>
            </div>
            <div class="mega-menu-col">
              <h4>Tools</h4>
              <ul>
                <li><a href="${basePath}index.html#education" role="menuitem">RxInfer.jl<span class="menu-desc">Probabilistic graphical inference</span></a></li>
                <li><a href="https://github.com/ActiveInferenceInstitute" target="_blank" role="menuitem">Open-Source Code<span class="menu-desc">GitHub repositories and libraries</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item"><a href="${basePath}index.html#research">Research</a></div>
      <div class="nav-item"><a href="${basePath}index.html#community">Community</a></div>
      <div class="nav-cta-wrap"><a href="#" class="nav-cta">Get Involved</a></div>
    </nav>
    <button class="mobile-menu-btn" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </div>
</header>
<div class="mega-menu-overlay" id="mega-overlay"></div>
<nav class="mobile-nav" id="mobile-nav">
  <div class="mobile-nav-section">
    <button class="mobile-nav-toggle" data-target="mobile-about">About <span class="mobile-chevron"></span></button>
    <div class="mobile-subnav" id="mobile-about">
      <div class="mobile-subnav-label">Our Story</div>
      <a href="${basePath}index.html#history">History</a>
      <a href="${basePath}index.html#vision-mission">Vision, Mission &amp; Objectives</a>
      <div class="mobile-subnav-label">Our People</div>
      <a href="${basePath}sab.html">Scientific Advisory Board</a>
      <a href="${basePath}bod.html">Board of Directors</a>
      <div class="mobile-subnav-label">Our Work</div>
      <a href="${basePath}index.html#research">Past Projects</a>
      <a href="${basePath}index.html#research">Current Projects</a>
      <a href="${basePath}index.html#research">Future Aspirations</a>
    </div>
  </div>
  <div class="mobile-nav-section">
    <button class="mobile-nav-toggle" data-target="mobile-learn">Learn <span class="mobile-chevron"></span></button>
    <div class="mobile-subnav" id="mobile-learn">
      <div class="mobile-subnav-label">Study</div>
      <a href="${basePath}index.html#education">Courses &amp; Dates</a>
      <a href="${basePath}index.html#education">Textbook Group</a>
      <div class="mobile-subnav-label">Explore</div>
      <a href="https://www.youtube.com/c/ActiveInference" target="_blank">Livestreams &amp; Lectures</a>
      <a href="${basePath}index.html#tutorials">Interactive Simulations</a>
    </div>
  </div>
  <div class="mobile-nav-section"><a href="${basePath}index.html#research">Research</a></div>
  <div class="mobile-nav-section"><a href="${basePath}index.html#community">Community</a></div>
  <a href="#" class="mobile-nav-cta">Get Involved</a>
</nav>`;

  // ═══ FOOTER HTML ═══
  const footerHTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <canvas id="footer-logo" width="220" height="35"></canvas>
        <p>The Active Inference Institute is a volunteer-led 501(c)(3) nonprofit dedicated to the accessibility, rigor, and applicability of the Free Energy Principle and Active Inference, following open science principles.</p>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="${basePath}index.html#vision-mission">Vision &amp; Mission</a></li>
          <li><a href="${basePath}bod.html">Our People</a></li>
          <li><a href="${basePath}index.html#history">History</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="${basePath}index.html#tutorials">Tutorials</a></li>
          <li><a href="${basePath}index.html#education">Courses</a></li>
          <li><a href="${basePath}index.html#education">Textbook Group</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://discord.com/invite/FSUvYD2p9S" target="_blank">Discord</a></li>
          <li><a href="https://www.youtube.com/c/ActiveInference" target="_blank">YouTube</a></li>
          <li><a href="https://github.com/ActiveInferenceInstitute" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>2026 The Active Inference Institute</p>
      <div class="social-links">
        <a href="https://www.youtube.com/c/ActiveInference" target="_blank" title="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>YouTube</a>
        <a href="https://discord.com/invite/FSUvYD2p9S" target="_blank" title="Discord"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.094.246-.194.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>Discord</a>
        <a href="https://github.com/ActiveInferenceInstitute" target="_blank" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>GitHub</a>
      </div>
    </div>
  </div>
</footer>`;

  // ═══ INJECT INTO PAGE ═══
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.outerHTML = headerHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

  // ═══ DRAW CANVAS LOGOS ═══
  function drawStaticLogo(canvasId, scale) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const D = devicePixelRatio || 1;
    const baseW = parseInt(canvas.width), baseH = parseInt(canvas.height);
    canvas.width = baseW * D; canvas.height = baseH * D;
    canvas.style.width = baseW + 'px'; canvas.style.height = baseH + 'px';
    ctx.scale(D, D);
    const H = baseH, cx = 22 * scale, cy = H / 2, s = 18 * scale;
    ctx.fillStyle = '#fff';
    // Pi top bar
    ctx.beginPath(); ctx.moveTo(cx-0.52*s,cy-0.28*s);
    ctx.quadraticCurveTo(cx-0.50*s,cy-0.42*s,cx-0.38*s,cy-0.44*s);
    ctx.bezierCurveTo(cx-0.15*s,cy-0.45*s,cx+0.25*s,cy-0.44*s,cx+0.42*s,cy-0.44*s);
    ctx.quadraticCurveTo(cx+0.54*s,cy-0.43*s,cx+0.56*s,cy-0.30*s);
    ctx.quadraticCurveTo(cx+0.50*s,cy-0.36*s,cx+0.38*s,cy-0.36*s);
    ctx.lineTo(cx-0.32*s,cy-0.36*s);
    ctx.quadraticCurveTo(cx-0.44*s,cy-0.36*s,cx-0.52*s,cy-0.28*s); ctx.fill();
    // Left leg
    ctx.beginPath(); ctx.moveTo(cx-0.18*s,cy-0.38*s);
    ctx.bezierCurveTo(cx-0.22*s,cy-0.12*s,cx-0.36*s,cy+0.12*s,cx-0.42*s,cy+0.38*s);
    ctx.bezierCurveTo(cx-0.46*s,cy+0.50*s,cx-0.43*s,cy+0.58*s,cx-0.36*s,cy+0.62*s);
    ctx.quadraticCurveTo(cx-0.30*s,cy+0.66*s,cx-0.26*s,cy+0.58*s);
    ctx.bezierCurveTo(cx-0.30*s,cy+0.48*s,cx-0.28*s,cy+0.32*s,cx-0.26*s,cy+0.22*s);
    ctx.bezierCurveTo(cx-0.22*s,cy+0.05*s,cx-0.12*s,cy-0.18*s,cx-0.06*s,cy-0.36*s); ctx.fill();
    // Right leg
    ctx.beginPath(); ctx.moveTo(cx+0.22*s,cy-0.38*s);
    ctx.bezierCurveTo(cx+0.18*s,cy-0.12*s,cx+0.14*s,cy+0.12*s,cx+0.10*s,cy+0.38*s);
    ctx.bezierCurveTo(cx+0.06*s,cy+0.52*s,cx+0.10*s,cy+0.60*s,cx+0.18*s,cy+0.62*s);
    ctx.quadraticCurveTo(cx+0.24*s,cy+0.65*s,cx+0.26*s,cy+0.56*s);
    ctx.bezierCurveTo(cx+0.20*s,cy+0.46*s,cx+0.18*s,cy+0.32*s,cx+0.20*s,cy+0.18*s);
    ctx.bezierCurveTo(cx+0.22*s,cy+0.02*s,cx+0.28*s,cy-0.16*s,cx+0.32*s,cy-0.36*s); ctx.fill();
    // Text
    ctx.font = `500 ${14*scale}px Georgia, "Times New Roman", Times, serif`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('Active Inference Institute', cx + 20*scale, cy);
  }

  drawStaticLogo('header-logo', 1);
  drawStaticLogo('footer-logo', 0.9);

  // ═══ MEGA MENU BEHAVIOUR ═══
  const navItems = document.querySelectorAll('.nav-item[data-menu]');
  const overlay = document.getElementById('mega-overlay');
  let closeTimer = null;

  function openMenu(item) {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
    navItems.forEach(ni => {
      if (ni !== item) { ni.classList.remove('active'); const b = ni.querySelector('button'); if (b) b.setAttribute('aria-expanded','false'); }
    });
    item.classList.add('active');
    const btn = item.querySelector('button'); if (btn) btn.setAttribute('aria-expanded','true');
    overlay.classList.add('active');
  }

  function closeAll() {
    navItems.forEach(ni => { ni.classList.remove('active'); const b = ni.querySelector('button'); if (b) b.setAttribute('aria-expanded','false'); });
    overlay.classList.remove('active');
  }

  navItems.forEach(item => {
    const trigger = item.querySelector('button');
    const menu = item.querySelector('.mega-menu');
    if (trigger) trigger.addEventListener('click', e => { e.stopPropagation(); item.classList.contains('active') ? closeAll() : openMenu(item); });
    item.addEventListener('mouseenter', () => { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } openMenu(item); });
    item.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeAll, 250); });
    if (menu) {
      menu.addEventListener('mouseenter', () => { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } });
      menu.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeAll, 250); });
    }
  });

  if (overlay) overlay.addEventListener('click', closeAll);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
  document.querySelectorAll('.mega-menu a').forEach(l => l.addEventListener('click', closeAll));

  // ═══ MOBILE MENU ═══
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
      toggle.addEventListener('click', function() {
        const subnav = document.getElementById(this.dataset.target);
        this.classList.toggle('open'); subnav.classList.toggle('open');
      });
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { mobileNav.classList.remove('active'); menuBtn.classList.remove('active'); });
    });
  }

  // ═══ UK SPELLING LOCALISATION ═══
  const isUK = navigator.language === 'en-GB' || navigator.language.startsWith('en-GB') || navigator.languages?.some(l => l === 'en-GB');
  if (isUK) {
    const R = [['minimizing','minimising'],['Minimization','Minimisation'],['minimization','minimisation'],['minimize','minimise'],['Minimize','Minimise'],['characterizes','characterises'],['characterized','characterised'],['characterize','characterise'],['visualized','visualised'],['visualization','visualisation'],['visualize','visualise'],['standardized','standardised'],['standardize','standardise'],['personalized','personalised'],['personalize','personalise'],['Normalized','Normalised'],['normalized','normalised'],['normalize','normalise'],['optimized','optimised'],['optimization','optimisation'],['optimize','optimise'],['recognized','recognised'],['recognize','recognise'],['organized','organised'],['organize','organise'],['behavior','behaviour'],['Behavior','Behaviour'],['favor','favour'],['Programs','Programmes'],['programs','programmes'],['Program','Programme'],['program','programme'],['organizations','organisations'],['organization','organisation'],['Organization','Organisation'],['rigor','rigour'],['Rigor','Rigour'],['modeling','modelling'],['Modeling','Modelling'],['labeled','labelled'],['traveled','travelled'],['catalog','catalogue']];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => { let t = n.nodeValue; R.forEach(([us,uk]) => { t = t.replace(new RegExp('\\b'+us+'\\b','g'), uk); }); n.nodeValue = t; });
  }

})();
