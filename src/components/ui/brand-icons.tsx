import type { SVGProps } from "react";

/**
 * Instagram glyph.
 * The recent `lucide-react` releases ship camera-style social icons behind
 * the `Lucide*` namespace, but we keep a hand-rolled camera mark here for
 * visual consistency with the NODUS monochrome design system.
 */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
