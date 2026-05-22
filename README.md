# Legal Work Platform — Floating Hero Section

A pixel-perfect recreation of the "Legal Work Platform" hero section built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Features

- **Split Layout** — Text content on the left with floating card elements on the right
- **Reusable FloatingCard Component** — Accepts `color`, `rotation`, `icon`, and `label` props with a `portal` variant for the John Doe message card
- **Smooth Entrance Animations** — Staggered fade-in and slide-up transitions powered by Framer Motion
- **Floating Motion** — Each card gently bobs up and down with unique timing offsets
- **Hover Effects** — Cards scale up and shift rotation on hover with a glow shadow
- **Background Blobs** — Soft, animated radial gradient blobs that drift slowly behind the content
- **Decorative Bars** — Subtle horizontal pill shapes scattered across the background matching the reference design
- **Responsive Layout** — Adapts gracefully from desktop to mobile viewports
- **Typography** — Plus Jakarta Sans from Google Fonts with proper heading hierarchy

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| TypeScript | Type safety |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the hero section.

## Project Structure

```
src/
├── app/
│   ├── globals.css             # Design tokens and base styles
│   ├── layout.tsx              # Root layout with font loading
│   └── page.tsx                # Home page
├── components/
│   ├── FloatingCard.tsx        # Reusable pill card (color, rotation, icon, variant)
│   ├── PortalCardContent.tsx   # John Doe portal card inner layout
│   ├── BackgroundBlobs.tsx     # Animated blobs and decorative bars
│   └── HeroSection.tsx         # Main hero section assembling all components
```
