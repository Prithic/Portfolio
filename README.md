# Prithic Portfolio (Version 1)

This branch contains the **standalone HTML version** of my portfolio. It's an interactive dashboard featuring a futuristic, sci-fi aesthetic with terminal-style boot screens, neural core scans, and systemic health indicators.

## 🛠️ Detailed Technical Analysis

### 1. Architectural Philosophy
The portfolio is built as a **standalone, zero-dependency unit**. At 35KB, it encapsulates the entire User Interface (UI), User Experience (UX), and Logic within a single `prithic_portfolio.html` file.
- **Portability**: No `npm install` or build steps required.
- **Speed**: Instant-on loading with optimized CSS-based animations.

### 2. Design System & Aesthetics
- **Typography**: A tactical combination of `Orbitron` (HUD headers), `Share Tech Mono` (Terminal output), and `Rajdhani` (Body text).
- **Color Palette**: 
  - `Cyan (#00f5ff)` for primary system signals.
  - `Deep Blue (#020810)` for atmospheric depth.
  - `Amber (#ffb300)` and `Red (#ff2d55)` for priority status alerts.
- **HUD Elements**: Integrated scanlines (`repeating-linear-gradient`), pulsing hero rings, and a custom radial glow cursor.

### 3. Core System Modules
- **Boot Sequence (`#boot`)**: A 4-second simulated BIOS initialization that sequences terminal lines using staggered `animation-delay`.
- **Body System Scan (`#systems`)**: A metaphorical breakdown of personal attributes:
  - **Brain**: Neural Processing Unit (94% Cognitive Load).
  - **Heart**: Motivational Power Core (Focus: Family & Lineage).
  - **Spine**: Structural Backbone (Calisthenics Reinforced).
- **Skill Matrix (`#skills`)**: A grid-based module using `clip-path` for hexagonal/technical borders, tracking development status across key domains (Python, Java, AI/ML).
- **Active Directives (`#objectives`)**: A mission-critical checklist prioritized from Alpha to Zeta, mapping out a long-range trajectory toward the "Neo Humanoid" project (2040+).

### 4. Interactive Logic (Vanilla JS)
- **Intersection Observer**: Triggers the `reveal` class on scroll, ensuring a seamless, high-performance entrance for each system section.
- **Dynamic Fills**: JavaScript monitors the visibility of "Organ Cards" to animate system health bars only when they enter the viewport.
- **Custom Cursor**: A fixed-position listener tracks mouse coordinates to translate a 300px radial gradient glow behind the content.

## 🚀 Usage

Open `prithic_portfolio.html` directly in any modern browser.

---

*Note: This version captures the "Vibe-coded" HUD aesthetic, prioritizing an immersive, cinematic experience that tells a story of ambition and technical obsession.*
