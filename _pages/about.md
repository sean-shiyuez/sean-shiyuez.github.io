---
layout: research
permalink: /
title: "Shiyue Zhao — Embodied Intelligence"
excerpt: "Shiyue Zhao at Huawei. Research in embodied intelligence, with a background in VLA systems, robot decision-making and control, and reinforcement learning."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---
<section class="hero" id="home">
  <div>
    <p class="eyebrow">Huawei · Embodied intelligence</p>
    <h1>Shiyue Zhao</h1>
    <div class="chinese-name" lang="zh">赵世越</div>
    <p class="lead">Learning to act in the physical world.</p>
    <p class="bio">I am currently at <strong>Huawei</strong>, working on <strong>embodied intelligence</strong>. My research background connects vision-language-action systems, robot decision-making and control, and reinforcement learning.</p>
    <p class="bio">Ph.D., Tsinghua University · Former visiting scholar, University of Michigan, Ann Arbor.</p>
    <div class="links"><a class="button" href="#research">Explore my research ↓</a><a href="https://scholar.google.com.hk/citations?user=3OsNp5wAAAAJ&amp;hl=en">Google Scholar ↗</a><a href="https://github.com/sean-shiyuez">GitHub ↗</a><a href="mailto:Stary132@163.com">Email ↗</a></div>
  </div>
  <figure class="portrait"><img src="{{ '/images/Photo_Sean.png' | relative_url }}" alt="Portrait of Shiyue Zhao" width="270" height="338"><figcaption>Research · Learning · Real-world systems</figcaption></figure>
</section>
<section class="section" id="research">
  <div class="section-head"><h2>Research interests</h2><span>01 / Directions</span></div>
  <p class="section-intro">My current focus is embodied intelligence, building on earlier work in autonomous driving, wheeled robots, and learning-based control.</p>
  <div class="research-grid">
    <article class="research-card"><span class="number">01 — CURRENT FOCUS</span><h3>Embodied intelligence</h3><p>Intelligent systems that connect perception and action through interaction with the physical world.</p></article>
    <article class="research-card"><span class="number">02 — MODELS &amp; DATA</span><h3>Vision, language &amp; action</h3><p>VLA systems and multimodal driving data, connecting visual observations with decision-making and control.</p></article>
    <article class="research-card"><span class="number">03 — LEARNING &amp; CONTROL</span><h3>Reliable robot behavior</h3><p>Reinforcement learning, safety-aware decisions, and control for wheeled robots and autonomous vehicles.</p></article>
  </div>
</section>
<section class="section" id="selected-work">
  <div class="section-head"><h2>Selected work</h2><span>02 / From methods to real vehicles</span></div>
  <div class="featured">
    <article class="feature"><span class="tag">Safety &amp; human–machine interaction · 2026</span><h3>Shared driving for collision avoidance</h3><p>Human–machine shared driving based on Hamilton–Jacobi reachability, published in Accident Analysis &amp; Prevention.</p><a href="https://drive.google.com/file/d/1zrZ0ZPJS5UX9MVdQ6cAzYre4s9EQJ_jt/view">Read the paper ↗</a></article>
    <article class="feature"><span class="tag">Learning &amp; vehicle control · 2025</span><h3>Drift cornering in the real world</h3><p>Drift cornering control and real-vehicle deployment for electric vehicles, published in IEEE Transactions on Industrial Electronics.</p><div class="links"><a href="https://drive.google.com/file/d/1GrKSinggEeKKaEKbSS2YadCUwpVo8Nam/view">Read the paper ↗</a><a href="https://www.youtube.com/watch?v=5wp67FcpfL8">Watch experiments ↗</a></div></article>
  </div>
