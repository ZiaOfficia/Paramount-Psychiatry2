import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { defaultApproach } from '../../data/conditions';
import { fadeUp } from '../../lib/motion';

// Same "Our Approach" block used on individual condition pages, shown on the
// Conditions We Treat overview with the shared default copy.
export default function ConditionsApproach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="md" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="flex flex-col gap-5 max-w-3xl"
      >
        <SectionHeading eyebrow="Our Approach" title={defaultApproach.heading} />
        {defaultApproach.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-charcoal">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </Section>
  );
}
