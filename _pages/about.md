---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>
{% include_relative includes/intro.md %}

<!-- If you like the template of this homepage, welcome to star and fork my open-sourced template version [AcadHomepage ![](https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io?style=social)](https://github.com/RayeRen/acad-homepage.github.io). -->

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

<div id="honors-section" style="display:none">
{% include_relative includes/honers.md %}
</div>

{% include_relative includes/others.md %}

<!-- Honors modal -->
<div id="honors-modal-overlay" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.45); z-index:9999; align-items:center; justify-content:center;">
  <div style="background:#fff; border-radius:12px; padding:2.5rem 2.75rem; max-width:520px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.2); position:relative; text-align:center;">
    <button onclick="document.getElementById('honors-modal-overlay').style.display='none'" style="position:absolute; top:1rem; right:1.25rem; background:none; border:none; font-size:1.4rem; color:#94a3b8; cursor:pointer; line-height:1;">×</button>
    <p style="font-size:1.05rem; line-height:1.8; color:#1e293b; margin:0 0 0.9rem;">荣誉只是纸上之名，真正的价值在于无私的爱在世界留下的微小改变。</p>
    <p style="font-size:0.92rem; line-height:1.75; color:#64748b; margin:0; font-style:italic;">Honors are mere names on paper; their true value lies in the quiet changes my selfless love leaves in the world.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href="#honors-modal"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var overlay = document.getElementById('honors-modal-overlay');
        overlay.style.display = 'flex';
      });
    });
    document.getElementById('honors-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) this.style.display = 'none';
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') document.getElementById('honors-modal-overlay').style.display = 'none';
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

<div id="clustrmaps-container">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=z0Nyer5y5RB7Bx81qxonh6Q6434L1R-VMtVMT5fG7sw"></script>
</div>

<style>
  #clustrmaps-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
  }

  #clustrmaps-container canvas {
    width: 100%;
    height: 100%;
  }
</style>
