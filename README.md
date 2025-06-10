```markdown
# Azubi E-commerce

A modern e-commerce web application built with React, TypeScript, Vite, and Mantine UI. This project features a product catalog, product detail pages, a shopping cart with localStorage persistence, and a checkout flow.

## Features

⚡️ Vite for fast development and build  
⚛️ React 19 with functional components and hooks  
🛒 Shopping Cart with add/update/remove, persisted in localStorage  
🗂 Product Catalog and detail pages with dynamic routing  
🎨 Mantine UI for beautiful, responsive components  
🛠 TypeScript for type safety  
🧭 React Router v7 for client-side routing  
📦 Component-based architecture (atoms, molecules, organisms, templates)  

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
```bash
git clone (https://github.com/bismark66/azubi-ecommerce.git)
cd azubi-ecommerce
npm install
```

### Development
```bash
npm run dev
```
Visit http://localhost:5173 to view the app.

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
├── pages/
├── routes/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## Routing

- `/` — Home page
- `/headphones` — Headphones category
- `/speakers` — Speakers category
- `/earphones` — Earphones category
- `/products/:productId` — Product detail page
- `/checkout` — Checkout page

## Cart Persistence

The shopping cart is stored in the browser's localStorage and is loaded automatically on page refresh. Cart operations (add, update, remove) are reflected in the UI and persisted.

## Customization

- **Theme**: Customize via `theme.ts` using Mantine's theming system
- **Components**: Modular and reusable following atomic design

## Credits

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Mantine UI](https://mantine.dev)
- [React Router](https://reactrouter.com)

## License

MIT License
```
