import { approach } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * A sequence, so it is set as one — a continuous vertical rule threading four
 * stages, each ending in the thing you actually receive.
 */
export default function Process() {
  return (
    <section id="approach" className="section border-t border-rule bg-ground-2">
      <div className="shell">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="display-2">{approach.title}</h2>
            <p className="lead">{approach.subtitle}</p>
          </div>
        </Reveal>

        <ol className="relative mt-16 md:mt-20">
          {/* The thread. */}
          <span
            aria-hidden
            className="absolute top-3 bottom-3 left-[7px] w-px bg-rule md:left-[calc(96px+7px)]"
          />

          {approach.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.05}>
              <div className="relative grid gap-x-12 gap-y-4 pb-14 pl-9 md:grid-cols-[96px_minmax(0,1.1fr)_minmax(0,0.85fr)] md:pl-0">
                <span
                  aria-hidden
                  className="absolute top-[9px] left-0 h-[15px] w-[15px] border border-signal bg-ground md:left-[96px]"
                />
                <span
                  aria-hidden
                  className="absolute top-[13px] left-1 h-[7px] w-[7px] bg-signal md:left-[100px]"
                />

                <span className="font-mono text-[12px] tracking-[0.11em] text-bone-3 md:pt-1">
                  {step.n}
                </span>

                <div className="md:pl-10">
                  <h3 className="font-display text-[1.6rem] leading-none font-semibold tracking-[-0.025em] md:text-[1.9rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[16.5px] leading-[1.68] text-bone-2">{step.body}</p>
                </div>

                <p className="border-t border-rule pt-3 text-[15px] leading-[1.62] text-bone-3 md:mt-1 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                  <span className="tag mb-2 block text-verdigris">Ends with</span>
                  {step.deliverable}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-2 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.18] font-semibold tracking-[-0.03em] md:ml-[136px]">
            {approach.statement.lead}{" "}
            <span className="text-signal">{approach.statement.accent}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
