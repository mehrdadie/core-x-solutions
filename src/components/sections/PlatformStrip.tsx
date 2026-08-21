import { platforms } from "@/content/profile"

/**
 * A spec sheet, not a logo carousel. Platforms are grouped by where they sit in
 * the chain, so the strip states a taxonomy instead of scrolling sixteen
 * identical cells past the reader.
 */
export default function PlatformStrip() {
  return (
    <section aria-label="Platforms we work with" className="border-y border-rule bg-ground-2">
      <div className="shell flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-7">
        <h2 className="font-display text-[19px] font-semibold text-bone">{platforms.title}</h2>
        <p className="tag">{platforms.note}</p>
      </div>

      <div className="shell grid grid-cols-2 gap-x-8 gap-y-9 border-t border-rule py-9 sm:grid-cols-4 lg:grid-cols-8">
        {platforms.groups.map((group) => (
          <section key={group.kind} aria-label={group.kind}>
            <h3 className="tag border-b border-rule pb-2.5 text-signal">{group.kind}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((name) => (
                <li key={name} className="font-display text-[16px] font-medium text-bone-2">
                  {name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
