---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- scroll progress bar -->
<div id="scroll-progress"></div>

<span class='anchor' id='about-me'></span>
{% include_relative includes/intro.md %}

<span class='anchor' id='news'></span>
{% include_relative includes/news.md %}

<span class='anchor' id='projects'></span>
{% include_relative includes/projects.md %}

<span class='anchor' id='publications'></span>
{% include_relative includes/pub.md %}

<div style="display:none">
<span class='anchor' id='honors-and-awards'></span>
{% include_relative includes/honors.md %}
</div>

<span class='anchor' id='education'></span>
<span class='anchor' id='services'></span>
{% include_relative includes/others.md %}

{% include internship-modal.html %}

<!-- Honors modal -->
<div id="honors-modal-overlay" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.45); z-index:9999; align-items:center; justify-content:center;">
  <div style="background:var(--bg,#fff); border-radius:12px; padding:2.5rem 2.75rem; max-width:520px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.2); position:relative; text-align:center;">
    <button onclick="document.getElementById('honors-modal-overlay').style.display='none'" style="position:absolute; top:1rem; right:1.25rem; background:none; border:none; font-size:1.4rem; color:#94a3b8; cursor:pointer; line-height:1;">×</button>
    <p style="font-size:1.05rem; line-height:1.8; color:var(--text,#1e293b); margin:0 0 0.9rem;">荣誉只是纸上之名，真正的价值在于无私的爱在世界留下的微小改变。</p>
    <p style="font-size:0.92rem; line-height:1.75; color:var(--text-muted,#64748b); margin:0; font-style:italic;">Honors are mere names on paper; their true value lies in the quiet changes my selfless love leaves in the world.</p>
  </div>
</div>

<!-- BibTeX copy toast -->
<div id="cite-toast" style="position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px); background:#0f172a; color:#e2e8f0; padding:0.5rem 1.25rem; border-radius:8px; font-size:0.875rem; opacity:0; pointer-events:none; transition:opacity 0.2s ease, transform 0.2s ease; z-index:9999;">BibTeX copied!</div>

<script>
document.addEventListener('DOMContentLoaded', function () {

  /* ── Scroll progress bar ── */
  var bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', function () {
    var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── Back-to-top button ── */
  var btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    var show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Dark mode toggle ── */
  var toggle = document.getElementById('theme-toggle');
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
    toggle.textContent = stored === 'dark' ? '☀' : '🌙';
  }
  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.textContent = next === 'dark' ? '☀' : '🌙';
  });

  /* ── BibTeX copy ── */
  var toast = document.getElementById('cite-toast');
  document.querySelectorAll('.cite-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var key = this.dataset.bib;
      var el = document.getElementById('bib-' + key);
      if (!el) return;
      navigator.clipboard.writeText(el.textContent.trim()).then(function () {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(function () {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(-50%) translateY(20px)';
        }, 1800);
      });
    });
  });

  /* ── Section entrance animation ── */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.page__content h1').forEach(function (h) {
      h.classList.add('section-hidden');
      observer.observe(h);
    });
  }

  /* ── Honors modal ── */
  document.querySelectorAll('a[href="#honors-modal"], a[href$="#honors-modal"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('honors-modal-overlay').style.display = 'flex';
    });
  });
  document.getElementById('honors-modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) this.style.display = 'none';
  });

  /* ── Internship modal ── */
  document.querySelectorAll('a[href="#internship-modal"], a[href$="#internship-modal"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('internship-modal-overlay').style.display = 'flex';
    });
  });
  document.getElementById('internship-modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) this.style.display = 'none';
  });

  /* ── Esc closes modals ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.getElementById('honors-modal-overlay').style.display = 'none';
      document.getElementById('internship-modal-overlay').style.display = 'none';
    }
  });

});
</script>

<div id="comments">
  <script src="https://utteranc.es/client.js"
          repo="sean-shiyuez/sean-shiyuez.github.io"
          issue-term="pathname"
          label="Welcome any Comment："
          theme="github-light"
          crossorigin="anonymous"
          async>
  </script>
</div>

<div id="clustrmaps-container" style="width:300px; height:300px; margin:1.5em auto;">
  <script type="text/javascript" id="clstr_globe" src="https://clustrmaps.com/globe.js?d=z0Nyer5y5RB7Bx81qxonh6Q6434L1R-VMtVMT5fG7sw"></script>
</div>
