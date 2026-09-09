import { socialLinks } from '../../data/social';

const iconClasses = 'flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft text-navy-deep transition-colors';

// Mirrors the footer's social treatment (see data/social.js — hrefs are
// intentionally empty until real account URLs are provided) but sized up as
// a standalone section rather than a footer aside.
export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4" aria-label="Social media">
      {socialLinks.map(({ name, href, Icon }) =>
        href ? (
          <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className={`${iconClasses} hover:bg-sage`}>
            <Icon size={22} aria-hidden="true" />
          </a>
        ) : (
          <span key={name} aria-label={`${name} (coming soon)`} className={`${iconClasses} opacity-60`}>
            <Icon size={22} aria-hidden="true" />
          </span>
        ),
      )}
    </div>
  );
}
