import PageHero from '../components/shared/PageHero';
import PolicySection from '../components/resources/PolicySection';
import { usePageMeta } from '../hooks/usePageMeta';
import { practicePoliciesSeo, practicePoliciesHero, policySections } from '../data/practicePolicies';

export default function PracticePoliciesPage() {
  usePageMeta(practicePoliciesSeo);

  return (
    <>
      <PageHero
        title={practicePoliciesHero.title}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Practice Policies' }]}
        sketch="/images/sketch/Practocepolices.png"
        sketchClassName="max-w-none"
      />

      {policySections.map((section, index) => (
        <PolicySection
          key={section.id}
          id={section.id}
          heading={section.heading}
          paragraphs={section.paragraphs}
          bullets={section.bullets}
          nestedBullets={section.nestedBullets}
          closingParagraphs={section.closingParagraphs}
          subheading={section.subheading}
          subparagraphs={section.subparagraphs}
          subheading2={section.subheading2}
          subparagraphs2={section.subparagraphs2}
          finalParagraph={section.finalParagraph}
          link={section.link}
          background={index % 2 === 1 ? 'ivory' : 'white'}
        />
      ))}
    </>
  );
}
