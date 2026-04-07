# Chitti Speed Portfolio: Unit Profile v2

A high-performance, cinematic personal portfolio inspired by the robotic self-introduction style. This repository contains the `v2` development branch, optimized for speed and futuristic aesthetics.

## 🤖 System Overview

The **Chitti Speed Portfolio** is designed as a "Boot Sequence" for a professional developer's identity. It frames a student profile as an advanced AI/ML system introduction, moving away from traditional static resumes towards a dynamic, HUD-style interface.

### 🏗️ Technical Architecture

This project is a masterclass in **Modern Vanilla Web Development**, prioritizing performance and maintainability without the overhead of heavy frameworks.

-   **Core**: Semantic HTML5 with ARIA accessibility standards.
-   **Styling**: Pure CSS with:
    -   **Fluid Typography**: Uses `clamp()` to scale text perfectly across all device sizes.
    -   **Dynamic Theming**: Implements a `data-theme` system with `color-mix()` for harmonized color palettes.
    -   **Layout**: A combination of CSS Grid (Level 2) and Flexbox for a robust 2D/1D layout control.
-   **Interactivity**: Lightweight Vanilla JavaScript utilizing the **Intersection Observer API** for performant scroll-triggered animations.

## 📊 Analysis & Performance

### 1. Minimalist Footprint
By consolidating the portfolio into a single-file architecture (`index.html`), the project achieves:
-   **Zero Build Overhead**: No `npm install`, no `vite build`, no dependencies.
-   **Instant LCP**: The Largest Contentful Paint is optimized as all critical CSS and assets are loaded with the initial document.

### 2. Design Philosophy
The UI follows a **Glassmorphism/Cyberpunk Hybrid** aesthetic:
-   **Typography**: `Orbitron` for headers (high-tech feel) and `Inter` for body (high readability).
-   **Color Palette**: Primarily #071218 (Dark Surface) with #41e0f0 (Electric Cyan) highlights.
-   **Micro-interactions**: Scanline overlays and radial gradients that react to the scroll position, giving the site a "living" HUD feel.

### 3. Responsive Engineering
The system uses a custom `container` class and CSS Grid to ensure that even complex layouts (like the 3-column Identity Grid) collapse gracefully for mobile units.

---

## 🚀 Deployment

To deploy this unit profile, simply serve the root directory.
-   **Status**: Active
-   **Branch**: `v2`
-   **Memory**: Ambition
-   **Speed**: Limitless
