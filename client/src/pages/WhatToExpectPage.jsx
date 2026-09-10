import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import PageHero from '../components/shared/PageHero';
import ProcessSteps from '../components/shared/ProcessSteps';
import ResourceGrid from '../components/resources/ResourceGrid';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { whatToExpectSeo, whatToExpectHero, whatToExpectProcess, resourceGrid } from '../data/patientResources';

const related = resourceGrid.filter((item) => ['/patient-resources/new-patients', '/patient-resources/prepare-for-your-visit'].includes(item.path));

export default function WhatToExpectPage() {
  usePageMeta(whatToExpectSeo);

  return (
    <>
      <PageHero
        eyebrow={whatToExpectHero.eyebrow}
        title={whatToExpectHero.title}
        intro={whatToExpectHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Patient Resources', path: '/patient-resources' }, { label: 'What to Expect' }]}
      />

      <ProcessSteps
        heading={whatToExpectProcess.heading}
        intro={whatToExpectProcess.intro}
        steps={whatToExpectProcess.steps}
        background="white"
      />

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
