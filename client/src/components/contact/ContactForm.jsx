import { useState } from 'react';
import FormField from '../appointment/FormField';
import FormStatus from '../appointment/FormStatus';
import Button from '../ui/Button';
import site from '../../data/site';

const emptyValues = { name: '', email: '', phone: '', message: '' };

const MESSAGE_MAX = 800;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.length > MESSAGE_MAX) {
    errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;
  }

  return errors;
}

function buildMailto(values) {
  const subject = `Website message — ${values.name.trim()}`;
  const lines = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() && `Phone: ${values.phone.trim()}`,
    '',
    'Message:',
    values.message.trim(),
  ].filter(Boolean);

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// Same real, working mechanism as <AppointmentForm />: there is no
// backend/email service wired up (the Express API only exposes
// /api/health), so submitting composes a mailto: link and hands off to the
// visitor's email client rather than faking a server round-trip.
export default function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  function update(field) {
    return (e) => setValues((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    const fieldOrder = ['name', 'email', 'phone', 'message'];
    const firstInvalid = fieldOrder.find((field) => validationErrors[field]);

    if (firstInvalid) {
      setStatus('error');
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    window.location.href = buildMailto(values);
    window.setTimeout(() => setStatus('success'), 200);
  }

  const isSubmitting = status === 'submitting';

  if (status === 'success') {
    return (
      <FormStatus status="success">
        <p className="font-medium text-navy-deep">Your email app should now be open with your message ready to send.</p>
        <p className="mt-1">
          Please review it and hit send from there to reach us at {site.email}. If your email app didn’t open automatically,
          you can email us directly at{' '}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-navy">
            {site.email}
          </a>{' '}
          or call {site.phone}.
        </p>
      </FormStatus>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      {status === 'error' && (
        <FormStatus status="error">Please correct the highlighted field{Object.keys(errors).length > 1 ? 's' : ''} below.</FormStatus>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="name" label="Name" required value={values.name} onChange={update('name')} error={errors.name} autoComplete="name" />
        <FormField
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={update('email')}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <FormField
        id="phone"
        label="Phone"
        type="tel"
        required
        value={values.phone}
        onChange={update('phone')}
        error={errors.phone}
        autoComplete="tel"
      />

      <FormField
        id="message"
        label="Message"
        as="textarea"
        required
        value={values.message}
        onChange={update('message')}
        error={errors.message}
        hint={`${MESSAGE_MAX - values.message.length} characters remaining.`}
        maxLength={MESSAGE_MAX}
      />

      <p className="text-caption text-muted max-w-xl">
        This form is not for emergencies. Sending will open your email app with your message addressed to Paramount
        Psychiatry; nothing is transmitted directly through this website. We use the information you provide only to
        respond to your request.
      </p>

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Preparing your message…' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
