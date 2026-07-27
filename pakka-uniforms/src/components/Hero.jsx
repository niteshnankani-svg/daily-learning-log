import { SITE } from '../config.js';
import { WhatsAppIcon, CheckIcon } from './icons/UtilityIcons.jsx';

export default function Hero() {
  return (
    <section id="top" className="border-b border-navy-100/40 bg-chalk-100">
      <div className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-signal-600">
            Uniform sourcing, Pune — supplying pan-India
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-700 sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600 sm:text-xl">
            {SITE.subline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.waGeneralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 text-base font-semibold text-white shadow-md transition hover:bg-teal-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get a quote on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-navy-700 px-6 text-base font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white"
            >
              See how we work
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy-600">
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-4 w-4 text-teal-600" /> {SITE.yearsInTrade} years in the uniform trade
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-4 w-4 text-teal-600" /> GST &amp; Udyam registered
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon className="h-4 w-4 text-teal-600" /> Pan-India delivery
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5 sm:p-8">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-navy-400">
            What every Pakka order includes
          </p>
          <ol className="mt-5 space-y-5">
            <li className="flex gap-3 border-b border-chalk-300 pb-5">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-display font-semibold text-navy-700">Written specification</p>
                <p className="text-sm text-navy-600">Fabric, GSM, size chart and price locked in writing before production.</p>
              </div>
            </li>
            <li className="flex gap-3 border-b border-chalk-300 pb-5">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-display font-semibold text-navy-700">Approved sample</p>
                <p className="text-sm text-navy-600">Physical sample signed off by you before bulk fabric is cut.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-display font-semibold text-navy-700">One accountable contact</p>
                <p className="text-sm text-navy-600">A single person owns your order from quote to delivery, reachable on WhatsApp.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
