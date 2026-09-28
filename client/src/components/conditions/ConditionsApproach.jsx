import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { defaultApproach } from '../../data/conditions';
import { fadeUp } from '../../lib/motion';

// Same "Our Approach" copy used on individual condition pages, shown on the
// Conditions We Treat overview in the site's two-column heading/body layout.
// Sage background keeps the page's color flow: warm hero → white → sage → navy CTA.
export default function ConditionsApproach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="sm" background="sage-soft">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-5">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">Our Approach</span>
          <h2 className="text-h2 mt-3">{defaultApproach.heading}</h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-5">
          {defaultApproach.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-body-lg text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
