import { SITE, waLink } from '../config.js';
import { CATEGORY_FIGURES } from './icons/UniformFigures.jsx';
import { WhatsAppIcon } from './icons/UtilityIcons.jsx';

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-chalk-200 py-16 sm:py-20" aria-labelledby="categories-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-signal-600">
            What we supply
          </p>
          <h2 id="categories-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            Uniform categories we manufacture &amp; supply pan-India
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Every category below ships with a written spec sheet and an approved sample as standard —
            not an upsell.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.categories.map((cat) => {
            const Figure = CATEGORY_FIGURES[cat.figure];
            return (
              <article
                key={cat.id}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="h-28 w-24 shrink-0">
                    <Figure className="h-full w-full" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">From</p>
                    <p className="font-display text-2xl font-bold text-navy-700">₹{cat.fromPrice}</p>
                    <p className="text-xs text-navy-400">per piece</p>
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-navy-700">{cat.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-600">{cat.blurb}</p>

                <dl className="mt-4 space-y-1.5 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy-700">MOQ:</dt>
                    <dd className="text-navy-600">{cat.moq}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy-700">Fabric:</dt>
                    <dd className="text-navy-600">{cat.fabrics.join(', ')}</dd>
                  </div>
                </dl>

                <a
                  href={waLink(cat.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Get {cat.name.split(' ')[0]} quote
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
