/**
 * STATE 3156 — Alliance Data Collection
 * ======================================
 * Run createAllianceForm() once to:
 *   1. Create a Google Form with all alliance fields
 *   2. Create a linked Google Sheet with a "Published" review column
 *   3. Log the Form URL and Sheet URL to the console
 *
 * HOW TO RUN:
 *   1. Go to script.google.com
 *   2. Create a new project
 *   3. Paste this entire file
 *   4. Select createAllianceForm from the function dropdown
 *   5. Click Run
 *   6. Approve permissions when prompted
 *   7. Check the Execution Log for your Form and Sheet URLs
 */

function createAllianceForm() {

  // ── Create the form ──────────────────────────────────────────────
  var form = FormApp.create('State 3156 — Alliance Data');
  form.setTitle('State 3156 — Alliance Data');
  form.setDescription(
    'Fill this in for your alliance page on the state recruitment site. ' +
    'Submit again any time something changes — we\'ll update the page. ' +
    'All fields marked * are required.'
  );
  form.setConfirmationMessage(
    'Submitted. We\'ll review and publish your page shortly. ' +
    'Questions? Hit the state Discord.'
  );
  form.setAllowResponseEdits(true);
  form.setCollectEmail(false);

  // ── Section 1: Alliance identity ────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Alliance Identity')
    .setHelpText('Basic info about your alliance.');

  form.addListItem()
    .setTitle('Alliance Tag *')
    .setRequired(true)
    .setChoiceValues(['WLD', 'PHX', 'VKS', 'EVL', 'HWZ', 'MAD']);

  form.addTextItem()
    .setTitle('Full Alliance Name *')
    .setRequired(true)
    .setHelpText('e.g. Vikings, Wild, PhoenixHeart');

  form.addTextItem()
    .setTitle('Alliance Size *')
    .setRequired(true)
    .setHelpText('e.g. 80/100');

  form.addTextItem()
    .setTitle('Spots Open *')
    .setRequired(true)
    .setHelpText('e.g. 20');

  form.addTextItem()
    .setTitle('Alliance Championship Tier')
    .setRequired(false)
    .setHelpText('e.g. Ultimate 3 Stars, Gold, Silver');

  // ── Section 2: Leadership ────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Leadership')
    .setHelpText('R5 is required. Add as many R4s as you have.');

  form.addTextItem()
    .setTitle('R5 Name *')
    .setRequired(true);

  form.addTextItem()
    .setTitle('R5 Discord Handle')
    .setRequired(false)
    .setHelpText('e.g. @username or discord.com/users/USERID');

  form.addTextItem()
    .setTitle('R5 Role / Title')
    .setRequired(false)
    .setHelpText('e.g. Alliance Leader, R5');

  form.addParagraphTextItem()
    .setTitle('R4 Names')
    .setRequired(false)
    .setHelpText('One name per line.');

  form.addParagraphTextItem()
    .setTitle('R4 Discord Handles')
    .setRequired(false)
    .setHelpText('One per line, in the same order as R4 Names. Leave blank for any without a handle.');

  form.addParagraphTextItem()
    .setTitle('R4 Roles / Titles')
    .setRequired(false)
    .setHelpText('One per line, in the same order as R4 Names. Optional.');

  // ── Section 3: About ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('About Your Alliance')
    .setHelpText('This appears as the main description on your alliance page. Write in your own voice.');

  form.addParagraphTextItem()
    .setTitle('About / Description *')
    .setRequired(true)
    .setHelpText('2–4 sentences. What makes your alliance worth joining? Who are you looking for?');

  form.addParagraphTextItem()
    .setTitle('Looking For')
    .setRequired(false)
    .setHelpText('Who\'s the ideal recruit? e.g. Daily active, SvS focused, casual, F2P friendly');

  // ── Section 4: Location ──────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('HQ Location')
    .setHelpText('Your alliance HQ coordinates in State 3156.');

  form.addTextItem()
    .setTitle('HQ X Coordinate *')
    .setRequired(true)
    .setHelpText('e.g. 404');

  form.addTextItem()
    .setTitle('HQ Y Coordinate *')
    .setRequired(true)
    .setHelpText('e.g. 683');

  // ── Section 5: Event schedule ────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Event Schedule')
    .setHelpText('All times in UTC.');

  form.addTextItem()
    .setTitle('Bear Hunt 1 — Time (UTC) *')
    .setRequired(true)
    .setHelpText('e.g. 20:30');

  form.addTextItem()
    .setTitle('Bear Hunt 1 — Typical High Score')
    .setRequired(false)
    .setHelpText('e.g. 5.5B');

  form.addTextItem()
    .setTitle('Bear Hunt 2 — Time (UTC) *')
    .setRequired(true)
    .setHelpText('e.g. 03:00');

  form.addTextItem()
    .setTitle('Bear Hunt 2 — Typical High Score')
    .setRequired(false)
    .setHelpText('e.g. 6.0B');

  form.addTextItem()
    .setTitle('Foundry Battle — Time(s) (UTC)')
    .setRequired(false)
    .setHelpText('e.g. 02:00 · 19:00');

  form.addTextItem()
    .setTitle('Foundry Battle — Tier')
    .setRequired(false)
    .setHelpText('e.g. Tier S, Tier A');

  form.addTextItem()
    .setTitle('Canyon Clash — Time(s) (UTC)')
    .setRequired(false)
    .setHelpText('e.g. 02:00 · 19:00');

  form.addTextItem()
    .setTitle('Canyon Clash — Tier')
    .setRequired(false)
    .setHelpText('e.g. Tier S, Tier A');

  form.addTextItem()
    .setTitle('Crazy Joe — Time(s) (UTC)')
    .setRequired(false)
    .setHelpText('e.g. 02:00 · 19:00');

  form.addTextItem()
    .setTitle('Crazy Joe — Level')
    .setRequired(false)
    .setHelpText('e.g. Lvl 29');

  // ── Section 6: SvS ───────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('SvS Prep Score')
    .setHelpText('Your alliance\'s contribution to the state SvS prep score.');

  form.addTextItem()
    .setTitle('Typical Prep Score *')
    .setRequired(true)
    .setHelpText('e.g. 1.0B+');

  form.addTextItem()
    .setTitle('Last Cycle Prep Score')
    .setRequired(false)
    .setHelpText('e.g. 1.1B');

  // ── Section 7: Contact + image ───────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Contact & Image')
    .setHelpText('How prospects reach you, and your alliance image.');

  form.addTextItem()
    .setTitle('Contact Discord Link *')
    .setRequired(true)
    .setHelpText('e.g. discord.gg/xxxxxx — this is the link shown on your page');

  form.addTextItem()
    .setTitle('Alliance Icon URL')
    .setRequired(false)
    .setHelpText(
      'Optional. Paste a direct image URL for your alliance icon. ' +
      'Best source: upload your Discord server icon to imgur.com and paste the .png link here.'
    );

  // ── Link to a Sheet ───────────────────────────────────────────────
  var sheet = SpreadsheetApp.create('State 3156 — Alliance Data');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // Add a "Published" column and "Notes" column for your review workflow
  var responseSheet = sheet.getSheets()[0];
  responseSheet.setName('Responses');

  // Add header columns after form links itself
  // (Form responses land in columns starting at A; we add admin columns at the end)
  // We use a separate admin sheet for clarity
  var adminSheet = sheet.insertSheet('Admin');
  adminSheet.getRange('A1').setValue('Alliance Tag');
  adminSheet.getRange('B1').setValue('Published');
  adminSheet.getRange('C1').setValue('Page URL');
  adminSheet.getRange('D1').setValue('Last Updated');
  adminSheet.getRange('E1').setValue('Notes');

  // Pre-populate the six alliances
  var alliances = ['WLD', 'PHX', 'VKS', 'EVL', 'HWZ', 'MAD'];
  for (var i = 0; i < alliances.length; i++) {
    adminSheet.getRange(i + 2, 1).setValue(alliances[i]);
    adminSheet.getRange(i + 2, 2).setValue('FALSE');
    adminSheet.getRange(i + 2, 3).setValue(
      'https://gaurav7792.github.io/state3156/alliances/' + alliances[i].toLowerCase()
    );
  }

  // Format admin sheet header
  adminSheet.getRange('A1:E1').setFontWeight('bold').setBackground('#1a1a2e').setFontColor('#a855f7');
  adminSheet.setColumnWidth(1, 100);
  adminSheet.setColumnWidth(2, 100);
  adminSheet.setColumnWidth(3, 320);
  adminSheet.setColumnWidth(4, 160);
  adminSheet.setColumnWidth(5, 240);

  // ── Log URLs ─────────────────────────────────────────────────────
  Logger.log('===========================================');
  Logger.log('STATE 3156 — ALLIANCE DATA FORM CREATED');
  Logger.log('===========================================');
  Logger.log('');
  Logger.log('FORM URL (send this to R5s):');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('FORM EDIT URL (your admin link):');
  Logger.log(form.getEditUrl());
  Logger.log('');
  Logger.log('SHEET URL (your responses):');
  Logger.log('https://docs.google.com/spreadsheets/d/' + sheet.getId());
  Logger.log('');
  Logger.log('===========================================');
  Logger.log('NEXT STEPS:');
  Logger.log('1. Send the FORM URL to all 6 R5s');
  Logger.log('2. When a response comes in, review it in the Responses tab');
  Logger.log('3. Set Published = TRUE in the Admin tab when ready to go live');
  Logger.log('4. Update alliance pages with the Sheet ID for live fetching');
  Logger.log('===========================================');
}


/**
 * OPTIONAL: Run this to get the published CSV URL for a specific alliance
 * once you\'re ready to wire up live data fetching on the alliance pages.
 *
 * Replace SHEET_ID with your actual sheet ID from the URL.
 * Replace SHEET_GID with the gid of the Responses tab (visible in the URL).
 */
function getPublishedCsvUrl() {
  var SHEET_ID = 'REPLACE_WITH_YOUR_SHEET_ID';
  var SHEET_GID = '0'; // Usually 0 for the first sheet

  // First, publish the sheet:
  // File → Share → Publish to web → Responses sheet → CSV → Publish

  var url = 'https://docs.google.com/spreadsheets/d/' +
            SHEET_ID +
            '/export?format=csv&gid=' +
            SHEET_GID;

  Logger.log('Published CSV URL:');
  Logger.log(url);
  Logger.log('');
  Logger.log('Use this URL in your alliance pages to fetch live data.');
}
