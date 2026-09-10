import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { doctor } from '../../data/home';
import { fadeUp } from '../../lib/motion';

// Mirrors <Introduction />'s two-column "Our Approach" layout — eyebrow +
// heading in the left column, supporting copy in the right column, and a
// centered outline CTA below — so this section reads as a continuation of
// the same pattern rather than a standalone design.
export default function DoctorSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="warm">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-eyebrow uppercase text-sage-deep font-semibold">{doctor.eyebrow}</span>
            <h2 className="text-h2 mt-3">{doctor.heading}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            {doctor.body.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Button to={doctor.ctaLink} variant="outline" className="mx-auto no-underline">
          {doctor.cta}
        </Button>
      </motion.div>
    </Section>
  );
}
