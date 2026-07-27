import { SITE } from '../config.js';

const workshopPhotos = [
  'Fabric inspection bay',
  'Cutting floor',
  'Stitching line',
  'Packing & dispatch',
];

export default function TrustBlock() {
  return (
    <section id="trust" className="bg-chalk-200 py-16 sm:py-20" aria-labelledby="trust-heading">
      <div className="container-page">
        <h2 id="trust-heading" className="font-display text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
          Registered, in trade, and easy to verify
        </h2>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-navy-100 bg-white p-5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-navy-400">GST Number</dt>
            <dd className="mt-1 font-display text-lg font-bold text-navy-700">{SITE.gst}</dd>
          </div>
          <div className="rounded-xl border border-navy-100 bg-white p-5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-navy-400">Udyam / MSME Registration</dt>
            <dd className="mt-1 font-display text-lg font-bold text-navy-700">{SITE.udyam}</dd>
          </div>
          <div className="rounded-xl border border-navy-100 bg-white p-5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-navy-400">In the uniform trade</dt>
            <dd className="mt-1 font-display text-lg font-bold text-navy-700">{SITE.yearsInTrade} years</dd>
          </div>
        </dl>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
            Trusted by institutional buyers
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {SITE.clientLogos.map((name) => (
              <div
                key={name}
                role="img"
                aria-label={`${name} logo placeholder`}
                className="flex h-16 items-center justify-center rounded-lg border border-navy-100 bg-white text-xs font-semibold text-navy-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-xl border border-navy-100 bg-white p-6" role="img" aria-label="Google reviews widget placeholder showing a 4.8 out of 5 average rating">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Google Reviews</p>
            <p className="mt-2 font-display text-3xl font-bold text-navy-700" aria-hidden="true">
              4.8 <span className="text-base font-medium text-navy-400">/ 5</span>
            </p>
            <p className="mt-1 text-sm text-navy-600" aria-hidden="true">★★★★★ &nbsp;based on institutional buyer reviews</p>
            <p className="mt-3 text-xs text-navy-400">Embed placeholder — connect Google Business Profile before launch.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Inside the workshop</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {workshopPhotos.map((label) => (
                <div
                  key={label}
                  role="img"
                  aria-label={`Photo placeholder: ${label}`}
                  className="flex aspect-square items-center justify-center rounded-lg bg-navy-100 p-2 text-center text-[11px] font-medium text-navy-400"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
