# Interactive Resume Template

An open-source interactive resume template. Clone it, fill in your info, deploy it.

Built with React, TypeScript, Tailwind CSS, and Framer Motion.

**[▶ Live Demo](https://clementbouly.github.io/interactive-resume-template/)**

## Features

- **One config file** — Edit a single TypeScript file with your info
- **Multi-language** — Built-in i18n support (add as many languages as you need)
- **Dark / Light mode** — Auto-detects time of day, with manual toggle
- **2 color presets** — minimal, warm (or fully custom)
- **Responsive** — Mobile-first, works on all screen sizes
- **Expandable experiences** — Click to expand details (inline on desktop, modal on mobile)
- **Projects section** — Optional portfolio showcase
- **PDF download** — Optional downloadable resume
- **3D photo flip** — Click the photo for a fun easter egg
- **Accessible** — Keyboard navigation, focus trapping, ARIA labels

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/clementbouly/interactive-resume-template.git
cd interactive-resume-template
npm install
```

### 2. Add your info

Edit `src/data/resume-config.ts` with your personal information. See [Customization Guide](./docs/CUSTOMIZATION.md) for details.

Add your photo to `public/images/photo.jpg`.

### 3. Preview locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 4. Deploy

```bash
npm run build
```

The `dist/` folder contains your static site. Deploy it anywhere. See [Deployment Guide](./docs/DEPLOYMENT.md) for step-by-step instructions.

## Color Presets

| Preset | Style |
|--------|-------|
| `minimal` | Black and white with subtle accent (default) |
| `warm` | Wood and earth tones |

Set your preset in the config:

```typescript
theme: {
  preset: 'warm',
}
```

## Tech Stack

- [Vite](https://vite.dev/) — Fast build tool
- [React 19](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animations

## Project Structure

```
src/
├── data/
│   ├── resume-config.ts          # YOUR CONFIG FILE (edit this!)
│   ├── resume-config.example.ts  # Example with comments
│   ├── types.ts                  # TypeScript types
│   └── presets.ts                # Color presets
├── components/
│   └── Resume/                   # All resume components
├── lib/
│   ├── i18n/                     # Language system
│   ├── theme/                    # Dark/light mode
│   └── hooks/                    # Custom hooks
└── App.tsx                       # Entry point
```

## Development with AI agents

This project includes [Agentation](https://agentation.com) — a visual feedback toolbar for AI coding agents. When running in development mode (`npm run dev`), a small toolbar appears at the bottom-right of the page.

It lets you click on any element, select text, or annotate parts of your resume, then copy a structured description to your clipboard. Paste it directly into your AI agent's chat to give it precise context about what you want changed.

Agentation is **only active in development** and is automatically stripped from production builds.

> See the [Agentation documentation](https://agentation.com) for more details.

## Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

## License

MIT
