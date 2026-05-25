# state3156

Recruitment and information site for State 3156 — Whiteout Survival, Group 14.

Live at: **[gaurav7792.github.io/state3156](https://gaurav7792.github.io/state3156/)**

---

## What this is

A static HTML site for recruiting players into State 3156. No framework, no build step, no dependencies. Every page is a single `.html` file.

---

## Structure

```
state3156/
├── index.html          Homepage — state pitch, SvS record, KPIs, quick links
├── grip/
│   └── index.html      GRIP governance framework — inter-alliance rules
├── story/
│   └── index.html      APR '26 postmortem — the one we lost
├── tools/
│   └── index.html      SvS Scheduler + tools (in progress)
├── alliances/
│   └── index.html      Alliance directory (in progress)
├── transfers/
│   └── index.html      Transfer mechanics explainer (in progress)
└── operations/
    └── index.html      Voice ops / DCVC coordination (in progress)
```

---

## Pages

| Page | Status | Notes |
|---|---|---|
| `/` | ✅ Live | Homepage |
| `/grip` | ✅ Live | Full GRIP v1.0 content |
| `/story` | ✅ Live | APR '26 postmortem |
| `/tools` | 🔲 Stub | Link to SvS Scheduler pending |
| `/alliances` | 🔲 Stub | Waiting on R5 pitches |
| `/transfers` | 🔲 Stub | Transfer mechanics content pending |
| `/operations` | 🔲 Stub | DCVC system write-up pending |

---

## Deploying

This is a GitHub Pages site. Push to `main` and it deploys automatically.

```bash
git add .
git commit -m "your message"
git push
```

Pages deploys to `gaurav7792.github.io/state3156/` within ~2 minutes.

---

## Updating SvS data

SvS history lives in `index.html` inside the `<!-- SvS history -->` comment block. Each cycle is one `.row` div:

```html
<div class="row">
  <span class="cycle-label">JUN '26</span>
  <span class="phase"><span class="dot w"></span></span>  <!-- w = win, l = loss -->
  <span class="phase"><span class="dot w"></span></span>
  <span class="score">5.4B</span>
</div>
```

- Add new cycles at the **top** of the list (newest first)
- Move the `newest` class to the most recent row
- Update the summary totals in `.side-header .summary`
- Update the banner spot count when transfers open/close

---

## Updating transfer status

Three places to update each transfer window:

1. **Banner** — `<span class="text">` near the top of `index.html`
2. **KPI tile** — the `Transfers` tile value and sub-line
3. **RECRUITING pill** — change text if window closes (`NOT RECRUITING`, remove pulsing dot)

---

## Design system

| Token | Value | Used for |
|---|---|---|
| `--purple` | `#a855f7` | Brand identity (logo, state name, icons) |
| `--green` | `#34d399` | Status / operational health (pill, CTA, wins) |
| `--red` | `#f87171` | Losses, warnings |
| `--bg` | `#0b0f15` | Page background |
| `--ink` | `#e6e9ef` | Primary text |

Fonts: `Inter` (body, headings) + `JetBrains Mono` (data, labels, UI chrome) via Google Fonts.

---

## Discord

State Discord: **discord.gg/u423WPcS**

---

## Tools referenced

- SvS Prep Scheduler: [gaurav7792.github.io/svs_scheduler](https://gaurav7792.github.io/svs_scheduler)

---

*State 3156 · Whiteout Survival · Group 14*
