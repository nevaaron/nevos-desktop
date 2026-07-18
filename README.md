# nevOS — Snow Leopard desktop in the browser

A Mac OS X Snow Leopard desktop built as a single-page app by [Aaron "Nev" McLachlan](https://aaronnev.com) — window manager, dock with parabolic magnification, iTunes player, Finder, and a pile of era-correct details. No frameworks, no build step: plain ES5 JavaScript, one CSS file, static HTML.

This is a shareable copy of the live site at [aaronnev.com](https://aaronnev.com). The serverless backends (AI chat, booking) have been removed, so those apps run in offline demo mode — everything visual works as-is. The music mp3s and a few third-party video clips are also not included (licensing) — the iTunes library renders, it just won't play.

## Running it

It's fully static — serve the folder with anything:

```
npx serve .
# or
python3 -m http.server 8000
```

## The dock / shelf magnification

Probably what you came for:

- **`desktop.js`** — search for `Dock Parabolic Magnification` (`setupDockMagnification()`). Tracks the cursor's x-position over the dock on `mousemove`, computes a cosine falloff per icon based on distance from the cursor, and applies `width`/`height` inline styles inside a `requestAnimationFrame` loop. `mouseleave` resets everything and hands transitions back to CSS.
- **`style.css`** — around `.dock-item` (~line 1015). The trick to the "magnetic" feel: `.dock-item` has a CSS transition for the graceful settle, and `.dock__items--magnifying .dock-item { transition: none; }` disables it while the cursor is over the dock so the JS-driven sizes track the mouse with zero lag.
- Dock bounce on app launch: `.dock-item--bouncing` keyframes in `style.css`, triggered in `desktop.js` when a window opens.

## Layout of the rest

- `desktop.js` — window manager and all core apps (one IIFE, ES5 `var` style throughout)
- `nevos.js` + `apps/*.js` — lightweight module system for newer apps (LimeWire, QuickTime, calendar, etc.)
- `style.css` — all styling
- `index.html` — desktop icons plus a hidden semantic-HTML layer for crawlers
- `assets/` — icons, wallpapers, sounds, music for the iTunes player

Feel free to borrow the desktop mechanics. Content (articles, images, music) belongs to its respective owners.
