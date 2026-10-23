import { useState } from 'react';
import FormField from '../appointment/FormField';
import FormStatus from '../appointment/FormStatus';
import Button from '../ui/Button';
import site from '../../data/site';
import { submitForm } from '../../lib/submitForm';

const emptyValues = { name: '', email: '', phone: '', message: '', website: '' };

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

// Same mechanism as <AppointmentForm />: submissions go to the Google Apps
// Script web app, which saves them to the practice's sheet and emails them
// to the office inbox.
export default function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error' | 'failed'

  function update(field) {
    return (e) => setValues((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
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
    try {
      await submitForm('contact', values);
      setStatus('success');
    } catch {
      setStatus('failed');
    }
  }

  const isSubmitting = status === 'submitting';

  if (status === 'success') {
    return (
      <FormStatus status="success">
        <p className="font-medium text-navy-deep">Message sent, and someone will contact you soon.</p>
        <p className="mt-1">
          If you don’t hear from us in the next 24-48 hours please email us at{' '}
          <a href="mailto:info@paramoutpsy.com" className="underline">info@paramoutpsy.com</a>
        </p>
      </FormStatus>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      {status === 'error' && (
        <FormStatus status="error">Please correct the highlighted field{Object.keys(errors).length > 1 ? 's' : ''} below.</FormStatus>
      )}
      {status === 'failed' && (
        <FormStatus status="error">
          Sorry, your message couldn’t be sent. Please try again, email us at{' '}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2">
            {site.email}
          </a>
          , or call {site.phone}.
        </FormStatus>
      )}

      {/* Honeypot for spam bots — hidden from people and assistive tech. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={values.website}
        onChange={update('website')}
      />

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
        This form is not for emergencies. Your message is sent directly to Paramount Psychiatry, and we use the
        information you provide only to respond to your request.
      </p>

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
