import { SITE } from '../config.js';

export default function HowItWorks() {
  return (
    <section id="process" className="fabric-weave bg-navy-800 py-16 text-white sm:py-20" aria-labelledby="process-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-khaki-400">
            The process
          </p>
          <h2 id="process-heading" className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How ordering works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">
            Four steps, in this order, every time. No step is skipped to save a day.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SITE.steps.map((step, i) => (
            <li key={step.n} className="relative rounded-xl border border-white/10 bg-navy-700/60 p-6">
              <span className="font-display text-4xl font-bold tabular-nums text-white/15">{step.n}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">{step.body}</p>
              {i < SITE.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 font-display text-2xl text-white/20 lg:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
