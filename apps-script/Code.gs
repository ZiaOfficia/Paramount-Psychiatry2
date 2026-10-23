/**
 * Paramount Psychiatry — website form handler (Google Apps Script)
 *
 * Receives submissions from the Contact form and the Appointment Request form,
 * saves each one as a row in this Google Sheet, and emails it straight to the
 * practice inbox.
 *
 * Setup:
 *   1. Create a Google Sheet → Extensions → Apps Script → paste this file.
 *   2. Run `setup` once from the editor (grants permissions, creates the tabs).
 *   3. Deploy → New deployment → Web app
 *        Execute as: Me
 *        Who has access: Anyone
 *   4. Copy the Web app URL into the website (VITE_FORM_ENDPOINT).
 *   After any code change: Deploy → Manage deployments → Edit → New version.
 */

const NOTIFY_EMAIL = 'info@paramountpsychiatrynj.com';
const PRACTICE_NAME = 'Paramount Psychiatry';

const FORMS = {
  contact: {
    sheet: 'Contact Messages',
    subject: (d) => `Website message — ${d.name}`,
    fields: [
      ['name', 'Name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['message', 'Message'],
    ],
    required: ['name', 'email', 'phone', 'message'],
  },
  appointment: {
    sheet: 'Appointment Requests',
    subject: (d) => `Appointment request — ${d.name}`,
    fields: [
      ['name', 'Name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['contactMethod', 'Preferred contact method'],
      ['reason', 'Reason for contacting'],
      ['timing', 'Preferred appointment timing'],
      ['message', 'Message'],
    ],
    required: ['name', 'email', 'contactMethod', 'reason'],
  },
};

const MAX_LENGTH = 2000;

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const data = parseBody_(e);

    // Honeypot: real visitors never fill the hidden "website" field.
    if (data.website) return json_({ ok: true });

    const form = FORMS[data.formType];
    if (!form) return json_({ ok: false, error: 'Unknown form type.' });

    const clean = {};
    form.fields.forEach(([key]) => {
      clean[key] = String(data[key] || '').trim().slice(0, MAX_LENGTH);
    });

    const missing = form.required.filter((key) => !clean[key]);
    if (missing.length) return json_({ ok: false, error: 'Missing required fields: ' + missing.join(', ') });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) return json_({ ok: false, error: 'Invalid email address.' });

    lock.waitLock(10000);
    saveRow_(form, clean, data.page);
    lock.releaseLock();

    sendEmail_(form, clean, data.page);

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Server error. Please call or email the office directly.' });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

// Lets you open the Web app URL in a browser to confirm the deployment is live.
function doGet() {
  return json_({ ok: true, service: PRACTICE_NAME + ' form handler' });
}

function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (_) {
      // Fall through to form-encoded parameters.
    }
  }
  return (e && e.parameter) || {};
}

function saveRow_(form, clean, page) {
  const sheet = getSheet_(form);
  const row = [new Date()].concat(form.fields.map(([key]) => sanitizeCell_(clean[key])), sanitizeCell_(page || ''));
  sheet.appendRow(row);
}

function getSheet_(form) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(form.sheet);
  if (!sheet) {
    sheet = ss.insertSheet(form.sheet);
    const headers = ['Submitted At'].concat(form.fields.map(([, label]) => label), 'Page');
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendEmail_(form, clean, page) {
  const rows = form.fields
    .filter(([key]) => clean[key])
    .map(
      ([key, label]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top;white-space:nowrap"><strong>${label}</strong></td>` +
        `<td style="padding:6px 0;white-space:pre-wrap">${escapeHtml_(clean[key])}</td></tr>`
    )
    .join('');

  const htmlBody =
    `<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">` +
    `<p>New submission from the ${PRACTICE_NAME} website.</p>` +
    `<table style="border-collapse:collapse">${rows}</table>` +
    (page ? `<p style="color:#888;font-size:12px">Sent from: ${escapeHtml_(page)}</p>` : '') +
    `<p style="color:#888;font-size:12px">Reply to this email to respond directly to the visitor.</p>` +
    `</div>`;

  const textBody = form.fields
    .filter(([key]) => clean[key])
    .map(([key, label]) => `${label}: ${clean[key]}`)
    .join('\n');

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: form.subject(clean),
    body: textBody,
    htmlBody: htmlBody,
    replyTo: clean.email,
    name: PRACTICE_NAME + ' Website',
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml_(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Stops values like "=HYPERLINK(...)" from being run as spreadsheet formulas.
function sanitizeCell_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

// Run once from the editor to authorize Sheets + Mail and create both tabs.
function setup() {
  Object.keys(FORMS).forEach((key) => getSheet_(FORMS[key]));
  MailApp.getRemainingDailyQuota();
}
