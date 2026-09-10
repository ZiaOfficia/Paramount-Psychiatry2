import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import { educationTraining, credentials } from '../../data/drTandonPage';
import { fadeUp, staggerContainer } from '../../lib/motion';

// Combines Education & Training with Board Certification & Research into a
// single two-column section, following the same bordered-column pattern as
// <MissionVision /> on the About page (eyebrow + serif statement per column).
export default function EducationCredentials() {
  const shouldReduceMotion = useReducedMotion();
  const credentialRows = [credentials.boardCertification, credentials.research];

  return (
    <Section spacing="lg" background="sage-soft">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <motion.div variants={fadeUp} className="border-l-2 border-navy pl-6 md:pl-8">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{educationTraining.eyebrow}</span>
          <p className="text-h3 mt-3 font-display text-navy-deep">{educationTraining.heading}</p>

          <div className="mt-6 flex flex-col gap-4">
            {educationTraining.timeline.map(({ title, institution }) => (
              <div key={title}>
                <p className="text-body font-medium text-navy-deep">{title}</p>
                <p className="text-body-sm text-muted mt-0.5">{institution}</p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-muted mt-6">{educationTraining.note}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="border-l-2 border-sage pl-6 md:pl-8">
          <span className="text-eyebrow uppercase text-sage-deep font-semibold">{credentials.eyebrow}</span>
          <p className="text-h3 mt-3 font-display text-navy-deep">Board certification and research.</p>

          <div className="mt-6 flex flex-col gap-4">
            {credentialRows.map(({ label }) => (
              <p key={label} className="text-body-sm text-muted">
                {label}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