</section>
<section class="section" id="projects">
  <div class="section-head"><h2>Open source &amp; datasets</h2><span>03 / Resources for research</span></div>
  <article class="dataset"><span class="tag">Featured dataset · Multimodal driving</span><h3>Extreme Driving Dataset</h3><p>Driving observations paired with rich chassis dynamics, including raw IMU and GPS heading, for limit-handling research and VLA model training. Six scenario categories span normal driving, complex traffic, critical situations, low light, rain, and snow.</p><div class="links"><a href="https://sean-shiyuez.github.io/extreme-driving-dataset-web/">Explore the project ↗</a><a href="https://huggingface.co/datasets/Stary108/Extreme_Driving_Conditions_Dataset">Dataset on Hugging Face ↗</a></div>
  <div class="video-grid"><figure><video controls muted loop playsinline preload="none" aria-label="Complex traffic driving example"><source src="videos/Complex_Traffic_Driving1_h264.mp4" type="video/mp4"></video><figcaption>01 / Complex traffic</figcaption></figure><figure><video controls muted loop playsinline preload="none" aria-label="Critical driving example"><source src="videos/Critical_Driving2_h264.mp4" type="video/mp4"></video><figcaption>02 / Critical driving</figcaption></figure><figure><video controls muted loop playsinline preload="none" aria-label="Snow driving example"><source src="videos/snow_h264.mp4" type="video/mp4"></video><figcaption>03 / Snow driving</figcaption></figure></div></article>
  <div class="project-grid"><article class="project-card"><span class="tag">Simulation</span><h3>Vehicle dynamics model</h3><p>A Python model with validated high-fidelity tire simulation for conventional and drift driving.</p><a href="https://github.com/sean-shiyuez/High-Accuracy-Vehicle-Dynamic-Model">View repository ↗</a></article><article class="project-card"><span class="tag">Reinforcement learning</span><h3>CarSim–Python co-simulation</h3><p>A Simulink bridge connecting CarSim and Python for vehicle reinforcement learning research.</p><a href="https://github.com/sean-shiyuez/Carsim_python_RL">View repository ↗</a></article><article class="project-card"><span class="tag">Visual perception</span><h3>Extreme Road Image Dataset</h3><p>Road surface images for research on tire–road friction coefficient estimation.</p><a href="https://github.com/sean-shiyuez/Extreme-Road-Image-Dataset">Explore dataset ↗</a></article></div>
</section>
<section class="section" id="news">
  <div class="section-head"><h2>Research updates</h2><span>04 / News</span></div>
  <p><strong>Current:</strong> I am at Huawei, working on embodied intelligence.</p>
  <details><summary>Research news archive · 2024–2026</summary><div class="news-list">
{% capture news %}{% include_relative includes/news.md %}{% endcapture %}{{ news | remove_first: '# 🔥 News' | markdownify }}
  </div></details>
</section>
<section class="section" id="publications">
  <div class="section-head"><h2>Publications</h2><span>05 / Journal &amp; conference papers</span></div>
  <div class="publication-tools"><label for="publication-search">Find a paper</label><input id="publication-search" type="search" placeholder="Search title, author, venue, or year…"><span id="publication-count" aria-live="polite"></span></div>
  <p id="no-papers" hidden>No matching papers. Try another title, author, or year.</p>
  <div class="publication-list">
{% capture publications %}{% include_relative includes/pub.md %}{% endcapture %}{{ publications | remove_first: '# 📝 Publications' | markdownify }}
  </div>
</section>
<section class="section" id="background">
  <div class="section-head"><h2>Background &amp; community</h2><span>06 / Academic journey</span></div>
  <div class="background-grid"><div><h3>Experience &amp; education</h3><ol class="timeline"><li><time>Current</time><strong>Huawei</strong><span>Research in embodied intelligence</span></li><li><time>2021.08 — 2026.06</time><strong>Ph.D. · Tsinghua University</strong><span>School of Vehicle and Mobility<br>Advisor: <a href="https://www.svm.tsinghua.edu.cn/essay/74/1858.html">Prof. Junzhi Zhang</a></span></li><li><time>2024.10 — 2025.09</time><strong>Visiting Scholar · University of Michigan</strong><span>Next Generation Mobility Systems Lab, Ann Arbor<br>Host: <a href="https://cee.engin.umich.edu/people/masoud-neda/">Dr. Neda Masoud</a></span></li><li><time>2017.08 — 2021.06</time><strong>Bachelor of Engineering · Central South University</strong><span>School of Traffic and Transportation Engineering</span></li></ol><div class="services"><h3>Academic service</h3><h4>Journal reviewer</h4><ul><li>ISA Transactions</li><li>IEEE Transactions on Industrial Electronics</li><li>Proceedings of the Institution of Mechanical Engineers, Part D: Journal of Automobile Engineering</li><li>Scientific Reports</li></ul><h4>Conference reviewer</h4><ul><li>Chinese Automation Congress</li><li>IEEE International Conference on Unmanned Systems</li></ul></div></div><div class="honors"><h3>Honors &amp; awards</h3>
{% capture honors %}{% include_relative includes/honors.md %}{% endcapture %}{{ honors | remove_first: '# 🎖 Honors and Awards' | markdownify }}
  </div></div>
</section>
<section class="section" id="playground"><div class="section-head"><h2>Beyond the papers</h2><span>07 / Creative experiments</span></div><p>Small explorations in interactive graphics and generative art.</p>
{% capture playground %}{% include_relative includes/playground.md %}{% endcapture %}{{ playground | remove_first: '# 🧪 AI Playground' | remove_first: 'Fun, interactive AI / generative-art experiments I built.' | markdownify }}
</section>
<section class="contact" id="contact"><div><p class="eyebrow">Get in touch</p><h2>Let’s exchange ideas.</h2><p>I welcome academic discussions on embodied intelligence, VLA systems, robotics, and reinforcement learning.</p></div><a class="button" href="mailto:Stary132@163.com">Stary132@163.com ↗</a></section>