import { motion, useReducedMotion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import coreValues from '../../data/values';
import { fadeUp, staggerContainer } from '../../lib/motion';

// Cycle through the site's pastel accent tokens for each card's icon badge
// and a matching top-accent border — sage, blue, and a soft gold wash echo
// the logo's navy / sage / blue / gold palette.
const badgeTints = ['bg-sage-soft', 'bg-blue-soft', 'bg-gold/15'];
const borderTints = ['border-t-sage', 'border-t-blue-accent', 'border-t-gold'];

export default function CoreValues() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section spacing="lg" background="sage-soft">
      <div className="flex flex-col gap-12">
        <SectionHeading align="center" title="Our Core Values" />

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {coreValues.map(({ icon: Icon, title, description }, index) => (
            <motion.div key={title} variants={fadeUp}>
              <Card
                variant="default"
                hover
                className={`h-full border-t-2 ${borderTints[index % borderTints.length]}`}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${badgeTints[index % badgeTints.length]}`}>
                  <Icon className="text-navy" size={20} aria-hidden="true" />
                </div>
                <h3 className="text-h4 mt-5">{title}</h3>
                <p className="text-body-sm text-muted mt-2 leading-relaxed">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
