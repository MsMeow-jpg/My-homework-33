# Resident Evil Database Web Project

## Description
This is a Resident Evil-themed web project designed to showcase skills in Gulp and modern web technologies.

The project features a page with information about Umbrella Corporation, Raccoon City, and Survival Tips, designed in a dark aesthetic with red accents.

Key Features:
- Dark Resident Evil-style atmosphere.
- Red accents, shadows, and text animation.
- Custom font for authentic design.
- Responsive layout with three columns of information.
- Background music "resident_evil_4.mp3" for immersive gameplay.
- CSS integration and optimization via Gulp: SCSS compilation, auto-prefixing, minification, and automatic page refresh upon changes.

---
```
## Project Structure

Homework 33/
├── src/
│   ├── audio/        # Background music
│   │   └── resident_evil_4.mp3
│   ├── css/          # Compiled CSS (Gulp output)
│   │   └── style.css
│   ├── fonts/        # Project fonts
│   │   └── Fonts1.ttf
│   ├── image/        # Images (Umbrella logo)
│   │   └── Umbrella.png
│   ├── scss/         # SCSS source files
│   │   └── style.scss
│   └── index.html    # Home page
├── gulpfile.js       # Gulp tasks configuration
├── package-lock.json # Exact dependency versions lock
├── package.json      # Project dependencies
└── README.md         # Project documentation
```
---

## Technologies

- **HTML5 / CSS3 / SCSS** – page structure and design.

- **Gulp** – build automation:

- SCSS to CSS compilation
- adding vendor prefixes (autoprefixer)
- CSS minification (cleanCSS)
- automatic page refresh (browser-sync)
- **JavaScript** – minimal use for interactive elements (if added in the future).
- **Audio** – background music via `<audio autoplay loop>`.

---

## Installation and Run

1. Clone the repository or copy the project to your local computer.

2. Install dependencies:

```bash
npm install
```

3. Run a local server with auto-updates:

```bash
gulp
```
4. Open a browser and go to:
http://localhost:3000

Design Features:

● Dark aesthetic with red accents and shadows.

● Signature Umbrella logo on both sides of the title.

● Header animation with a shimmering effect.

● Responsive columns that display correctly on different screen resolutions.

● Background music creates a Resident Evil atmosphere.

Author:

Snizhana – development, design, SCSS, Gulp configuration.


License:

This project is created for educational purposes.