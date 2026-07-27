// Flat, two-colour vector figures — one signature illustration per uniform category.
// `garment` sets the uniform colour; skin/line tone is fixed so every figure reads as one family.

const SKIN = '#E7C9A2';
const LINE = '#0F2340';

function FigureBase({ garment, children, viewBox = '0 0 100 140' }) {
  return (
    <svg viewBox={viewBox} className="h-full w-full" role="presentation" aria-hidden="true" focusable="false">
      <g stroke={LINE} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        {children}
      </g>
    </svg>
  );
}

export function SchoolFigure({ className = '' }) {
  const boy = '#1E6E68';
  const girl = '#D9622B';
  return (
    <div className={className}>
      <svg viewBox="0 0 160 140" className="h-full w-full" role="presentation" aria-hidden="true" focusable="false">
        <g stroke={LINE} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
          {/* schoolboy: shirt + shorts */}
          <circle cx="46" cy="30" r="13" fill={SKIN} />
          <rect x="41" y="42" width="10" height="7" fill={SKIN} />
          <path d="M28 100 L30 62 Q46 52 62 62 L64 100 Z" fill="#F6F4EE" />
          <path d="M35 62 L46 72 L57 62" fill="none" />
          <rect x="30" y="60" width="8" height="26" rx="3" fill={boy} />
          <rect x="54" y="60" width="8" height="26" rx="3" fill={boy} />
          <rect x="33" y="84" width="12" height="24" rx="2" fill={boy} />
          <rect x="47" y="84" width="12" height="24" rx="2" fill={boy} />
          <rect x="30" y="108" width="8" height="6" rx="1.5" fill={LINE} />
          <rect x="52" y="108" width="8" height="6" rx="1.5" fill={LINE} />

          {/* schoolgirl: top + pinafore */}
          <circle cx="112" cy="28" r="13" fill={SKIN} />
          <rect x="107" y="40" width="10" height="7" fill={SKIN} />
          <path d="M96 60 Q112 50 128 60 L131 70 L124 72 L120 62 L120 112 L104 112 L104 62 L100 72 L93 70 Z" fill={girl} />
          <path d="M104 62 L112 72 L120 62" fill="none" stroke="#F6F4EE" />
          <rect x="105" y="112" width="6" height="18" rx="2" fill={SKIN} />
          <rect x="113" y="112" width="6" height="18" rx="2" fill={SKIN} />
          <rect x="102" y="128" width="10" height="6" rx="1.5" fill={LINE} />
          <rect x="112" y="128" width="10" height="6" rx="1.5" fill={LINE} />
        </g>
      </svg>
    </div>
  );
}

export function CorporateFigure({ className = '' }) {
  const suit = '#0F2340';
  const tie = '#D9622B';
  return (
    <div className={className}>
      <FigureBase>
        <circle cx="50" cy="26" r="14" fill={SKIN} />
        <rect x="44" y="38" width="12" height="8" fill={SKIN} />
        <path d="M30 100 L33 54 Q50 44 67 54 L70 100 Z" fill={suit} />
        <path d="M42 54 L50 66 L58 54 L50 100" fill="none" stroke="#F6F4EE" strokeWidth="1.5" />
        <path d="M47 56 L50 64 L53 56 L50 96 Z" fill={tie} stroke="none" />
        <rect x="33" y="52" width="9" height="30" rx="4" fill={suit} />
        <rect x="58" y="52" width="9" height="30" rx="4" fill={suit} />
        <rect x="36" y="98" width="12" height="30" rx="2" fill={suit} />
        <rect x="52" y="98" width="12" height="30" rx="2" fill={suit} />
        <rect x="34" y="126" width="14" height="6" rx="1.5" fill={LINE} />
        <rect x="52" y="126" width="14" height="6" rx="1.5" fill={LINE} />
      </FigureBase>
    </div>
  );
}

export function HospitalFigure({ className = '' }) {
  const scrub = '#1E6E68';
  return (
    <div className={className}>
      <FigureBase>
        <circle cx="50" cy="26" r="14" fill={SKIN} />
        <path d="M38 15 Q50 6 62 15 L62 18 Q50 12 38 18 Z" fill={scrub} />
        <rect x="44" y="38" width="12" height="8" fill={SKIN} />
        <path d="M31 100 L34 54 Q50 46 66 54 L69 100 Z" fill={scrub} />
        <path d="M40 56 L50 68 L60 56" fill="none" stroke="#F6F4EE" />
        <circle cx="50" cy="76" r="6" fill="none" stroke="#F6F4EE" strokeWidth="1.5" />
        <rect x="34" y="52" width="9" height="28" rx="4" fill={scrub} />
        <rect x="57" y="52" width="9" height="28" rx="4" fill={scrub} />
        <rect x="36" y="98" width="13" height="30" rx="2" fill={scrub} />
        <rect x="51" y="98" width="13" height="30" rx="2" fill={scrub} />
        <rect x="34" y="126" width="15" height="6" rx="1.5" fill={LINE} />
        <rect x="51" y="126" width="15" height="6" rx="1.5" fill={LINE} />
      </FigureBase>
    </div>
  );
}

