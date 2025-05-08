# Project Memory

## File Structure (as of this change)

- package.json
- package-lock.json
- vite.config.js (sets Vite root to 'src')
- postcss.config.js
- tailwind.config.js (custom dark mode, orange-yellow gradient)
- README.md
- .gitattributes
- .gitignore
- .DS_Store
- node_modules/ (directory)
- src/
  - index.html (now features sidebar navigation, Home, Dashboard, and Settings pages, SPA logic, and inline SVG icons)
  - main.js
  - output.css
  - styles.css (custom dark mode, gradient, sidebar, nav-item, and main-content classes)
  - assets/
    - tauri.svg
    - tailwind.svg
    - javascript.svg
  - .DS_Store
- src-tauri/ (directory)
- .git/ (directory)

## Notable Changes
- Redesigned index.html to use a sidebar navigation with inline SVG icons (from svgrepo.com) for Home, Dashboard, and Settings.
- App now uses a single-page app (SPA) style: clicking sidebar nav switches visible panels/pages.
- Sidebar and main content area styled for a modern desktop app look.
- Example Home, Dashboard, and Settings pages provided as panels.
- styles.css updated with sidebar, nav-item, and main-content utility classes for layout and navigation highlighting. 