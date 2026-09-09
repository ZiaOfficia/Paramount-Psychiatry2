import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { insuranceFeesSeo, insuranceFeesHero, insuranceFeesSections } from '../data/insuranceFees';

function InfoSection({ section, index }) {
  const isIvory = index % 2 === 1;

  return (
    <Section spacing="md" background={isIvory ? 'ivory' : 'white'}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-h2">{section.heading}</h2>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-5">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${section.heading}-p-${paragraphIndex}`} className="text-body-lg text-muted">
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc space-y-2 pl-6 text-body-lg text-muted">
                {section.bullets.map((item, bulletIndex) => (
                  <li key={`${section.heading}-bullet-${bulletIndex}`}>{item}</li>
                ))}
              </ul>
            )}

            {section.nestedBullets && (
              <ul className="list-disc space-y-2 pl-10 text-body-lg text-muted">
                {section.nestedBullets.map((item, nestedIndex) => (
                  <li key={`${section.heading}-nested-${nestedIndex}`}>{item}</li>
                ))}
              </ul>
            )}

            {section.closingParagraphs &&
              section.closingParagraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.heading}-closing-${paragraphIndex}`} className="text-body-lg text-muted">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function InsuranceFeesPage() {
  usePageMeta(insuranceFeesSeo);

  return (
    <>
      <PageHero
        title={insuranceFeesHero.title}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Insurance & Fees' }]}
        sketch="/images/sketch/clearinformationinsurance.png"
      />

      {insuranceFeesSections.map((section, index) => (
        <InfoSection key={section.heading} section={section} index={index} />
      ))}
    </>
  );
}
