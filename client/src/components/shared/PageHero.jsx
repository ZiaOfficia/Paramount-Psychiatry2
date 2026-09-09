import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Breadcrumbs from './Breadcrumbs';
import HeroBloom from '../decor/HeroBloom';
import { fadeUp } from '../../lib/motion';

// Shared hero for simple content pages (Insurance & Fees, Patient Resources
// and its sub-pages, FAQs, Appointment) — same visual language as the hero
// embedded in <ConditionPage />, extracted so these pages don't each redefine it.
// `crumbs`: [{ label, path? }] — full breadcrumb trail including "Home" and the current page.
// `illustration`: HeroBloom variant — defaults to the general "openSky"
// scene for informational pages; callers with a more specific theme
// (Appointment, Practice Policies, Services) pass their own variant.
// `sketch`: Optional path to a sketch image to display instead of HeroBloom.
// `sketchClassName`: Overrides the sketch image's size (default max-w-sm) —
// for callers whose artwork should render larger than the shared default.
export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  illustration = 'openSky',
  sketch,
  sketchClassName = 'max-w-sm',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-sage-soft opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-6 h-16 w-16 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] bg-navy-deep/10"
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex max-w-2xl flex-col gap-6 lg:col-span-7"
        >
          <Breadcrumbs items={crumbs} />
          {eyebrow && <span className="text-eyebrow uppercase text-sage-deep font-semibold">{eyebrow}</span>}
          <h1 className="text-display text-navy-deep">{title}</h1>
          {intro && <p className="text-body-lg text-muted">{intro}</p>}
        </motion.div>

        {sketch ? (
          <motion.img
            src={sketch}
            alt=""
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`hidden h-auto w-full ${sketchClassName} lg:col-span-5 lg:block`}
          />
        ) : (
          <HeroBloom variant={illustration} className="hidden lg:col-span-5 lg:block" />
        )}
      </div>
    </Section>
  );
}
