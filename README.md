# state3156

Recruitment and information site for State 3156 — Whiteout Survival, Group 14.

Live at: **[state3156.com](https://state3156.com)** (also serves `www.state3156.com`)

---

## What this is

A static HTML site for recruiting players into State 3156. No framework, no build step, no dependencies. Every page is a single `.html` file. Live alliance data is pulled client-side from Google Sheets.

---

## Structure

```
state3156/
├── index.html              Homepage — state pitch, SvS record, KPIs, quick links
├── config.js               Central config — power ranks, Sheet URLs, transfer status
├── _shared.css             Currently unused (pages use inline <style>)
├── .nojekyll               Disables Jekyll so all files (incl. _ prefixed) serve as-is
├── CNAME                   Custom-domain pin — managed by GitHub Pages, do not delete
├── admin/
│   └── create-form.gs      Apps Script — generates the R5 data-submission form
├── grip/
│   └── index.html          GRIP governance framework — inter-alliance rules
├── story/
│   └── index.html          APR '26 postmortem — the one we lost
├── tools/
│   └── index.html          SvS Scheduler + tools
├── transfers/
│   └── index.html          Transfer mechanics explainer
├── operations/
│   └── index.html          Voice ops / DCVC coordination
└── alliances/
    ├── index.html          Alliance directory — ranked by power
    ├── TEMPLATE.html        Copy-paste starting point for a new alliance page
    ├── vks/index.html
    ├── wld/index.html
    ├── phx/index.html
    ├── evl/index.html
    ├── hwz/index.html
    └── mad/index.html
```

---

## Pages

| Page | Status | Notes |
|---|---|---|
| `/` | ✅ Live | Homepage |
| `/grip` | ✅ Live | Full GRIP v1.0 content |
| `/story` | ✅ Live | APR '26 postmortem |
| `/transfers` | ✅ Live | Transfer mechanics explainer |
| `/operations` | ✅ Live | Voice ops / DCVC write-up |
| `/alliances` | ✅ Live | Directory + six alliance sub-pages (VKS, WLD, PHX, EVL, HWZ, MAD) |
| `/tools` | 🔲 Partial | SvS Scheduler link present; rest still "coming soon" |

---

## Hosting & domain

GitHub Pages, served at the apex domain `state3156.com`.

**DNS (at registrar — Namecheap):**

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `gaurav7792.github.io` |

Custom domain is set in **Settings → Pages → Custom domain**, which manages the `CNAME` file. **Enforce HTTPS** is on (free auto-provisioned cert).

Because the site lives at the domain *root* (not a `/state3156/` sub-path anymore), all internal links are **root-relative** (`/alliances`, `/config.js`, …). Do not reintroduce a `/state3156/` prefix.

---

## Deploying

Push to `main` and Pages redeploys automatically (~1–2 min).

- **Git:** `git add . && git commit -m "..." && git push`
- **Web upload:** Add file → Upload files → **commit directly to `main`** (not a new branch — a `patch-N` branch won't go live until merged).

After deploy, hard-refresh (`Ctrl/Cmd+Shift+R`) to bypass cached files.

---

## Configuration — `config.js`

Central config object `STATE3156_CONFIG`. Edit here, re-upload, no other files change.

| Key | What it controls |
|---|---|
| `RESPONSES_CSV` | Published CSV of the R5 form-response sheet (alliance data) |
| `ADMIN_CSV` | Published CSV of the admin tab (Published TRUE/FALSE gate per alliance) |
| `POWER_RANKS` | Per-alliance `{ rank, power }` — drives the directory's ranked bars |
| `TRANSFER_*` | Transfer window: open flag, group, eligible range, spots, cap, dates |
| `STATE_DISCORD` | State Discord invite |

> **Note:** in `POWER_RANKS`, `rank` and `power` are independent fields — if you edit power without re-sorting rank, they can drift out of sync.

---

## Updating SvS data

SvS history lives in `index.html` inside the `<!-- SvS history -->` block. Each cycle is one `.row` div:

```html
<div class="row">
  <span class="cycle-label">JUN '26</span>
  <span class="phase"><span class="dot w"></span></span>  <!-- w = win, l = loss -->
  <span class="phase"><span class="dot w"></span></span>
  <span class="score">5.4B</span>
</div>
```

- Add new cycles at the **top** (newest first)
- Move the `newest` class to the most recent row
- Update the summary totals in `.side-header .summary`

---

## Updating transfer status

1. **Banner** — `<span class="text">` near the top of `index.html`
2. **KPI tile** — the `Transfers` tile value and sub-line
3. **RECRUITING pill** — change text if the window closes (`NOT RECRUITING`, remove pulsing dot)

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
