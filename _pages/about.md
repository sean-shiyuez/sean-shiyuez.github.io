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

<div id="clustrmaps-container">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=z0Nyer5y5RB7Bx81qxonh6Q6434L1R-VMtVMT5fG7sw"></script>
</div>

<style>
  #clustrmaps-container {
    width: 300px; /* 设置地图球的宽度 */
    height: 300px; /* 设置地图球的高度 */
    overflow: hidden; /* 避免内容溢出 */
  }

  #clustrmaps-container canvas {
    width: 100%; /* 让地图自适应容器 */
    height: 100%; /* 让地图自适应容器 */
  }
</style>
