# Zayed Sustainability Prize — React + Vite

A pixel-faithful reproduction of the Zayed Sustainability Prize article page with:

- 🌐 **EN / தமிழ் language toggle** (navbar stays in English)
- 📅 **Year filter** pills: 2023 · 2024 · 2025 · 2026 · Upcoming
- 📰 Article content on the **left**, empty right column preserved
- Color palette matching the provided CSS variables (`#1a3a5c`, `#9a3b34`, `#e85a4f`, etc.)
- **Playfair Display** (headlines) + **DM Sans** (body) typography
- Sticky navbar, golden scrollbar, animated article fade-in
- Fully responsive footer

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project structure

```
zayed-prize/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── LangContext.jsx      # EN / Tamil translations + state
    ├── components/
    │   ├── Navbar.jsx           # Sticky nav with lang toggle
    │   ├── YearFilter.jsx       # Year pills (2023–Upcoming)
    │   └── Footer.jsx           # Dark footer grid
    └── pages/
        └── ArticlePage.jsx      # Main article layout
```
