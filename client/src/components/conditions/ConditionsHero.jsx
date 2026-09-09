import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Breadcrumbs from '../shared/Breadcrumbs';
import { conditionsHero } from '../../data/conditions';
import { fadeUp } from '../../lib/motion';

export default function ConditionsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="xl" background="warm" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-[58%_42%_36%_64%/60%_38%_62%_40%] bg-sage-soft opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-32 h-64 w-64 rounded-[42%_58%_60%_40%/38%_62%_38%_62%] bg-blue-soft opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-6 h-16 w-16 rounded-[38%_62%_58%_42%/62%_38%_58%_42%] bg-navy-deep/10"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          className="flex max-w-2xl flex-col gap-6 lg:col-span-7"
        >
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Conditions We Treat' }]} />
          <h1 className="text-display text-navy-deep">{conditionsHero.headline}</h1>
          <p className="text-body-lg text-muted">{conditionsHero.subcopy}</p>
        </motion.div>

        <motion.img
          src="/images/sketch/ConditionsWeTreat.png"
          alt=""
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden h-auto w-full lg:col-span-5 lg:-ml-20 lg:block"
        />
      </div>
    </Section>
  );
}
