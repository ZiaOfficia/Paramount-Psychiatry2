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
    <div
      className={cn(
        'relative bg-white',
        !open && 'border-b border-border',
      )}
    >
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

      <AnimatePresence>
        {open && areas.length > 0 && (
          <motion.div
            id={panelId}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={shouldReduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full z-40 max-h-80 overflow-y-auto border-b border-border bg-inherit px-5 pb-4 pt-1 shadow-[0_8px_16px_-6px_rgba(23,50,77,0.18),6px_6px_12px_-8px_rgba(23,50,77,0.12),-6px_6px_12px_-8px_rgba(23,50,77,0.12)]"
          >
            <ul className="flex flex-col">
              {areas.map((area) => (
                <li key={area.title}>
                  <span className="block py-1 text-body-sm text-charcoal">{area.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
