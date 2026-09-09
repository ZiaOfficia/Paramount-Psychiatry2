import { Phone, Mail, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import AppointmentButton from '../components/shared/AppointmentButton';
import LocationMap from '../components/contact/LocationMap';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import { usePageMeta } from '../hooks/usePageMeta';
import site from '../data/site';

const seo = {
  title: 'Contact Us | Paramount Psychiatry',
  description: 'Contact Paramount Psychiatry by phone or email, or make an appointment directly through Headway.',
};

export default function ContactPage() {
  usePageMeta(seo);

  return (
    <>
      <Section spacing="xl" background="warm" className="overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-8 lg:col-span-7">
            <SectionHeading
              as="h1"
              eyebrow="Contact Us"
              title="Get in Touch"
              description="Reach out by phone or email, or make an appointment directly through Headway."
            />
            <ul className="flex flex-col gap-4 text-body text-charcoal">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-sage-deep" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="hover:text-navy transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-sage-deep" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-navy transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-sage-deep" aria-hidden="true" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
            </ul>
            <AppointmentButton />
          </div>

          <div className="flex justify-center lg:col-span-5 lg:items-center lg:justify-end">
            <img
              src="/images/sketch/contact.png"
              alt=""
              aria-hidden="true"
              className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[480px]"
            />
          </div>
        </div>
      </Section>

      <Section spacing="md" background="white">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="min-w-0">
            <SectionHeading eyebrow="Find Us" title="Visit Our Office" description="Conveniently located in Manalapan, New Jersey." />
          </div>
          <div className="min-w-0 w-full">
            <LocationMap />
          </div>
        </div>
      </Section>

      <Section spacing="md" background="ivory">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="min-w-0">
            <SectionHeading eyebrow="Get In Touch" title="Send a Message" description="Prefer to write? Send a message and we'll follow up." />
          </div>
          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section spacing="md" background="sage-soft">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading align="center" eyebrow="Stay Connected" title="Follow Us" />
          <SocialLinks />
        </div>
      </Section>
    </>
  );
}
