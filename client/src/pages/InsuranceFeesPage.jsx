import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { insuranceFeesSeo, insuranceFeesHero, insuranceFeesSections } from '../data/insuranceFees';

function InfoSection({ section, index }) {
  return (
    <Section
      spacing="md"
      background={['white', 'warm', 'sage-soft', 'blue-soft'][index % 4]}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-h2">{section.heading}</h2>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-5">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={`${section.heading}-p-${paragraphIndex}`}
                className={paragraph.startsWith('Please note')
                  ? 'border-l-4 border-gold bg-ivory px-4 py-3 text-body-lg font-medium text-navy-deep'
                  : 'text-body-lg text-muted'}
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc space-y-2 pl-6 text-body-lg text-muted">
                {section.bullets.map((item, bulletIndex) => (
                  <li
                    key={`${section.heading}-bullet-${bulletIndex}`}
                    className={item.startsWith('Please note')
                      ? 'border-l-4 border-gold bg-ivory px-4 py-3 font-medium text-navy-deep'
                      : undefined}
                  >
                    {item}
                  </li>
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

            {section.feeRows && (
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[32rem] border-collapse text-left text-body-lg">
                  <thead className="bg-sage-soft">
                    <tr className="border-b-2 border-border text-navy-deep">
                      <th scope="col" className="border-r border-border px-4 py-3 font-semibold">Service</th>
                      <th scope="col" className="border-r border-border px-4 py-3 font-semibold">Time</th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.feeRows.map((row) => (
                      <tr key={row.service} className="border-b border-border text-muted">
                        <td className="border-r border-border px-4 py-3">{row.service}</td>
                        <td className="whitespace-nowrap border-r border-border px-4 py-3">{row.time}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-right text-navy-deep">{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.closingParagraphs &&
              section.closingParagraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.heading}-closing-${paragraphIndex}`}
                  className={paragraph.startsWith('Please note')
                    ? 'border-l-4 border-gold bg-ivory px-4 py-3 text-body-lg font-medium text-navy-deep'
                    : 'text-body-lg text-muted'}
                >
                  {paragraph}
                </p>
              ))}

            {section.highlightedNote && (
              <p className="border-l-4 border-gold bg-ivory px-4 py-3 text-body-lg font-medium text-navy-deep">
                {section.highlightedNote}
              </p>
            )}
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
