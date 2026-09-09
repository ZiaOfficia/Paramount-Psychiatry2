import Section from '../components/ui/Section';
import PageHero from '../components/shared/PageHero';
import ResourceGrid from '../components/resources/ResourceGrid';
import FinalCta from '../components/shared/FinalCta';
import { usePageMeta } from '../hooks/usePageMeta';
import { learningCenterSeo, learningCenterHero, learningCenterCategories } from '../data/learningCenter';

const gridItems = learningCenterCategories.map((category) => ({
  icon: category.icon,
  title: category.title,
  description: category.description,
  path: category.path ?? `/learning-center/${category.slug}`,
}));

export default function LearningCenterPage() {
  usePageMeta(learningCenterSeo);

  return (
    <>
      <PageHero
        title={learningCenterHero.title}
        intro={learningCenterHero.intro}
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Mental Health Learning Center' }]}
        sketch="/images/sketch/Mentalhealthlearningcenter.png"
      />

      <Section spacing="md" background="white">
        <ResourceGrid items={gridItems} />
      </Section>

      <FinalCta />
    </>
  );
}
