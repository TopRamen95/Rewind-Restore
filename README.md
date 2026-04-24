# Rewind & Restore

> **Preserve Your Memories** — a professional analog-media digitization service.

Rewind & Restore is a static marketing and order-intake website for a startup that converts old analog media (VHS tapes, MiniDV, DVDs, 8mm/Super 8 film, audio cassettes, vinyl records) into modern digital files.

## Tech Stack

| Technology | Version |
|---|---|
| React | 18 |
| Vite | 6 |
| Tailwind CSS | 3 |
| React Router | 6 |
| react-icons | 5 |

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, how it works, testimonials, CTA |
| `/services` | Detailed service cards with turnaround times |
| `/pricing` | Three pricing tiers (Basic, Standard, Premium) |
| `/order` | Order/quote request form |
| `/about` | Company story, mission, values, team |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx    # Shared Navbar + Footer wrapper
│   ├── Navbar.jsx    # Responsive navigation
│   └── Footer.jsx    # Footer with links and social icons
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── Order.jsx
│   └── About.jsx
├── App.jsx           # Router setup
├── main.jsx          # React entry point
└── index.css         # Tailwind directives
```

## Color Scheme

- **Primary:** Amber `#F59E0B`
- **Secondary / Dark:** Slate `#1E293B`
- **Background:** White
