/**
 * Site-wide announcement bar.
 *
 * Fixed strip rendered above the floating nav on every page. Carries the
 * owner-approved notice that agent.tangison.com (Tangison Agent) is being
 * discontinued and that the tangison.com website is being restructured
 * and rebuilt.
 *
 * role="status" makes assistive technology announce it politely on page
 * load without interrupting the page content.
 *
 * Heights are driven by --announce-h-mobile / --announce-h in globals.css
 * so the nav and main padding offsets stay in sync with the bar itself.
 */
export function AnnouncementBar() {
  return (
    <div
      role="status"
      className="fixed top-0 left-0 right-0 z-40 flex h-[var(--announce-h-mobile)] items-center justify-center bg-[var(--ink)] px-4 text-center md:h-[var(--announce-h)]"
    >
      <p className="text-[13px] leading-[1.35] text-[var(--bg)]">
        <span
          aria-hidden="true"
          className="mr-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--bg)]/60"
        >
          Notice
        </span>
        agent.tangison.com is being discontinued. tangison.com is being
        restructured and rebuilt.
      </p>
    </div>
  );
}
