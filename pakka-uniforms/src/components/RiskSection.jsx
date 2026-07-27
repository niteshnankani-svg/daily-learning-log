import { SITE } from '../config.js';
import { CheckIcon } from './icons/UtilityIcons.jsx';

export default function RiskSection() {
  return (
    <section id="how-we-protect-your-order" className="fabric-weave bg-navy-700 py-16 text-white sm:py-20" aria-labelledby="risk-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-khaki-400">
            Why buyers choose Pakka
          </p>
          <h2 id="risk-heading" className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Where uniform orders go wrong
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">
            Nobody who places a uniform order should have to gamble on whether it arrives right. Here
            is exactly where bulk orders usually fail — and what we do differently on every order.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SITE.risks.map((risk) => (
            <article
              key={risk.title}
              className="rounded-xl border border-white/10 bg-navy-800/60 p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-signal-600">{risk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">{risk.problem}</p>
              <div className="mt-4 flex gap-2.5 border-t border-white/10 pt-4">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <p className="text-sm font-medium leading-relaxed text-white">{risk.safeguard}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
