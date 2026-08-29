import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import AppointmentButton from '../shared/AppointmentButton';
import AboutMenuPanel from './AboutMenuPanel';
import { primaryNav } from '../../data/navigation';
import { cn } from '../../lib/cn';

// Panels keyed by the primaryNav item's `megaMenu` value. Desktop dropdown
// width varies with each panel's content.
const megaMenuPanels = {
  about: { Panel: AboutMenuPanel, width: 'w-80 max-w-[90vw]' },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Which desktop mega-menu is open: null | 'conditions' | 'services'.
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  // Which mobile accordion is open: null | 'conditions' | 'services'.
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const navRef = useRef(null);

  // Close every menu on navigation. Keyed on location.key rather than
  // pathname so that tapping the page you're already on still closes the
  // mobile menu instead of leaving it open over the page.
  useEffect(() => {
    setOpen(false);
    setOpenMegaMenu(null);
    setOpenMobileMenu(null);
  }, [location.key]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenMegaMenu(null);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    function onClickOutside(e) {
      if (openMegaMenu && navRef.current && !navRef.current.contains(e.target)) {
        setOpenMegaMenu(null);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [openMegaMenu]);

  return (
    <header
      ref={navRef}
      className={cn(
        'sticky top-0 z-50 bg-navy-deep text-white backdrop-blur border-b transition-shadow duration-300',
        scrolled ? 'border-white/10 shadow-soft' : 'border-transparent',
      )}
    >
      {/*
        The desktop nav (6 items + CTA) needs ~1370px of unbroken content
        width at the current type scale — wider than the site's shared
        Container (max-w-340 = 1360px, shared with narrower body content).
        So this row uses its own wider cap (max-w-360 = 1440px) instead of
        <Container>, and the desktop nav only renders at min-[1440px] —
        below that, content would wrap (verified empirically), so the
        existing hamburger menu takes over instead, exactly as it already
        does on tablet/mobile.
      */}
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center select-none" aria-label="Paramount Psychiatry — home">
          <img
            src="/images/navimage.png"
            alt="Paramount Psychiatry"
            className="h-auto w-12 object-contain md:w-14"
          />
        </Link>

        <div className="hidden min-[1440px]:flex items-center gap-12">
          <nav aria-label="Primary" className="flex shrink-0 items-center gap-8">
            {primaryNav.map((item) => {
            if (!item.megaMenu) {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'text-body-sm font-medium text-white/80 hover:text-white transition-colors duration-200',
                      isActive && 'text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              );
            }

            const isOpen = openMegaMenu === item.megaMenu;
            const { Panel, width } = megaMenuPanels[item.megaMenu];

            return (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setOpenMegaMenu(item.megaMenu)}
                onMouseLeave={() => setOpenMegaMenu((cur) => (cur === item.megaMenu ? null : cur))}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpenMegaMenu((cur) => (cur === item.megaMenu ? null : cur));
                  }
                }}
              >
                <button
                  type="button"
                  className={cn(
                    'flex items-center gap-1 text-body-sm font-medium text-white/80 hover:text-white transition-colors duration-200',
                    isOpen && 'text-white',
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenMegaMenu((cur) => (cur === item.megaMenu ? null : item.megaMenu))}
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    aria-hidden="true"
                    className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        'absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2 rounded-2xl border border-border bg-white p-8 shadow-elevated',
                        width,
                      )}
                    >
                      <Panel onNavigate={() => setOpenMegaMenu(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

          <AppointmentButton variant="secondary" size="sm" className="shrink-0" />
        </div>

        <button
          type="button"
          className="min-[1440px]:hidden inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          'min-[1440px]:hidden overflow-y-auto border-t border-border bg-white-warm transition-[max-height,opacity] duration-300 ease-calm',
          open ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4 sm:px-6">
          {primaryNav.map((item) => {
            if (!item.megaMenu) {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-3 text-body font-medium text-charcoal hover:bg-navy/5 hover:text-navy transition-colors',
                      isActive && 'text-navy bg-navy/5',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              );
            }

            const isOpen = openMobileMenu === item.megaMenu;
            const { Panel } = megaMenuPanels[item.megaMenu];

            return (
              <div key={item.path} className="flex flex-col">
                <button
                  type="button"
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-body font-medium text-charcoal hover:bg-navy/5 hover:text-navy transition-colors"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMobileMenu((cur) => (cur === item.megaMenu ? null : item.megaMenu))}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
                  />
                </button>
                <div
                  inert={!isOpen}
                  className={cn(
                    'overflow-hidden transition-[max-height,opacity] duration-300 ease-calm px-3',
                    isOpen ? 'max-h-160 opacity-100 py-3' : 'max-h-0 opacity-0',
                  )}
                >
                  <Panel variant="mobile" onNavigate={() => setOpen(false)} />
                </div>
              </div>
            );
          })}
          <AppointmentButton className="mt-3 w-full justify-center" />
        </nav>
      </div>
    </header>
  );
}
