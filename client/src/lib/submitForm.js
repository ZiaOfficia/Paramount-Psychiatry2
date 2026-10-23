import site from '../data/site';

// Posts a form submission to the Google Apps Script web app, which saves it
// to the practice's Google Sheet and emails it to the office inbox.
// text/plain avoids a CORS preflight, which Apps Script can't answer.
export async function submitForm(formType, values) {
  const res = await fetch(site.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ formType, page: window.location.pathname, ...values }),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) throw new Error(data?.error || 'Submission failed.');
  return data;
}
