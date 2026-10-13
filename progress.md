# ProVision Store

A lightweight, fast e-commerce web app built using plain Vanilla JavaScript, HTML5, and CSS3 with a Cyber-Midnight dark theme.

## What's Built

- **Product Catalog:** Loads 100 items from `product.json` and saves them to `localStorage` on first load.
- **Search & Filters:** Real-time search bar, category dropdown, and price sorting (high/low) that all work together.
- **Admin Panel:** Form to add new products to `localStorage` using `FormData` and `Object.fromEntries`.
- **Responsive Layout:** Clean CSS layout with media queries that looks good on mobile and desktop.
- **Modular JavaScript:** Organized into ES modules (`api.js`, `render.js`, `filter.js`, `add.js`, `app.js`).

## File Structure

- `index.html` — Landing page
- `store.html` — Product store with search and filters
- `admin.html` — Form to add new products
- `about.html` — About page
- `css/style.css` — Dark theme and media queries
- `data/product.json` — Initial dataset of 100 products
- `js/api.js` — Handles fetching data and syncing with LocalStorage
- `js/render.js` — Creates HTML cards and category options
- `js/filter.js` — Pure function for searching, filtering, and sorting
- `js/add.js` — Handles admin form logic
- `js/app.js` — Main script that connects DOM events to functions