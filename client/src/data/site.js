const site = {
  name: 'Paramount Psychiatry',
  provider: 'Dr. Pooja Tandon, MD',
  tagline: 'Where compassionate listening meets evidence-based psychiatry.',
  phone: '(929) 680-7358',
  fax: '(929) 200-3926',
  email: 'info@paramountpsychiatrynj.com',
  address: {
    street: '28 Briar Hill Dr',
    city: 'Manalapan',
    state: 'NJ',
    zip: '07726',
  },
  appointmentUrl:
    'https://care.headway.co/providers/pooja-tandon-2?utm_source=pem&utm_medium=direct_link&utm_campaign=162035',
  // Google Apps Script web app (apps-script/Code.gs): saves form submissions to
  // the Google Sheet and emails them to `email` above.
  formEndpoint:
    'https://script.google.com/macros/s/AKfycbyPsygeRFAxXLeJQEeDo2WEe94Np_nNfLWb4gpgP3PIZKFIkcfJ1z_dUgdhqFKrZVxP/exec',
};

export default site;
