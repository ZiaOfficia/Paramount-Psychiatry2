import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import { fadeUp } from '../../lib/motion';

export default function PolicySection({
  id,
  heading,
  paragraphs = [],
  bullets,
  nestedBullets,
  closingParagraphs,
  subheading,
  subparagraphs,
  subheading2,
  subparagraphs2,
  finalParagraph,
  link,
  hideDivider = false,
  background = 'white',
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id={id} spacing="md" background={background} className="scroll-mt-24">
      <motion.div
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2">{heading}</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
              <p key={`${heading}-paragraph-${index}`} className="text-body-lg text-muted whitespace-pre-line">
                {paragraph}
              </p>
            ))}

            {subheading && <h3 className="text-h3 text-navy-deep">{subheading}</h3>}
            {subparagraphs &&
              subparagraphs.map((paragraph, index) => (
                <p key={`${heading}-subparagraph-${index}`} className="text-body-lg text-muted whitespace-pre-line">
                  {paragraph}
                </p>
              ))}

            {subheading2 && <h3 className="text-h3 text-navy-deep">{subheading2}</h3>}
            {subparagraphs2 &&
              subparagraphs2.map((paragraph, index) => (
                <p key={`${heading}-subparagraph2-${index}`} className="text-body-lg text-muted whitespace-pre-line">
                  {paragraph}
                </p>
              ))}

            {bullets && (
              <ul className="list-disc space-y-2 pl-6 text-body-lg text-muted">
                {bullets.map((item, bulletIndex) => (
                  <li key={`${heading}-bullet-${bulletIndex}`}>{item}</li>
                ))}
              </ul>
            )}

            {nestedBullets && (
              <ul className="list-disc space-y-2 pl-10 text-body-lg text-muted">
                {nestedBullets.map((item, index) => (
                  <li key={`${heading}-nested-${index}`}>{item}</li>
                ))}
              </ul>
            )}

            {closingParagraphs &&
              closingParagraphs.map((paragraph, index) => (
                <p key={`${heading}-closing-${index}`} className="text-body-lg text-muted whitespace-pre-line">
                  {paragraph}
                </p>
              ))}

            {finalParagraph && (
              <p className="text-body-lg text-muted whitespace-pre-line">{finalParagraph}</p>
            )}

            {link && (
              <Link
                to={link.path}
                className="group inline-flex w-fit items-center gap-1.5 text-body-sm font-medium text-navy hover:text-navy-deep"
              >
                {link.label}
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

        <div className={hideDivider ? 'pt-10' : 'border-t border-border pt-10'} aria-hidden="true" />
      </motion.div>
    </Section>
  );
}
