import { motion, useReducedMotion } from 'framer-motion';
import { Info } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import PageHero from '../components/shared/PageHero';
import CheckList from '../components/shared/CheckList';
import ResourceGrid from '../components/resources/ResourceGrid';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { fadeUp } from '../lib/motion';
import {
  telepsychiatrySeo,
  telepsychiatryHero,
  telepsychiatryOverview,
  telepsychiatryChecklist,
  telepsychiatryDisclaimer,
  resourceGrid,
} from '../data/patientResources';

const related = resourceGrid.filter((item) => ['/patient-resources/what-to-expect', '/practice-policies'].includes(item.path));

export default function TelepsychiatryPage() {
  usePageMeta(telepsychiatrySeo);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow={telepsychiatryHero.eyebrow}
        title={telepsychiatryHero.title}
        intro={telepsychiatryHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Patient Resources', path: '/patient-resources' }, { label: 'Telepsychiatry' }]}
      />

      <Section spacing="md" background="white">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-5 max-w-3xl"
        >
          <SectionHeading title={telepsychiatryOverview.heading} />
          {telepsychiatryOverview.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-body text-charcoal">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </Section>

      <Section spacing="md" background="warm">
        <div className="flex flex-col gap-6 max-w-2xl">
          <SectionHeading title={telepsychiatryChecklist.heading} maxWidth="max-w-2xl" />
          <CheckList items={telepsychiatryChecklist.items} />
        </div>
      </Section>

      <Section spacing="sm" background="white">
        <div className="flex gap-3 rounded-(--radius-card) border border-border bg-sage-soft/60 p-5 md:p-6 max-w-3xl">
          <Info size={20} className="shrink-0 text-sage-deep" aria-hidden="true" />
          <p className="text-body-sm text-charcoal">{telepsychiatryDisclaimer}</p>
        </div>
      </Section>

      <Section spacing="md" background="sage-soft">
        <div className="flex flex-col gap-8">
          <SectionHeading title="Related Resources" maxWidth="max-w-2xl" />
          <ResourceGrid items={related} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
