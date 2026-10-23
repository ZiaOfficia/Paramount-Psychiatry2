import { useState } from 'react';
import FormField from './FormField';
import FormStatus from './FormStatus';
import Button from '../ui/Button';
import site from '../../data/site';
import { submitForm } from '../../lib/submitForm';

const contactMethodOptions = [
  { value: '', label: 'Select one…' },
  { value: 'Email', label: 'Email' },
  { value: 'Phone', label: 'Phone' },
  { value: 'Either', label: 'Either is fine' },
];

const reasonOptions = [
  { value: '', label: 'Select one…' },
  { value: 'New appointment request', label: 'New appointment request' },
  { value: 'General question', label: 'General question' },
  { value: 'Insurance or billing question', label: 'Insurance or billing question' },
  { value: 'Other', label: 'Other' },
];

const timingOptions = [
  { value: '', label: 'No preference' },
  { value: 'Weekday mornings', label: 'Weekday mornings' },
  { value: 'Weekday afternoons', label: 'Weekday afternoons' },
  { value: 'Weekday evenings', label: 'Weekday evenings' },
];

const emptyValues = {
  name: '',
  email: '',
  phone: '',
  contactMethod: '',
  reason: '',
  timing: '',
  message: '',
  website: '',
};

const MESSAGE_MAX = 800;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone.trim() && !/^[\d\s()+-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.contactMethod) errors.contactMethod = 'Please select a preferred contact method.';
  if (!values.reason) errors.reason = 'Please let us know the reason for contacting the practice.';

  if (values.message.length > MESSAGE_MAX) errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;

  return errors;
}

// Appointment-request form. Submissions go to the Google Apps Script web app
// (apps-script/Code.gs), which saves them to the practice's Google Sheet and
// emails them to the office inbox.
export default function AppointmentForm() {
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

    const fieldOrder = ['name', 'email', 'phone', 'contactMethod', 'reason', 'message'];
    const firstInvalid = fieldOrder.find((field) => validationErrors[field]);

    if (firstInvalid) {
      setStatus('error');
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await submitForm('appointment', values);
      setStatus('success');
    } catch {
      setStatus('failed');
    }
  }

  const isSubmitting = status === 'submitting';

  if (status === 'success') {
    return (
      <FormStatus status="success">
        <p className="font-medium text-navy-deep">Thank you — your request has been sent.</p>
        <p className="mt-1">Our office will contact you soon using your preferred method. If it’s urgent, please call {site.phone}.</p>
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
          Sorry, your request couldn’t be sent. Please try again, email us at{' '}
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="phone" label="Phone" type="tel" value={values.phone} onChange={update('phone')} error={errors.phone} autoComplete="tel" />
        <FormField
          id="contactMethod"
          label="Preferred contact method"
          as="select"
          required
          value={values.contactMethod}
          onChange={update('contactMethod')}
          error={errors.contactMethod}
          options={contactMethodOptions}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          id="reason"
          label="Reason for contacting the practice"
          as="select"
          required
          value={values.reason}
          onChange={update('reason')}
          error={errors.reason}
          options={reasonOptions}
        />
        <FormField
          id="timing"
          label="Preferred appointment timing"
          as="select"
          value={values.timing}
          onChange={update('timing')}
          options={timingOptions}
        />
      </div>

      <FormField
        id="message"
        label="Message"
        as="textarea"
        value={values.message}
        onChange={update('message')}
        error={errors.message}
        hint={`Please avoid including sensitive medical details here. ${MESSAGE_MAX - values.message.length} characters remaining.`}
        maxLength={MESSAGE_MAX}
      />

      <p className="text-caption text-muted max-w-xl">
        This form is not for emergencies — see below for emergency information. Your request is sent directly to
        Paramount Psychiatry, and we use the information you provide only to respond to your request.
      </p>

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Request'}
        </Button>
      </div>
    </form>
  );
}
