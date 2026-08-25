import Link from "next/link"
import { profile } from "@/content/profile"

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="shell flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-[17px] font-semibold tracking-[-0.01em] text-bone">
            {profile.name}
          </p>
          <p className="mt-2 max-w-xs text-[15px] leading-snug text-bone-3">{profile.role}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 md:items-end">
          <Link
            href="/contact"
            className="font-mono text-[14px] tracking-[0.04em] text-bone-2 transition-colors hover:text-signal"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="font-mono text-[14px] tracking-[0.04em] text-bone-2 transition-colors hover:text-signal"
          >
            About
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[14px] tracking-[0.04em] text-bone-2 transition-colors hover:text-signal"
          >
            {profile.email}
          </a>
          {profile.linkedin ? (
            <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-[14px] tracking-[0.04em] text-bone-2 transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
          ) : null}
        </nav>
      </div>

      <div className="border-t border-rule">
        <div className="shell flex flex-col gap-2 py-6 text-[14px] text-bone-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-signal">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-signal">
              Terms
            </Link>
            <span>{profile.location}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
