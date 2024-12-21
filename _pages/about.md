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

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}

<div id="vcomments"></div>
<script src="https://cdn.jsdelivr.net/npm/valine@latest/dist/Valine.min.js"></script>
<script>
  new Valine({
    el: '#vcomments',
    appId: 'DnmcBKBgPiSSCRqppPcCuG6t-gzGzoHsz',
    appKey: 'PO27sCUx4QEJ67nkJvceP62n',
    placeholder: 'Leave a comment：',
    visitor: flase
  });

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
