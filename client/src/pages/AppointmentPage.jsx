import { Info } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import PageHero from '../components/shared/PageHero';
import AppointmentButton from '../components/shared/AppointmentButton';
import AppointmentForm from '../components/appointment/AppointmentForm';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { emergencyNotice } from '../data/home';

const seo = {
  title: 'Make an Appointment | Paramount Psychiatry',
  description: 'Request an appointment with Paramount Psychiatry through Headway, or send a question to the practice ahead of booking.',
};

const emergencyDisclaimer = `${emergencyNotice.statement} For emergencies: ${emergencyNotice.instructions.join(' · ')}. ${emergencyNotice.note}`;

export default function AppointmentPage() {
  usePageMeta(seo);

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an appointment."
        intro="Ready to book? Appointments are scheduled directly through Headway. Have a question first? Send us a message below."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Make an Appointment' }]}
        illustration="sunrisePath"
      />

      <Section spacing="md" background="white">
        <div className="flex flex-col gap-5 max-w-2xl">
          <SectionHeading title="Book Directly Through Headway" />
          <p className="text-body text-charcoal">
            The fastest way to schedule is through Headway, our secure appointment-booking partner, where you can see
            available times and, if applicable, which insurance plans are currently accepted.
          </p>
          <div>
            <AppointmentButton size="lg" />
          </div>
        </div>
      </Section>

      <Section spacing="md" background="warm">
        <div className="flex flex-col gap-6 max-w-2xl">
          <SectionHeading title="Have a Question First?" description="Send a message to the practice and we'll follow up." />
          <AppointmentForm />
        </div>
      </Section>

      <Section spacing="sm" background="sage-soft">
        <div className="flex gap-3 rounded-(--radius-card) border border-border bg-sage-soft/60 p-5 md:p-6 max-w-3xl">
          <Info size={20} className="shrink-0 text-sage-deep" aria-hidden="true" />
          <p className="text-body-sm text-charcoal">{emergencyDisclaimer}</p>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
