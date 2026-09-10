import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import PageHero from '../components/shared/PageHero';
import CheckList from '../components/shared/CheckList';
import ResourceGrid from '../components/resources/ResourceGrid';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { fadeUp } from '../lib/motion';
import { prepareForVisitSeo, prepareForVisitHero, prepareForVisitChecklist, resourceGrid } from '../data/patientResources';

const related = resourceGrid.filter((item) => ['/patient-resources/new-patients', '/patient-resources/what-to-expect'].includes(item.path));

export default function PrepareForVisitPage() {
  usePageMeta(prepareForVisitSeo);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow={prepareForVisitHero.eyebrow}
        title={prepareForVisitHero.title}
        intro={prepareForVisitHero.intro}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Patient Resources', path: '/patient-resources' },
          { label: 'Preparing for Your Visit' },
        ]}
      />

      <Section spacing="md" background="white">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <SectionHeading title="Before Your Appointment" />
          <CheckList items={prepareForVisitChecklist} />
        </motion.div>
      </Section>

      <Section spacing="md" background="warm">
        <div className="flex flex-col gap-8">
          <SectionHeading title="Related Resources" maxWidth="max-w-2xl" />
          <ResourceGrid items={related} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
