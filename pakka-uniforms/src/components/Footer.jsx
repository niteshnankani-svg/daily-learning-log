import { SITE } from '../config.js';
import { WhatsAppIcon, PhoneIcon } from './icons/UtilityIcons.jsx';

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-12 text-navy-100">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">{SITE.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-navy-200">
            {SITE.legalName}
            <br />
            Bulk uniform sourcing, Pune — supplying school, corporate, hospital, hotel, industrial
            and petrol pump uniforms pan-India.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-khaki-400">Address</p>
          <address className="mt-2 text-sm not-italic leading-relaxed text-navy-200">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.line3}
          </address>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-khaki-400">Contact</p>
          <ul className="mt-2 space-y-2 text-sm text-navy-200">
            <li>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <PhoneIcon className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.waGeneralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-khaki-400">Registration</p>
          <ul className="mt-2 space-y-1 text-sm text-navy-200">
            <li>GST: {SITE.gst}</li>
            <li>Udyam: {SITE.udyam}</li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-navy-300">
        © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
