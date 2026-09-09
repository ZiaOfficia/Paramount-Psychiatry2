// Outline-style social icons matching lucide-react's stroke API (lucide
// dropped brand marks from its set, so these small local equivalents fill
// the gap) — same 24x24 grid, round caps/joins, and `size`/`className`
// props so they drop into <Icon size={..} className={..} /> call sites
// exactly like any lucide icon.
function IconBase({ size = 24, className, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </IconBase>
  );
}

export function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </IconBase>
  );
}

export function LinkedInIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M15 9a5 5 0 0 1 5 5v6h-4v-6a1 1 0 0 0-2 0v6h-4V9h4v1.2A5 5 0 0 1 15 9z" />
      <rect x="3" y="9" width="4" height="11" />
      <circle cx="5" cy="4.5" r="2" />
    </IconBase>
  );
}

export function SnapchatIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5c-3.1 0-5.2 2.1-5.2 5.4 0 .7-.1 1.5-.5 2.2-.3.5-.8 1-1.5 1.3-.3.1-.4.5-.2.8.2.4.8.6 1.7.7.4.1.7.3.8.7.1.5.5.7 1.2.6.4-.1.8-.1 1.2.2.7.5 1.5.9 2.5.9s1.8-.4 2.5-.9c.4-.3.8-.3 1.2-.2.7.1 1.1-.1 1.2-.6.1-.4.4-.6.8-.7.9-.1 1.5-.3 1.7-.7.2-.3.1-.7-.2-.8-.7-.3-1.2-.8-1.5-1.3-.4-.7-.5-1.5-.5-2.2 0-3.3-2.1-5.4-5.2-5.4z" />
      <path d="M8.5 16.7c.8.5 1.8.8 3.5.8s2.7-.3 3.5-.8" />
    </IconBase>
  );
}

export function XIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 4l14 16M19 4L5 20" />
    </IconBase>
  );
}
