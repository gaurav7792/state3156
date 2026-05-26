/**
 * STATE 3156 — Site Configuration
 * ================================
 * Update this file when:
 *   - Google Sheet URLs change
 *   - Alliance power rankings change
 *   - Transfer window opens/closes
 *
 * After updating, re-upload this file to GitHub.
 * No other files need to change.
 */

var STATE3156_CONFIG = {

  // ── Google Sheet URLs ──────────────────────────────────────────
  // Form responses — alliance data submitted by R5s
  RESPONSES_CSV: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1_ldyyJYa_MiEYqN1xYsamcXiMweocftVJgEZg6TGR0QtLNN8zscNtIsjU_WkR4-k_JbDpn-jj6OW/pub?gid=1757059342&single=true&output=csv',

  // Admin tab — Published TRUE/FALSE per alliance
  ADMIN_CSV: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1_ldyyJYa_MiEYqN1xYsamcXiMweocftVJgEZg6TGR0QtLNN8zscNtIsjU_WkR4-k_JbDpn-jj6OW/pub?gid=344932053&single=true&output=csv',

  // ── Power rankings ─────────────────────────────────────────────
  // Update after each leaderboard screenshot
  // Last updated: MAY 25, 2026
  POWER_RANKS: {
    WLD: { rank: 1, power: '19.1B' },
    PHX: { rank: 2, power: '15.9B' },
    VKS: { rank: 3, power: '15.7B' },
    EVL: { rank: 4, power: '14.7B' },
    HWZ: { rank: 5, power: '10.4B' },
    MAD: { rank: 6, power:  '8.0B' }
  },

  // ── Transfer window ────────────────────────────────────────────
  TRANSFER_OPEN: true,
  TRANSFER_GROUP: '14',
  TRANSFER_ELIGIBLE: '#3114 – #3315',
  TRANSFER_SPOTS: '55',
  TRANSFER_POWER_CAP: '—',
  TRANSFER_WINDOW: '—',

  // ── State Discord ──────────────────────────────────────────────
  STATE_DISCORD: 'https://discord.gg/u423WPcS'

};
