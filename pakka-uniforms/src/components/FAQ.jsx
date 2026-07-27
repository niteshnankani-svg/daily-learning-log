import { SITE } from '../config.js';
import { ChevronDownIcon } from './icons/UtilityIcons.jsx';

export default function FAQ() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-chalk-200 py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="container-page max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-signal-600">
          Questions buyers ask
        </p>
        <h2 id="faq-heading" className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-8 divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white">
          {SITE.faqs.map((faq) => (
            <details key={faq.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-navy-700 [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-navy-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
