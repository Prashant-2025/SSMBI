import { Link } from 'react-router-dom'
import asbestosSheetsImg from '../assets/images/asbestos_sheets.png'

const PRODUCT_LINES = [
  'Asbestos Insulation Millboard',
  'Industrial Insulation Millboard',
]

const PRODUCT_HREF = '/products/asbestos-mill-board'

/**
 * Single product-category card (Asbestos Millboards).
 * Displays high-quality close-up asbestos sheets image.
 * Use `stagger` on the second card in a row so entrance animation offsets slightly.
 */
export default function AsbestosMillboardCard({ stagger = false, dark = false }) {
  const revealClass = stagger
    ? 'product-card-reveal product-card-reveal-delay-1'
    : 'product-card-reveal'

  return (
    <Link
      to={PRODUCT_HREF}
      className={`group ${revealClass} flex flex-col rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] ${
        dark 
          ? 'bg-stone-950 border border-stone-800 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.7)] hover:border-amber-500/40 hover:-translate-y-2'
          : 'bg-white border border-[var(--color-surface-border)] shadow-[0_8px_32px_-12px_rgba(26,24,20,0.1)] hover:shadow-[0_28px_56px_-20px_rgba(26,24,20,0.15)] hover:border-amber-500/30 hover:-translate-y-2'
      }`}
    >
      {/* Product Image header with dark gradient overlay */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-stone-700/20">
        <img 
          src={asbestosSheetsImg} 
          alt="SSMBI Asbestos Millboard Sheets" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 to-transparent pointer-events-none" aria-hidden />
        <p className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-10">
          <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-md">
            SSMBI
          </span>
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-amber-250 font-bold mt-1">
            Asbestos Insulation Sheets
          </span>
        </p>
      </div>

      {/* Title band */}
      <div className="relative px-5 py-4 sm:px-6 sm:py-4.5 bg-linear-to-r from-stone-900 via-stone-850 to-stone-900 border-b border-stone-800">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[var(--color-brand)] to-[var(--color-accent)] opacity-95 rounded-r-sm" aria-hidden />
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight pl-2">
          Asbestos Millboards
        </h3>
        <p className="text-stone-400 text-sm mt-1 pl-2 leading-snug">
          Asbestos Insulation Millboard — high-temperature industrial grades
        </p>
      </div>

      {/* Body */}
      <div className="px-6 pt-6 pb-6 sm:px-8 sm:pb-7 flex flex-col flex-1">
        <ul className={`space-y-2.5 mb-6 text-sm flex-1 ${dark ? 'text-stone-300' : 'text-stone-600'}`}>
          {PRODUCT_LINES.map((line) => (
            <li
              key={line}
              className={`leading-snug pl-3 border-l-[3px] transition-colors duration-200 ${
                dark 
                  ? 'border-amber-500/80 hover:border-[var(--color-brand)]' 
                  : 'border-amber-400/90 hover:border-[var(--color-brand)]'
              }`}
            >
              {line}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-brand-hover)] transition-colors">
          <span className="relative">
            View all
            <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <svg
            className="w-4 h-4 -translate-x-0.5 group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
