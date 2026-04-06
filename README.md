# Appointment Reminder App

A mobile-style web app for discovering local businesses, booking appointments, and viewing simulated reminder notifications. The UI is based on a [Figma design](https://www.figma.com/design/ofv7pHZX6FAAyMJxeDNVFH/Appointment-Reminder-App).

**Repository:** [github.com/Bart-Iz/Appointmentreminderapp](https://github.com/Bart-Iz/Appointmentreminderapp)

## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Radix UI](https://www.radix-ui.com/) and [MUI](https://mui.com/) components

Data in the UI is **mock / in-memory** (no backend or database in this repo).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; includes `npm`)

## Getting started

```bash
git clone https://github.com/Bart-Iz/Appointmentreminderapp.git
cd Appointmentreminderapp
npm install
```

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start dev server (listens on LAN; see Vite URLs) |
| `npm run dev:host`| Same as `vite --host` (explicit host binding)    |
| `npm run build`   | Production build output in `dist/`               |

The dev server is configured with `server.host: true` so your machine’s **network** URL (e.g. `http://192.168.x.x:5173`) is shown in the terminal.

## Open on your phone (QR code)

When you run `npm run dev`, a **QR code is printed in the terminal** ([vite-plugin-qrcode](https://github.com/svitejs/vite-plugin-qrcode)). Scan it to open the app in your phone’s browser.

Requirements:

- Phone and computer on the **same Wi‑Fi**
- If the page does not load, allow **Node.js** through **Windows Firewall** (or your OS firewall) for private networks

The QR code opens a **URL**, not a store install. To add a shortcut on the home screen, use **Add to Home screen** in the mobile browser. A full installable PWA would need HTTPS hosting and a web app manifest.

## Project layout

- `src/app/App.tsx` — main shell, tabs, reminder simulation
- `src/app/components/` — screens (`Home`, `Businesses`, `BookingFlow`, `History`, `Profile`, …)
- `src/app/components/ui/` — shared UI primitives

## License

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for third-party notices.