export function HotelFigure({ className = '' }) {
  const uniform = '#0F2340';
  const vest = '#B7A369';
  return (
    <div className={className}>
      <FigureBase>
        <circle cx="50" cy="26" r="14" fill={SKIN} />
        <rect x="44" y="38" width="12" height="8" fill={SKIN} />
        <path d="M31 100 L34 54 Q50 45 66 54 L69 100 Z" fill={uniform} />
        <path d="M40 55 L44 100 L56 100 L60 55 Z" fill={vest} />
        <path d="M47 56 L50 62 L53 56" fill="none" stroke="#F6F4EE" strokeWidth="2" />
        <rect x="34" y="52" width="9" height="28" rx="4" fill={uniform} />
        <rect x="57" y="52" width="9" height="28" rx="4" fill={uniform} />
        <rect x="36" y="98" width="13" height="30" rx="2" fill={uniform} />
        <rect x="51" y="98" width="13" height="30" rx="2" fill={uniform} />
        <rect x="34" y="126" width="15" height="6" rx="1.5" fill={LINE} />
        <rect x="51" y="126" width="15" height="6" rx="1.5" fill={LINE} />
      </FigureBase>
    </div>
  );
}

export function IndustrialFigure({ className = '' }) {
  const overall = '#B7A369';
  const hat = '#D9622B';
  return (
    <div className={className}>
      <FigureBase>
        <circle cx="50" cy="30" r="13" fill={SKIN} />
        <path d="M35 21 Q50 8 65 21 L65 24 L35 24 Z" fill={hat} />
        <rect x="44" y="41" width="12" height="7" fill={SKIN} />
        <path d="M29 100 L33 52 Q50 44 67 52 L71 100 Z" fill={overall} />
        <rect x="42" y="58" width="16" height="12" rx="2" fill="none" stroke="#0F2340" strokeWidth="1.5" />
        <rect x="32" y="50" width="9" height="30" rx="4" fill={overall} />
        <rect x="59" y="50" width="9" height="30" rx="4" fill={overall} />
        <rect x="35" y="98" width="13" height="30" rx="2" fill={overall} />
        <rect x="52" y="98" width="13" height="30" rx="2" fill={overall} />
        <rect x="33" y="126" width="15" height="6" rx="1.5" fill={LINE} />
        <rect x="52" y="126" width="15" height="6" rx="1.5" fill={LINE} />
      </FigureBase>
    </div>
  );
}

export function PetrolPumpFigure({ className = '' }) {
  const uniform = '#0F2340';
  const cap = '#D9622B';
  return (
    <div className={className}>
      <FigureBase>
        <circle cx="48" cy="28" r="13" fill={SKIN} />
        <path d="M35 21 Q48 12 61 21 L61 24 Q48 20 35 24 Z" fill={cap} />
        <rect x="34" y="17" width="14" height="4" rx="1" fill={cap} />
        <rect x="42" y="39" width="12" height="7" fill={SKIN} />
        <path d="M29 100 L32 52 Q48 44 64 52 L67 100 Z" fill={uniform} />
        <rect x="41" y="60" width="6" height="6" fill={cap} />
        <rect x="31" y="50" width="9" height="28" rx="4" fill={uniform} />
        <path d="M66 62 L78 74" stroke={LINE} strokeWidth="3" />
        <circle cx="80" cy="76" r="4" fill={cap} stroke="none" />
        <rect x="33" y="98" width="13" height="30" rx="2" fill={uniform} />
        <rect x="49" y="98" width="13" height="30" rx="2" fill={uniform} />
        <rect x="31" y="126" width="15" height="6" rx="1.5" fill={LINE} />
        <rect x="49" y="126" width="15" height="6" rx="1.5" fill={LINE} />
      </FigureBase>
    </div>
  );
}

export const CATEGORY_FIGURES = {
  school: SchoolFigure,
  corporate: CorporateFigure,
  hospital: HospitalFigure,
  hotel: HotelFigure,
  industrial: IndustrialFigure,
  petrolpump: PetrolPumpFigure,
};
