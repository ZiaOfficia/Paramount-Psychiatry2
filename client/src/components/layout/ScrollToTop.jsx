import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Every router navigation lands at the top of the destination page.
//
// Two things this works around:
//  - index.css sets `html { scroll-behavior: smooth }`, which turns a plain
//    scrollTo(0, 0) into an animated scroll starting from wherever the
//    previous page was. On touch devices any stray gesture during that
//    animation cancels it, leaving the new page stranded mid-scroll — so the
//    reset is forced to `instant` regardless of the global setting.
//  - Keying on pathname alone misses links to the page you're already on
//    (tapping the current section in the mobile menu), which navigate without
//    changing it. location.key changes on every navigation, push or replace.
export default function ScrollToTop() {
  const { key, hash } = useLocation();

  useEffect(() => {
    // Leave in-page anchors (#section) to scroll to their own target.
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [key, hash]);

  return null;
}
