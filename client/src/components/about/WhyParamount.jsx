import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { whyParamount } from '../../data/aboutPage';
import { fadeUp } from '../../lib/motion';

// Mirrors <Introduction />'s two-column "Our Approach" layout — eyebrow +
// heading in the left column and supporting copy in the right column — so
// this section reads as a continuation of the same pattern rather than a
// standalone design.
export default function WhyParamount() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="blue-soft">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-eyebrow uppercase text-sage-deep font-semibold">{whyParamount.eyebrow}</span>
            <h2 className="text-h2 mt-3">{whyParamount.heading}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            {whyParamount.body.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
