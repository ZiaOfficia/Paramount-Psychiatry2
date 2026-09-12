import { useState } from 'react';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { conditionCategories, conditions } from '../../data/conditions';
import { staggerContainer, fadeUp } from '../../lib/motion';
import { cn } from '../../lib/cn';

// One heading row per category. The arrow is the only control that opens the
// in-page list; category names and area names are intentionally non-navigating.
function AreaRow({ category, open, onToggle }) {
  const shouldReduceMotion = useReducedMotion();
  const areas = conditions[category.slug]?.areas?.items ?? [];
  const panelId = `areas-${category.slug}-panel`;

  return (
    <div className={cn('overflow-hidden border-b border-border bg-white last:border-b-0')}>
      <div className="flex w-full items-center justify-between gap-3 px-5 py-4">
        <span className="text-h4 text-navy-deep">{category.title}</span>
        <button
          type="button"
          aria-label={`${open ? 'Collapse' : 'Expand'} ${category.title}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="shrink-0 p-1 text-sage-deep transition-colors duration-300 ease-calm hover:text-navy"
        >
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={cn('transition-transform duration-300 ease-calm', open && 'rotate-180')}
          />
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-calm',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0">
          <div className="px-5 pb-5 pt-2">
            {areas.length > 0 ? (
              <ul className="ml-5 flex list-disc flex-col gap-2 py-1 text-charcoal">
                {areas.map((area) => (
                  <li key={area.title} className="text-body-sm leading-relaxed">
                    {area.title}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConditionsOverviewGrid() {
  const shouldReduceMotion = useReducedMotion();
  const [openSlug, setOpenSlug] = useState(null);

  return (
    <Section spacing="md" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col gap-10"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Areas of Care"
            title="A full range of psychiatric care, organized around you."
            description="Explore the categories below, or browse conditions we commonly treat further down the page."
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {conditionCategories.map((category) => {
            const open = openSlug === category.slug;

            return (
            <motion.div key={category.slug} variants={fadeUp} className={cn('relative', open && 'z-30')}>
              <AreaRow
                category={category}
                open={open}
                onToggle={() => setOpenSlug((current) => (current === category.slug ? null : category.slug))}
              />
            </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
