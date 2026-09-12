import { useParams } from 'react-router-dom';
import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import FAQAccordion from '../components/shared/FAQAccordion';
import FinalCta from '../components/shared/FinalCta';
import NotFoundPage from './NotFoundPage';
import { usePageMeta } from '../hooks/usePageMeta';
import { learningCenterCategories } from '../data/learningCenter';

const sectionSeparator = '________________________________________';
const markdownSectionSeparator = /\n-{3,}\n/;

function parseLearningCenterContent(content) {
  const sections = content
    .split(new RegExp(`${sectionSeparator}|${markdownSectionSeparator.source}`))
    .map((section) => section
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !/^-{3,}$/.test(line)))
    .filter((lines) => lines.length);
  const intro = [];
  const items = [];
  let introHeading = '';

  sections.forEach((lines, sectionIndex) => {
    const headingLines = [];
    if (sectionIndex === 0 && lines[0]?.startsWith('Frequently Asked Questions')) {
      introHeading = lines.shift();
    } else if (lines[0]?.startsWith('**')) {
      for (const line of lines) {
        headingLines.push(line);
        if (line.endsWith('**')) break;
      }
      const boldHeading = headingLines.join(' ').replaceAll('**', '');
      if (sectionIndex === 0 && !boldHeading.endsWith('?')) {
        introHeading = boldHeading;
        lines.splice(0, headingLines.length);
      }
    } else if (sectionIndex === 0 && !lines[0]?.endsWith('?')) {
      introHeading = lines.shift();
    } else if (lines[0]?.endsWith('?')) {
      headingLines.push(lines[0]);
    }

    const question = headingLines.join(' ').replaceAll('**', '');
    const answer = lines.slice(headingLines.length).join('\n').replaceAll('**', '');
    if (question.endsWith('?')) {
      items.push({ question, answer });
    } else {
      intro.push(...lines.map((line) => line.replaceAll('**', '')));
    }
  });

  return { introHeading, intro, items };
}

function LearningCenterContent({ content, idPrefix }) {
  const { introHeading, intro, items } = parseLearningCenterContent(content);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      {introHeading && (
        <h2 className="border-l-4 border-gold bg-gold/10 px-4 py-3 text-h3 font-semibold text-navy-deep">
          {introHeading}
        </h2>
      )}
      {intro.length > 0 && (
        <div className="flex flex-col gap-3">
          {intro.map((paragraph, index) => (
            <p key={`${index}-${paragraph}`} className="text-body leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      <FAQAccordion
        idPrefix={idPrefix}
        categories={[{ items }]}
      />
    </div>
  );
}

export default function LearningCenterCategoryPage() {
  const { slug } = useParams();
  const category = learningCenterCategories.find((item) => item.slug === slug && !item.path);

  usePageMeta(
    category
      ? {
          title: `${category.title} | Mental Health Learning Center | Paramount Psychiatry`,
          description: `Frequently asked questions about ${category.title.toLowerCase()}.`,
        }
      : {},
  );

  if (!category) return <NotFoundPage />;

  return (
    <>
      <PageHero
        eyebrow="Mental Health Learning Center"
        title={category.title}
        intro="Frequently asked questions and practical information from Paramount Psychiatry."
        sketch={
          category.slug === 'why-paramount-psychiatry'
            ? '/images/MentalHealth/mh3.png'
            : category.slug === 'choosing-the-right-mental-health-professional'
              ? '/images/MentalHealth/mh4.png'
              : category.slug === 'new-patients-first-appointment'
                ? '/images/MentalHealth/mh6.png'
                : category.slug === 'psychiatric-diagnosis-treatment'
                  ? '/images/MentalHealth/mh7.png'
                  : category.slug === 'medication-management-prescription-questions'
                    ? '/images/MentalHealth/mh8.png'
                    : category.slug === 'anxiety-stress-panic-disorders'
                      ? '/images/MentalHealth/mh9.png'
                      : category.slug === 'depression-mood-disorders'
                        ? '/images/MentalHealth/mh3.png'
                        : category.slug === 'adhd-attention-deficit-hyperactivity-disorder'
                          ? '/images/MentalHealth/mh4.png'
                          : category.slug === 'womens-mental-health-hormone-related-mood-disorders'
                            ? '/images/MentalHealth/mh5.png'
                            : category.slug === 'geriatric-psychiatry-memory-care-healthy-aging'
                              ? '/images/MentalHealth/mh6.png'
                              : category.slug === 'sleep-disorders-insomnia'
                                ? '/images/MentalHealth/mh7.png'
                                : category.slug === 'trauma-ptsd-burnout-life-transitions'
                                  ? '/images/MentalHealth/mh8.png'
                                  : undefined
        }
        sketchClassName={
          category.slug === 'why-paramount-psychiatry'
            || category.slug === 'choosing-the-right-mental-health-professional'
            || category.slug === 'new-patients-first-appointment'
            || category.slug === 'psychiatric-diagnosis-treatment'
            || category.slug === 'medication-management-prescription-questions'
            || category.slug === 'anxiety-stress-panic-disorders'
            || category.slug === 'depression-mood-disorders'
            || category.slug === 'adhd-attention-deficit-hyperactivity-disorder'
            || category.slug === 'womens-mental-health-hormone-related-mood-disorders'
            || category.slug === 'geriatric-psychiatry-memory-care-healthy-aging'
            || category.slug === 'sleep-disorders-insomnia'
            || category.slug === 'trauma-ptsd-burnout-life-transitions'
            ? 'max-w-md'
            : 'max-w-sm'
        }
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Mental Health Learning Center', path: '/learning-center' },
          { label: category.title },
        ]}
      />

      <Section spacing="lg" background="white">
        <LearningCenterContent content={category.content} idPrefix={`learning-${category.slug}`} />
      </Section>

      <FinalCta />
    </>
  );
}
