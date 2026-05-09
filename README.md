# RYU — Portfolio

> **A futuristic, fully responsive personal portfolio** built with pure HTML, CSS & JavaScript.
> Glassmorphism UI · Animated canvas backgrounds · Dedicated project pages · Working contact form.

---

## Table of Contents

1. [Overview](#-overview)
2. [Folder Structure](#-folder-structure)
3. [Pages at a Glance](#-pages-at-a-glance)
4. [Project 01 — AkibaBot](#-project-01--akibabot)
5. [Project 02 — SetupProTest](#-project-02--setupprotest)
6. [Images Guide](#-images-guide)
7. [Contact Email Setup](#-contact-email-setup)
8. [Customising Colors](#-customising-colors)
9. [Adding More Projects](#-adding-more-projects)
10. [How to Run](#-how-to-run)
11. [Full Tech Stack](#-full-tech-stack)
12. [Changelog](#-changelog)

---

## 🌐 Overview

| | |
|---|---|
| **Author** | RYU |
| **Type** | Personal portfolio + project showcase |
| **Design** | Glassmorphism · Neon accents · Futuristic / Cyberpunk |
| **Colors** | Purple `#9b30ff` · Cyan `#00e5ff` · Red `#ff2d55` |
| **Fonts** | Orbitron · Rajdhani · Share Tech Mono · Space Grotesk · Zen Dots · JetBrains Mono |
| **Responsive** | Mobile · Tablet · Desktop (fluid at all screen sizes) |
| **Backgrounds** | Floating particles · Matrix rain · Perspective grid (one per page) |
| **Pages** | 4 total — Home · Contact · AkibaBot · SetupProTest |
| **Dependencies** | None — pure HTML / CSS / JS, no frameworks or build tools |

---

## 📁 Folder Structure

```
ryu-portfolio/
│
├── index.html                    ← Home page  (profile + project cards)
│
├── pages/
│   ├── contact.html              ← Contact form
│   ├── akibabot.html             ← Project 01 — AkibaBot
│   └── setupprotest.html         ← Project 02 — SetupProTest
│
├── css/
│   ├── global.css                ← CSS variables, reset, shared utilities
│   ├── header.css                ← Fixed glassmorphism navigation
│   ├── hero.css                  ← Home profile / hero section
│   ├── projects.css              ← Home project cards
│   ├── footer.css                ← Site footer (shared across all pages)
│   ├── contact.css               ← Contact form styles
│   ├── akibabot.css              ← AkibaBot page — cyberpunk anime aesthetic
│   └── setupprotest.css          ← SetupProTest page — dark tech aesthetic
│
├── js/
│   ├── particles.js              ← Floating particle canvas (runs on all pages)
│   ├── main.js                   ← Scroll effects · mobile nav · cursor glow · year
│   ├── contact.js                ← Form validation + mailto email sender
│   ├── akibabot.js               ← Matrix rain canvas + bot image fallback
│   └── setupprotest.js           ← Perspective grid canvas + scroll reveals
│
├── assets/
│   └── img/
│       ├── profile.jpg           ← ★  YOUR PROFILE PICTURE  (replace this)
│       ├── profile-fallback.svg  ←    Shown automatically if profile.jpg is missing
│       ├── akibabot.jpg          ← ★  AKIBABOT PICTURE  (replace this)
│       └── akibabot-fallback.svg ←    Illustrated robot fallback for AkibaBot
│
└── README.md
```

---

## 📄 Pages at a Glance

### `index.html` — Home
- Profile picture inside an animated spinning conic-gradient ring
- Name **RYU** with gradient text + glow bloom effect
- Hover-animated project cards linking to each project page
- Floating particle canvas background
- Fixed blurred header that gains a glass effect on scroll
- Cursor glow trail (desktop)

### `pages/contact.html` — Contact
- Name · Email · Message fields with animated neon focus borders
- Client-side validation (empty fields + email format check)
- On submit, opens the visitor's email client pre-filled with their message
- Loading spinner on the send button
- **→ Configure your email address in `js/contact.js`** (see [Contact Email Setup](#-contact-email-setup))

### `pages/akibabot.html` — AkibaBot
- Aesthetic: **Cyberpunk-Anime** · Neon pink + electric blue · Matrix rain
- Hexagonal bot avatar with your custom image auto-clipped inside
- Japanese decorative side text
- Animated terminal boot sequence (10 lines, staggered reveal)
- Stats bar: 33 commands · 3 categories · Python 3.14 · Prefix `+`
- 3 command category cards with all real commands listed
- Tech stack + KataBump hosting badge

### `pages/setupprotest.html` — SetupProTest
- Aesthetic: **Dark Tech / Hardware Lab** · Electric green + white · Perspective grid
- Animated SVG ring with embedded keyboard + cursor icons
- Stats bar: 5 testers · 0 installs · Real-Time · 3 controller types
- 6 tester cards (Keyboard · Mouse · Controller · Audio · Webcam · Settings)
- Each card shows its real source filenames from the repository
- Browser compatibility section
- GitHub source link

---

## 🤖 Project 01 — AkibaBot

| | |
|---|---|
| **Type** | Discord Bot |
| **Language** | Python 3.14 |
| **Library** | discord.py |
| **Data storage** | JavaScript |
| **Prefix** | `+` |
| **Slash commands** | 33 |
| **Hosted by** | KataBump |
| **Page** | `pages/akibabot.html` |

### Command Reference

**General** — available to all members

| Command | Description |
|---|---|
| `+avatar` | Display any user's avatar |
| `+banner` | Show a user's profile banner |
| `+profile` | View your server profile & stats |
| `+serverinfo` | Display server details & statistics |
| `+afk` | Set an AFK status with a custom message |
| `+ping` | Check the bot's response latency |
| `+rps` | Play Rock Paper Scissors vs the bot |
| `+tictactoe` | Challenge a member to Tic-Tac-Toe |

**Economy** — virtual currency system

| Command | Description |
|---|---|
| `+daily` | Claim your daily coin reward |
| `+slot` | Spin the slot machine |
| `+roulette` | Bet coins on roulette |
| `+bank` | Check wallet & bank balance |
| `+deposit` / `+withdraw` | Move coins between wallet and bank |
| `+shop` | Browse & buy items |
| `+inventory` | View, equip & unequip your items |
| `+give` | Transfer coins to another member |
| `+top` | Richest members leaderboard |

**Admin** — staff only

| Command | Description |
|---|---|
| `+ban` / `+unban` | Ban or unban a member |
| `+mute` / `+unmute` | Silence or restore a member |
| `+createrole` | Create a new role |
| `+addrole` | Assign a role to a member |
| `+removerole` | Remove a role from a member |
| `+giveaway start` | Launch a timed giveaway |
| `+giveaway end` | End a giveaway early |
| `+giveaway reroll` | Pick a new winner |

---

## 🖥️ Project 02 — SetupProTest

| | |
|---|---|
| **Type** | Web Application |
| **Stack** | HTML5 · CSS3 · JavaScript |
| **APIs** | Gamepad API · Media API (WebRTC) |
| **Repository** | [github.com/Andrei078/SetupProTest](https://github.com/Andrei078/SetupProTest) |
| **Page** | `pages/setupprotest.html` |

### Tester Modules

| # | Module | Key Features | Files |
|---|---|---|---|
| 01 | **Keyboard** | Live key visualisation · Latency (ms) · Stuck key detection | `Keyboard.html` / `Keyboard.js` |
| 02 | **Mouse** | Cursor tracking canvas · Click response · Scroll precision · Jitter detect | `Mouse.html` / `Mouse.js` |
| 03 | **Controller** | Xbox / PS4 / PS5 · Stick drift · Trigger pressure · Rumble test | `Controller.html` / `Controller.js` |
| 04 | **Audio** | L/R channel isolation · Test tone · Mic monitoring · Level visualiser | `audio.html` / `audio.js` |
| 05 | **Webcam** | Live preview · Resolution & FPS · No plugins · Multi-camera | `Webcam.html` / `Webcam.js` |
| 06 | **Settings** | Device selection · Sensitivity · Visual toggles · Latency options | `Setting.html` / `Setting.js` |

### Browser Compatibility

| Browser | Support |
|---|---|
| Chrome | ✅ Full |
| Edge | ✅ Full |
| Brave | ⚠️ Disable Shields + click page before use + run on localhost |
| Firefox | ⚠️ Limited Gamepad API support |

---

## 🖼️ Images Guide

### Profile Picture

**File path:** `assets/img/profile.jpg`

1. Add your photo to `assets/img/`
2. Name it `profile.jpg` — `.png` and `.webp` also work
3. If you use a different filename, update `index.html`:
   ```html
   <img src="assets/img/YOUR-FILENAME.jpg" alt="RYU profile picture" class="profile-img" ... />
   ```
> ✨ If the file is missing, `profile-fallback.svg` displays automatically — nothing will break.

---

### AkibaBot Picture

**File path:** `assets/img/akibabot.jpg`

1. Add the bot's image to `assets/img/`
2. Name it `akibabot.jpg` — `.png` and `.webp` also work
3. The image is **automatically clipped into the hexagon shape** via SVG `clip-path` — any square or portrait image works great
4. If you use a different filename, update `pages/akibabot.html`:
   ```html
   <image href="../assets/img/YOUR-FILENAME.jpg" ... />
   ```
> ✨ If the file is missing, `akibabot-fallback.svg` (an illustrated robot) displays automatically.

---

## 📧 Contact Email Setup

Open **`js/contact.js`** and update line 10:

```js
// ↓ Replace with your real email address
const RECIPIENT_EMAIL = "your@email.com";
```

When a visitor fills out the form and clicks Send, their default email client opens pre-filled with:
- **Subject:** `Portfolio Contact from [their name]`
- **Body:** Their name, email address, and message

**Want a fully serverless solution (no email popup)?**

| Service | Notes |
|---|---|
| [EmailJS](https://www.emailjs.com/) | Sends directly from the browser · Free tier available |
| [Formspree](https://formspree.io/) | Simple POST endpoint · No backend needed |

---

## 🎨 Customising Colors

Each page has its own isolated color tokens so you can change them independently.

### Global (Home · Contact · Header · Footer)
**File:** `css/global.css` → `:root`

```css
--purple:       #9b30ff;   /* Main accent */
--cyan:         #00e5ff;   /* Secondary accent */
--red:          #ff2d55;   /* Tertiary accent */
```

### AkibaBot Page
**File:** `css/akibabot.css` → `.akiba-page`

```css
--ak-pink:      #ff2d78;   /* Hero · buttons · pings */
--ak-blue:      #00d4ff;   /* Terminal · tech tags */
--ak-purple:    #7b2fff;   /* Card accents */
```

### SetupProTest Page
**File:** `css/setupprotest.css` → `.spt-page`

```css
--spt-green:    #00ff88;   /* Primary accent · stats · checkmarks */
--spt-cyan:     #00ccff;   /* Mouse card · grid horizon */
--spt-purple:   #9b5cff;   /* Controller card */
--spt-orange:   #ff8c42;   /* Audio card */
--spt-blue:     #4488ff;   /* Webcam card */
```

---

## ✏️ Adding More Projects

### Step 1 — Add a card on the Home page

In `index.html`, duplicate an existing `<article class="project-card">` block:

```html
<article class="project-card" id="project-3">
  <div class="card-glow"></div>
  <div class="card-header">
    <span class="card-tag">Project 03</span>
    <div class="card-dots"><span></span><span></span><span></span></div>
  </div>
  <div class="card-body">
    <h3 class="card-title">Your Project Name</h3>
    <p class="card-desc">A short description of your project.</p>
    <div class="card-tech">
      <span class="tech-tag">React</span>
      <span class="tech-tag">Node.js</span>
    </div>
  </div>
  <div class="card-footer">
    <a href="pages/your-project.html" class="btn-glass btn-purple">View Project</a>
    <a href="https://github.com/you/repo" class="btn-glass btn-cyan" target="_blank">Source</a>
  </div>
</article>
```

### Step 2 — Create the project page

Use either `pages/akibabot.html` (anime/bot aesthetic) or `pages/setupprotest.html` (tech/tool aesthetic) as a starting template:

1. Copy the file and rename it (e.g. `pages/myproject.html`)
2. Update the `<title>` tag and all content
3. Create `css/myproject.css` for the page's unique styles
4. Create `js/myproject.js` if the page needs a custom background or animations
5. Update the `<link>` and `<script>` tags in the new page to point to your new files

---

## 🚀 How to Run

No build tools, no dependencies, no installs required.

**Simplest — open directly:**
```
Double-click index.html in your file manager
```

**Recommended — local server** (required for full Webcam / Audio / Gamepad API support):

```bash
# Python 3 (built-in)
python -m http.server 8080

# Node.js via npx (no install needed)
npx serve .

# Live-server with auto-reload
npx live-server
```

Then open `http://localhost:8080` in your browser.

> ⚠️ Some browser APIs (webcam, microphone, gamepad) only work over `localhost` or `https://` — not from a `file://` path.

---

## 🛠️ Full Tech Stack

| Layer | Details |
|---|---|
| **Markup** | HTML5 (semantic elements, SVG icons, inline SVG animations) |
| **Styles** | CSS3 — custom properties · grid · flexbox · keyframe animations · backdrop-filter |
| **Scripts** | Vanilla JavaScript ES6+ — no frameworks |
| **Fonts** | Google Fonts: Orbitron · Rajdhani · Share Tech Mono · Space Grotesk · Space Mono · Zen Dots · Noto Sans JP · JetBrains Mono |
| **Canvas** | Particles (all pages) · Matrix rain (AkibaBot) · Perspective grid (SetupProTest) |
| **Animations** | CSS keyframes · IntersectionObserver scroll reveals · requestAnimationFrame loops |
| **Contact** | Client-side validation + mailto URI |
| **Hosting** | Static files — compatible with GitHub Pages, Netlify, Vercel, or any web server |

---

## 📋 Changelog

### v1.2.0
- Added **SetupProTest** project page (`pages/setupprotest.html`)
  - Dark tech aesthetic with animated perspective grid background
  - 6 tester module cards with real feature lists and source filenames
  - Browser compatibility table based on official repo README
  - Stats bar and full tech stack section
- Added `css/setupprotest.css` and `js/setupprotest.js`
- Updated home page Project Card 2 with SetupProTest details and links

### v1.1.0
- Added **AkibaBot** project page (`pages/akibabot.html`)
  - Cyberpunk-anime aesthetic with matrix rain background
  - Hexagonal SVG bot avatar with real image support + fallback
  - Terminal boot animation, command tables, stats bar
- Added `css/akibabot.css` and `js/akibabot.js`
- Added `assets/img/akibabot.jpg` slot + `akibabot-fallback.svg`
- Updated AkibaBot page with real commands (33 total), Python 3.14, prefix `+`, KataBump hosting, JavaScript data store
- Removed "View Source" button from AkibaBot page
- Updated home page Project Card 1 with AkibaBot details and links

### v1.0.0
- Initial release
- Home page with profile picture, name RYU, tagline, badges, 2 project cards
- Contact page with glassmorphism form and mailto integration
- Shared header, footer, particle canvas, mobile navigation
- Global CSS variable system (purple · cyan · red)

---

*Portfolio by **RYU** — continuously evolving 🚀*
