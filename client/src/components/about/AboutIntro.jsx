import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { aboutIntro } from '../../data/aboutPage'; 
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function AboutIntro() {
  const shouldReduceMotion = useReducedMotion();
  const [lead, ...rest] = aboutIntro.paragraphs;

  return (
    <Section spacing="lg" background="white">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-8"
      >
        <motion.p
          variants={fadeUp}
          className="border-l-2 border-sage pl-6 text-body-lg font-medium text-navy-deep md:pl-8"
        >
          {lead}
        </motion.p>

        <div className="flex flex-col gap-5">
          {rest.map((paragraph) => (
            <motion.p key={paragraph} variants={fadeUp} className="text-body leading-relaxed text-muted">
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
