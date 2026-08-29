import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { conditionCategories, getAreaTitles } from '../../data/conditions';
import { staggerContainer, fadeUp } from '../../lib/motion';
import { cn } from '../../lib/cn';

const [featured, ...rest] = conditionCategories;

// Icon-circle color cycles through the three supporting brand tints — sage,
// blue, warm gold — in equal rotation, same treatment for all three.
const iconStyles = [
  { bg: 'bg-sage-soft', text: 'text-sage-deep' },
  { bg: 'bg-blue-soft', text: 'text-navy' },
  { bg: 'bg-gold/15', text: 'text-gold' },
];

// Collapsible "Areas We Commonly Address" list inside a category card. Same
// disclosure mechanics as FAQAccordion: labelled trigger, panel made inert
// when closed, grid-rows transition so there's no fixed-height guesswork.
// `tone="dark"` is the navy featured card.
function AreasDisclosure({ slug, titles, isOpen, onToggle, tone = 'light' }) {
  const panelId = `areas-${slug}-panel`;
  const buttonId = `areas-${slug}-trigger`;
  const dark = tone === 'dark';

  if (titles.length === 0) return null;

  return (
    <div className={cn('border-t pt-3', dark ? 'border-white/15' : 'border-border')}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between gap-3 text-left text-body-sm font-semibold transition-colors',
          dark ? 'text-white hover:text-sage' : 'text-navy-deep hover:text-navy',
        )}
      >
        <span>
          Areas We Commonly Address
          <span className={cn('ml-1.5 font-normal', dark ? 'text-white/60' : 'text-muted')}>({titles.length})</span>
        </span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn(
            'shrink-0 transition-transform duration-300 ease-calm',
            isOpen && 'rotate-180',
            dark ? 'text-sage' : 'text-sage-deep',
          )}
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-calm',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1.5 pt-3">
            {titles.map((title) => (
              <li key={title} className={cn('flex gap-2.5 text-body-sm', dark ? 'text-white/75' : 'text-muted')}>
                <span
                  className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full', dark ? 'bg-sage' : 'bg-sage-deep')}
                  aria-hidden="true"
                />
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ConditionsOverviewGrid() {
  const shouldReduceMotion = useReducedMotion();
  // Multiple cards may be open at once — visitors compare categories.
  const [openSlugs, setOpenSlugs] = useState(() => new Set());

  function toggle(slug) {
    setOpenSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

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

        {/* Featured category — Comprehensive Psychiatric Services is the foundation every plan builds on. */}
        <motion.div variants={fadeUp}>
          <div className="relative flex flex-col gap-5 overflow-hidden rounded-(--radius-card) bg-navy-deep p-8 text-white shadow-elevated md:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-white/5"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <featured.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-eyebrow uppercase text-sage font-semibold">Where Every Plan Begins</span>
                  <h3 className="text-h3 text-white">
                    <Link to={`/conditions/${featured.slug}`} className="transition-colors hover:text-sage">
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="text-body-sm text-white/70 max-w-md">{featured.description}</p>
                </div>
              </div>
              <Link
                to={`/conditions/${featured.slug}`}
                className="group inline-flex shrink-0 items-center gap-1.5 self-start text-body-sm font-semibold text-white md:self-auto"
              >
                Learn More
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative">
              <AreasDisclosure
                slug={featured.slug}
                titles={getAreaTitles(featured.slug)}
                isOpen={openSlugs.has(featured.slug)}
                onToggle={() => toggle(featured.slug)}
                tone="dark"
              />
            </div>
          </div>
        </motion.div>

        {/* items-start so expanding one card doesn't stretch every card in its row. */}
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((category, index) => {
            const iconStyle = iconStyles[index % iconStyles.length];
            return (
              <motion.div key={category.slug} variants={fadeUp}>
                <div className="group flex flex-col gap-4 rounded-(--radius-card) border border-border bg-white p-6 shadow-soft transition-shadow duration-300 ease-calm hover:shadow-elevated">
                  <span className={cn('flex h-11 w-11 items-center justify-center rounded-full', iconStyle.bg, iconStyle.text)}>
                    <category.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-h4 text-navy-deep">
                      <Link to={`/conditions/${category.slug}`} className="transition-colors hover:text-navy">
                        {category.title}
                      </Link>
                    </h3>
                    <p className="text-body-sm text-muted">{category.description}</p>
                  </div>

                  <AreasDisclosure
                    slug={category.slug}
                    titles={getAreaTitles(category.slug)}
                    isOpen={openSlugs.has(category.slug)}
                    onToggle={() => toggle(category.slug)}
                  />

                  <Link
                    to={`/conditions/${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-navy"
                  >
                    Learn More
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
