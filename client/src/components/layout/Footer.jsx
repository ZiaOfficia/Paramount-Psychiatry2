import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Info } from 'lucide-react';
import Logo from '../shared/Logo';
import Container from '../ui/Container';
import site from '../../data/site';
import { emergencyNotice } from '../../data/home';
import { primaryNav } from '../../data/navigation';
import { socialLinks } from '../../data/social';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Emergency notice — calm, informational, not alarming */}
      <div className="border-b border-white/10 bg-disclaimer">
        <Container className="py-3">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-white/70">
            <Info size={14} className="shrink-0 text-white/50" aria-hidden="true" />
            <span>
              {emergencyNotice.statement} For emergencies: {emergencyNotice.instructions.join(' · ')}.{' '}
              {emergencyNotice.note}
            </span>
          </p>
        </Container>
      </div>

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo dark />
            <p className="text-body-sm text-white/70 max-w-xs">{site.tagline}</p>

            {/* Social icons — placeholders until account URLs are provided; see data/social.js */}
            <div className="flex items-center gap-4 pt-1" aria-label="Social media">
              {socialLinks.map(({ name, href, Icon }) =>
                href ? (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                ) : (
                  <span key={name} aria-label={`${name} (coming soon)`} className="text-white/60">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                ),
              )}
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <span className="text-eyebrow uppercase text-white/50 font-semibold mb-1">Navigation</span>
            {primaryNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-body-sm text-white/80 hover:text-white transition-colors w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-eyebrow uppercase text-white/50 font-semibold">Contact</span>
            <ul className="flex flex-col gap-3 text-body-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/60">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/practice-policies#privacy" className="text-caption text-white/60 hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="h-1 w-1 rounded-full bg-lavender-accent" aria-hidden="true" />
            <Link to="/practice-policies" className="text-caption text-white/60 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
