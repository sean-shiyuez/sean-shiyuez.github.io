<h1 align="center">Shiyue Zhao · Academic Homepage</h1>

<p align="center">
  <b><a href="https://sean-shiyuez.github.io">sean-shiyuez.github.io</a></b><br>
  Personal academic website of <b>Shiyue Zhao (赵世越)</b> — PhD candidate, School of Vehicle and Mobility, Tsinghua University.
</p>

<p align="center">
  <a href="https://github.com/sean-shiyuez/sean-shiyuez.github.io/blob/main/LICENSE"><img src="https://img.shields.io/github/license/sean-shiyuez/sean-shiyuez.github.io" alt="License"></a>
  <img src="https://img.shields.io/badge/Jekyll-GitHub%20Pages-blue" alt="Jekyll">
  <img src="https://img.shields.io/badge/3D-Three.js-black" alt="Three.js">
</p>

---

## English

A fast, responsive academic homepage built with **Jekyll** and hosted on **GitHub Pages**, extended with a small **AI Playground** of interactive WebGL / generative-art experiments.

### Features
- **Single-page profile** — about, news, open-source code, publications, honors, education and services, all assembled from Markdown partials.
- **One-click BibTeX** — every first-author paper has a `Cite` button that copies a ready BibTeX entry.
- **Light / dark theme** — a toggle in the navbar; the choice is remembered via `localStorage`.
- **Tech-styled UI** — scroll progress bar, back-to-top button, section reveal animations, and a subtle dot-grid backdrop.
- **AI Playground** — self-contained experiments under [`playground/`](playground/):
  - 🌊 **Suminagashi** — a WebGL fluid simulation where ink melts together like water.
  - 🚗 **AXIS — Concept Car** — a 3D sports-car microsite (Three.js); orbit with the mouse, rev on approach, with wind-tunnel smoke streaming over the body.
  - 🫧 **Liquid Glass** — a glassmorphism UI showcase for designing glass-themed sites.
- **Auto-updated Google Scholar citations** via a GitHub Action.

### Project structure
| Path | What it holds |
|------|---------------|
| `_config.yml` | Site settings, author info, SEO |
| `_pages/about.md` | Home page; pulls in the partials below |
| `_pages/includes/` | Content sections: `intro`, `news`, `projects`, `pub`, `honors`, `others` |
| `_data/navigation.yml` | Top navigation menu |
| `_includes/`, `_layouts/`, `_sass/` | Theme machinery (header, sidebar, styles) |
| `assets/css/main.scss` | Custom design + theming + interactions |
| `playground/` | Standalone interactive experiments |
| `images/`, `videos/` | Media assets |
| `google_scholar_crawler/`, `github_myprofile_updater/` | GitHub Actions helpers |

### Run locally
```bash
bundle install          # first time only
bash run_server.sh      # → bundle exec jekyll liveserve
# open http://127.0.0.1:4000
```

### Credits
- Based on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template, itself derived from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) and [Academic Pages](https://github.com/academicpages/academicpages.github.io).
- 3D playground built with [Three.js](https://threejs.org/); the concept-car uses the official Three.js *Ferrari 458* sample model.

---

## 中文

基于 **Jekyll** 构建、部署在 **GitHub Pages** 上的个人学术主页，并额外加入了一个交互式 **AI Playground**（WebGL / 生成艺术小实验）。

### 功能特性
- **单页个人主页** —— 关于我、新闻、开源代码、论文、荣誉、教育与学术服务，全部由 Markdown 片段拼装而成。
- **一键复制 BibTeX** —— 每篇第一作者论文都带 `Cite` 按钮，点击即复制现成的 BibTeX 条目。
- **明 / 暗主题切换** —— 导航栏按钮切换，选择通过 `localStorage` 记忆。
- **科技感界面** —— 滚动进度条、回到顶部按钮、区块入场动画、淡点阵背景。
- **AI Playground** —— 位于 [`playground/`](playground/) 的自包含实验：
  - 🌊 **墨流 Suminagashi** —— 基于 WebGL 流体模拟，墨水如水般相互交融。
  - 🚗 **AXIS 概念车** —— Three.js 3D 跑车微站；鼠标环绕视角、靠近踩油门，风洞白烟沿车身掠过。
  - 🫧 **Liquid Glass** —— 玻璃拟态 UI 展示，可作为设计玻璃风格网站的起点。
- **Google Scholar 引用自动更新**（通过 GitHub Action）。

### 目录结构
| 路径 | 内容 |
|------|------|
| `_config.yml` | 站点设置、作者信息、SEO |
| `_pages/about.md` | 主页，引入下面的内容片段 |
| `_pages/includes/` | 内容区块：`intro` `news` `projects` `pub` `honors` `others` |
| `_data/navigation.yml` | 顶部导航菜单 |
| `_includes/`、`_layouts/`、`_sass/` | 主题机制（页头、侧栏、样式） |
| `assets/css/main.scss` | 自定义设计、主题与交互 |
| `playground/` | 独立的交互实验页面 |
| `images/`、`videos/` | 媒体资源 |
| `google_scholar_crawler/`、`github_myprofile_updater/` | GitHub Actions 辅助脚本 |

### 本地运行
```bash
bundle install          # 仅首次需要
bash run_server.sh      # → bundle exec jekyll liveserve
# 浏览器打开 http://127.0.0.1:4000
```

### 致谢
- 基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 模板，该模板衍生自 [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) 与 [Academic Pages](https://github.com/academicpages/academicpages.github.io)。
- 3D 实验使用 [Three.js](https://threejs.org/)；概念车采用 Three.js 官方 *Ferrari 458* 示例模型。

---

<p align="center"><sub>© Shiyue Zhao · Built with Jekyll &amp; Three.js</sub></p>
