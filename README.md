# Appointment App

A mobile-style web app for discovering local businesses, booking appointments, and viewing simulated reminder notifications. The UI is based on a [Figma design](https://www.figma.com/design/ofv7pHZX6FAAyMJxeDNVFH/Appointment-Reminder-App).


## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Radix UI](https://www.radix-ui.com/) and [MUI](https://mui.com/) components

Data in the UI is **mock / in-memory** (no backend or database in this repo).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; includes `npm`)

## Run on your PC

```bash
git clone https://github.com/Bart-Iz/Appointmentreminderapp.git
cd Appointmentreminderapp
npm install
npm run dev
```

Open the URL Vite prints (usually **http://localhost:5173**) in your desktop browser.

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Production build -> output in `dist/` |

`react` and `react-dom` are regular dependencies so `npm install` works without extra peer setup.

## Deployment (GitHub Pages)

Deployment is automated with GitHub Actions on push to `main` and with manual workflow trigger.

- Workflow file: `.github/workflows/deploy.yml`
- Build output: `dist/`
- GitHub Pages source: **GitHub Actions**

Repository settings required:

1. Go to **Settings -> Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

Live URL:

- [https://bart-iz.github.io/Appointmentreminderapp/](https://bart-iz.github.io/Appointmentreminderapp/)

## Project layout

- `src/app/App.tsx` - main shell, tabs, reminder simulation
- `src/app/components/` - screens (`Home`, `Businesses`, `BookingFlow`, `History`, `Profile`, ...)
- `src/app/components/ui/` - shared UI primitives

## License

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for third-party notices.


