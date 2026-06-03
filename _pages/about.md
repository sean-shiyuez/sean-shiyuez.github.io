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

<span class='anchor' id='projects'></span>
{% include_relative includes/projects.md %}

<span class='anchor' id='news'></span>
{% include_relative includes/news.md %}

<span class='anchor' id='publications'></span>
{% include_relative includes/pub.md %}

<span class='anchor' id='honors-and-awards'></span>
{% include_relative includes/honors.md %}

<span class='anchor' id='education'></span>
<span class='anchor' id='services'></span>
{% include_relative includes/others.md %}

{% include internship-modal.html %}

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

<div id="clustrmaps-container" style="margin: 1rem auto; max-width: 280px;">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=z0Nyer5y5RB7Bx81qxonh6Q6434L1R-VMtVMT5fG7sw"></script>
</div>

<style>
  #clustrmaps-container {
    width: 100%;
    max-width: 280px;
    height: 280px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }

  #clustrmaps-container canvas {
    width: 100%;
    height: 100%;
  }
</style>
