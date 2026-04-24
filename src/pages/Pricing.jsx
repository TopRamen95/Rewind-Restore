import { Link } from 'react-router-dom'
import { BsCheckLg } from 'react-icons/bs'

const tiers = [
  {
    name: 'Basic',
    price: '$49',
    priceNote: 'per order (up to 5 items)',
    description: 'Perfect for small batches of media you want safely preserved.',
    highlight: false,
    features: [
      'Up to 5 media items',
      'Standard digitization quality',
      'MP4 / MP3 output',
      'Cloud download delivery',
      'Files hosted for 30 days',
      'Email support',
    ],
    notIncluded: ['USB drive delivery', 'Color correction', 'Priority processing', 'Dedicated account manager'],
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '$99',
    priceNote: 'per order (up to 15 items)',
    description: 'Our most popular plan — great value for medium-sized collections.',
    highlight: true,
    features: [
      'Up to 15 media items',
      'Enhanced digitization quality',
      'MP4, AVI, FLAC, WAV output',
      'Cloud download delivery',
      'Files hosted for 90 days',
      'USB drive delivery (+$15)',
      'Basic color correction',
      'Priority processing',
      'Email & phone support',
    ],
    notIncluded: ['Dedicated account manager'],
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '$199',
    priceNote: 'per order (up to 40 items)',
    description: 'Full-service digitization for large archives and heirloom collections.',
    highlight: false,
    features: [
      'Up to 40 media items',
      'Professional-grade quality',
      'All output formats',
      'Cloud download delivery',
      'Files hosted for 1 year',
      'USB drive included',
      'Advanced color correction & restoration',
      'Priority processing',
      'Noise & scratch removal',
      'Dedicated account manager',
      'White-glove packing kit provided',
    ],
    notIncluded: [],
    cta: 'Go Premium',
  },
]

export default function Pricing() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            No hidden fees. Choose the plan that fits your collection size. All prices include return shipping of your originals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border flex flex-col ${
                tier.highlight
                  ? 'border-amber-500 bg-slate-900 text-white shadow-2xl scale-105'
                  : 'border-slate-200 bg-white text-slate-900 shadow-sm'
              }`}
            >
              {tier.highlight && (
                <div className="bg-amber-500 text-slate-900 text-xs font-extrabold uppercase tracking-widest text-center py-2 rounded-t-2xl">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex flex-col gap-6 flex-1">
                <div>
                  <h2 className={`text-2xl font-extrabold ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {tier.name}
                  </h2>
                  <p className={`text-sm mt-1 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.description}
                  </p>
                </div>
                <div>
                  <span className={`text-5xl font-black ${tier.highlight ? 'text-amber-400' : 'text-amber-500'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ml-2 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.priceNote}
                  </span>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <BsCheckLg className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-amber-400' : 'text-amber-500'}`} />
                      <span className={tier.highlight ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm opacity-40">
                      <span className="mt-0.5 shrink-0">✕</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/order"
                  className={`text-center font-bold py-3 rounded-xl transition-colors mt-auto ${
                    tier.highlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-900'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="text-center text-slate-500 text-sm mt-10">
          Need more than 40 items? <Link to="/order" className="text-amber-500 font-semibold hover:underline">Contact us for a custom quote.</Link>
        </p>
      </div>
    </div>
  )
}
