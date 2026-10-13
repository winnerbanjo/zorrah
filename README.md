# Zorrah Restaurant & Lounge — Digital Menu

A mobile-first, high-speed digital menu website for **Zorrah Restaurant and Lounge**, optimized for instant loading via QR code scans.

## Features

- **Mobile-First & Ultra Fast**: Pre-rendered static HTML with instant load times and 0ms database overhead.
- **Brand Authentic**: Visual design reflecting Zorrah's physical luxury menu palette:
  - Cream Background (`#F8F3EA`)
  - Zorrah Red (`#B5121B`)
  - Muted Gold (`#B58B45`)
  - Secondary Cream (`#EFE5D6`)
  - Primary Black (`#111111`) & Charcoal Text (`#191919`)
- **Proper Restaurant Menu Typography & Layout**:
  - Dotted leader lines connecting item names and prices (`Item Name ......... ₦Price`)
  - CSS grid ensuring long item names wrap cleanly on small screens (down to 320px) without pushing prices off-screen
  - Deep red category headings with gold divider accents
  - 1-column layout on mobile, 2-column layout on desktop
- **Sticky Navigation & Jump-to Chips**:
  - 3 main sticky section tabs: `FOOD`, `AFRO FUSION & SPECIALS`, `DRINKS`
  - Selected tab: deep red with white text
  - Horizontal sub-category quick-jump chips (`Rice`, `Pasta`, `Pepper Soups`, `Wine`, `Cocktail`, etc.)
  - Native `scroll-margin-top` ensuring headings are never obscured by sticky bars
- **Instant Client-Side Search**:
  - Filter dishes by keyword instantly (e.g. `chicken`, `rice`, `Hennessy`)
  - Shows result counts and instant reset button
- **Zero Distractions**: No cart, no login, no checkout, no tracking bloat.

---

## Project Structure

```text
├── app/
│   ├── layout.tsx         # OpenGraph metadata, SEO tags, viewport & font setup
│   ├── globals.css        # Tailwind theme colors, serif/sans fonts, scroll styles
│   ├── page.tsx           # Root route rendering the menu
│   └── menu/
│       └── page.tsx       # /menu dedicated route
├── components/
│   ├── Header.tsx         # Zorrah logo, restaurant title & subtitle
│   ├── StickyNav.tsx      # Sticky section tabs & category jump chips
│   ├── SearchBar.tsx      # Fast client-side menu search filter
│   ├── MenuSectionView.tsx# Responsive 2-column desktop / 1-column mobile section
│   ├── CategoryBlock.tsx  # Category title & item list
│   ├── MenuItemRow.tsx    # Dotted leader line grid item row
│   ├── Footer.tsx         # Centered footer with disclaimer
│   ├── BackToTop.tsx      # Discreet floating jump-to-top button
│   └── MenuPage.tsx       # Root orchestrator component
├── data/
│   └── menu.ts            # Centralized TypeScript menu dataset (177 items)
└── public/
    ├── zorrah-logo.png    # Supplied brand logo asset
    └── zorrah-logo.svg    # High-resolution vector source
```

---

## Menu Data (`/data/menu.ts`)

All menu items, categories, and prices are stored in [`data/menu.ts`](./data/menu.ts).

To update an item or price:
```typescript
{ id: "jollof-rice", name: "Jollof Rice", price: 6450 }
```

Prices are automatically formatted with Naira symbols and thousand separators (`₦6,450`).

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit [http://localhost:3000/menu](http://localhost:3000/menu).

---

## Production Build & Vercel Deployment

```bash
# Build static production bundle
npm run build

# Start production server
npm start
```

### Deploy to Vercel

This project is configured for one-click deployment to Vercel:
1. Push repository to GitHub/GitLab.
2. Import project into Vercel.
3. Framework Preset: **Next.js** (default).
4. Deploy!
