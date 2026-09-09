import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/motion';
import { cn } from '../../lib/cn';

// Icon-circle color cycles through the three supporting brand tints — sage,
// blue, warm gold — in equal rotation, same treatment for all three.
const iconStyles = [
  { bg: 'bg-sage-soft', text: 'text-sage-deep' },
  { bg: 'bg-blue-soft', text: 'text-navy' },
  { bg: 'bg-gold/15', text: 'text-gold' },
];

// Editorial resource-card grid for the Patient Resources hub — same
// bordered-card, hover-lift language as the "Related" links in
// <ConditionPage />, extended with an icon and description per card.
// `items`: [{ icon, title, description, path }]
// The `lg` column count follows the item count (capped at 3) so a
// two-item grid (e.g. a "Related Resources" pair) doesn't leave an
// empty third slot on wide screens.
export default function ResourceGrid({ items }) {
  const shouldReduceMotion = useReducedMotion();
  const lgCols = Math.min(items.length, 3);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className={cn(
        'grid grid-cols-1 gap-5 sm:grid-cols-2',
        lgCols === 1 && 'lg:grid-cols-1',
        lgCols === 2 && 'lg:grid-cols-2',
        lgCols >= 3 && 'lg:grid-cols-3',
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const iconStyle = iconStyles[index % iconStyles.length];
        return (
          <motion.div key={item.path} variants={fadeUp}>
            <Link
              to={item.path}
              className="group flex h-full flex-col gap-4 rounded-(--radius-card) border border-border bg-white p-6 shadow-soft transition-all duration-300 ease-calm hover:-translate-y-1 hover:shadow-elevated"
            >
              {Icon && (
                <span className={cn('flex h-11 w-11 items-center justify-center rounded-full', iconStyle.bg, iconStyle.text)}>
                  <Icon size={20} aria-hidden="true" />
                </span>
              )}
              <div className="flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 text-h4 text-navy-deep transition-colors group-hover:text-navy">
                  {item.title}
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-sage-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
                {item.description && <p className="text-body-sm text-muted">{item.description}</p>}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
