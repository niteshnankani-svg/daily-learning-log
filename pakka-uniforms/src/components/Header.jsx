import { SITE } from '../config.js';
import { PhoneIcon, WhatsAppIcon } from './icons/UtilityIcons.jsx';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/40 bg-chalk-100/95 backdrop-blur supports-[backdrop-filter]:bg-chalk-100/90">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight text-navy-700">
          {SITE.name}
          <span className="ml-2 hidden text-xs font-medium tracking-normal text-navy-400 sm:inline">
            Uniform Suppliers · Pune
          </span>
        </a>

        <nav aria-label="Quick contact" className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition hover:bg-navy-700 hover:text-white sm:h-11 sm:w-auto sm:gap-2 sm:px-4"
            aria-label={`Call PAKKA at ${SITE.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="hidden sm:inline text-sm font-semibold">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={SITE.waGeneralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-teal-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
