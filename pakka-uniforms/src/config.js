// Single source of truth for every editable business fact on the site.
// Replace placeholder values (phone, GST, address, prices) with real ones before launch.

const WHATSAPP_NUMBER = '919822012345'; // country code + number, no plus/spaces

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: 'PAKKA',
  legalName: 'Pakka Uniform Suppliers',
  tagline: 'Pakka order. Pakka delivery.',
  subline:
    'Written specs. Approved samples. One person accountable from order to delivery. 12 years inside the uniform supply chain.',

  phoneDisplay: '+91 98220 12345',
  phoneHref: 'tel:+919822012345',
  whatsappNumber: WHATSAPP_NUMBER,
  email: 'orders@pakkauniforms.in',

  address: {
    line1: 'Gala No. 14, Bhosari Industrial Area',
    line2: 'Pune, Maharashtra 411026',
    line3: 'India',
  },

  gst: '27AABCP1234C1Z5',
  udyam: 'UDYAM-MH-26-0012345',
  yearsInTrade: 12,
  instagram: 'https://www.instagram.com/pakkauniforms/',

  waGeneralLink: waLink('Hi, I need a uniform quote'),
  waHowWeWorkLink: waLink('Hi, I want to know how Pakka handles a bulk uniform order'),

  categories: [
    {
      id: 'school',
      name: 'School Uniforms',
      headline: 'School uniform manufacturer, Pune — supplying institutions pan-India',
      figure: 'school',
      fromPrice: 279,
      moq: '100 pieces per size/style',
      fabrics: ['Poly-cotton twill', 'PV matty', 'Terry cotton'],
      blurb: 'Shirts, pinafores, pants, skirts and tracksuits, sized and labelled by class.',
      waMessage: 'Hi, I need a quote for school uniforms',
    },
    {
      id: 'corporate',
      name: 'Corporate Uniforms',
      headline: 'Corporate uniform supplier, Pune — front-office & field staff wear',
      figure: 'corporate',
      fromPrice: 649,
      moq: '50 pieces per design',
      fabrics: ['Wool-blend suiting', 'Poly-viscose', 'Cotton-lycra'],
      blurb: 'Shirts, trousers, blazers and ID-ready formal wear for HR-driven rollouts.',
      waMessage: 'Hi, I need a quote for corporate uniforms',
    },
    {
      id: 'hospital',
      name: 'Hospital Uniforms',
      headline: 'Hospital & healthcare uniform supplier — scrubs, aprons, coats',
      figure: 'hospital',
      fromPrice: 349,
      moq: '75 pieces per role',
      fabrics: ['Antimicrobial poly-cotton', 'Barrier-weave scrub fabric', 'Cotton drill'],
      blurb: 'Scrubs, lab coats and nursing wear built for repeated industrial washing.',
      waMessage: 'Hi, I need a quote for hospital uniforms',
    },
    {
      id: 'hotel',
      name: 'Hotel & Hospitality Uniforms',
      headline: 'Hotel uniform manufacturer — front-desk, F&B and housekeeping',
      figure: 'hotel',
      fromPrice: 549,
      moq: '50 pieces per role',
      fabrics: ['Poly-viscose suiting', 'Cotton-satin', 'Twill blends'],
      blurb: 'Front-desk, F&B and housekeeping wear matched to your brand colours.',
      waMessage: 'Hi, I need a quote for hotel uniforms',
    },
    {
      id: 'industrial',
      name: 'Industrial Uniforms',
      headline: 'Industrial uniform supplier — coveralls, factory & safety wear',
      figure: 'industrial',
      fromPrice: 449,
      moq: '100 pieces per style',
      fabrics: ['Ripstop cotton', 'FR-treated fabric', 'Poly-cotton twill'],
      blurb: 'Coveralls, factory shirts and safety wear rated for shop-floor conditions.',
      waMessage: 'Hi, I need a quote for industrial uniforms',
    },
    {
      id: 'petrolpump',
      name: 'Petrol Pump Uniforms',
      headline: 'Petrol pump staff uniform supplier — attendant & cashier wear',
      figure: 'petrolpump',
      fromPrice: 399,
      moq: '50 pieces per style',
      fabrics: ['Poly-cotton twill', 'Oil-resistant blend', 'Cotton drill'],
      blurb: 'Attendant and cashier uniforms with company branding and reflective trim.',
      waMessage: 'Hi, I need a quote for petrol pump uniforms',
    },
  ],

  risks: [
    {
      title: 'Silent delays',
      problem:
        'Orders go quiet mid-production. No update until the delivery date has already passed.',
      safeguard:
        'Every order gets a written production timeline with checkpoints — you get a status update before you have to ask for one.',
    },
    {
      title: 'Size mismatch',
      problem:
        'Bulk sizes arrive off — too many mediums, too few larges — and nobody catches it before dispatch.',
      safeguard:
        'Size breakup is confirmed in writing against your headcount sheet, and checked again at final QC before packing.',
    },
    {
      title: 'Fabric substitution',
      problem:
        'The sample was one fabric. The bulk order quietly ships in something thinner, cheaper, or the wrong colour.',
      safeguard:
        'The approved sample fabric is swatched, logged and matched batch-by-batch — what you approve is what you get.',
    },
    {
      title: 'No accountability',
      problem:
        'Something goes wrong and you get passed between a broker, a factory and a transporter, with no one person to answer to.',
      safeguard:
        'One person owns your order end to end — from quote to delivery — and is reachable on WhatsApp throughout.',
    },
  ],

  steps: [
    {
      n: '01',
      title: 'Share your requirement',
      body: 'Send us category, quantities and any existing design or sample over WhatsApp or email.',
    },
    {
      n: '02',
      title: 'Written quote in 24 hours',
      body: 'You get a line-itemed quote — fabric, price per piece, sizes, timeline — in writing.',
    },
    {
      n: '03',
      title: 'Sample approval',
      body: 'We produce a physical sample for sign-off before a single piece of bulk fabric is cut.',
    },
    {
      n: '04',
      title: 'Bulk delivery with tracking',
      body: 'Production runs to the approved sample and timeline, with dispatch tracking shared as it moves.',
    },
  ],

  faqs: [
    {
      q: 'What is your minimum order quantity (MOQ)?',
      a: 'MOQ varies by category, typically 50–100 pieces per size or style. Smaller pilot orders can be discussed for first-time institutional buyers — ask us on WhatsApp with your requirement.',
    },
    {
      q: 'How long does delivery take?',
      a: 'Standard bulk orders are delivered in 15–25 days from sample approval, depending on quantity and customisation. Your written quote will carry the exact timeline for your order before you confirm.',
    },
    {
      q: 'Can you add logos, embroidery or custom branding?',
      a: 'Yes — embroidery, screen print, woven badges and name tags are all available. Send your logo file and placement preference and we will quote it alongside the base uniform price.',
    },
    {
      q: 'What are your payment terms?',
      a: 'Typically 50% advance to confirm production and the balance before dispatch. Terms for larger institutional or recurring orders can be discussed directly.',
    },
    {
      q: 'Do you provide samples before the bulk order?',
      a: 'Always. We do not cut bulk fabric until you have approved a physical sample in hand — not a photo, not a swatch card alone.',
    },
    {
      q: 'What happens if the sizes arrive wrong?',
      a: 'Size breakup is confirmed in writing before production and verified again at final QC. If a genuine mismatch still occurs, we replace the affected pieces — that commitment is part of every order, not an afterthought.',
    },
  ],

  clientLogos: ['Client A', 'Client B', 'Client C', 'Client D', 'Client E', 'Client F'],
};

export { waLink };
