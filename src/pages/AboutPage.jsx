import { Link } from 'react-router-dom'

const GRADES = [
  {
    name: 'Soft Grade',
    desc: 'Conformal & flexible sheets designed primarily for industrial gasketing, sealing, and wrapping applications.',
    temp: 'Up to 500°C',
    thickness: '1.5mm - 6mm',
    density: '0.80 g/cm³',
  },
  {
    name: 'Medium Grade',
    desc: 'General-purpose thermal backing insulation sheets providing a balance of flexibility and strength.',
    temp: 'Up to 500°C (1400°C supported)',
    thickness: '3mm - 12mm',
    density: '0.95 g/cm³',
  },
  {
    name: 'Hard Grade',
    desc: 'High-density, high-rigidity structural backing sheets for maximum compression strength and durability.',
    temp: 'Up to 500°C (1400°C supported)',
    thickness: '3mm - 12mm',
    density: '1.15 g/cm³',
  },
]

export default function AboutPage() {
  return (
    <main className="theme-page min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-stone-200/30 border-b border-stone-200/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-[var(--color-brand)] transition font-medium">Home</Link></li>
            <li className="text-stone-400">/</li>
            <li className="text-stone-900 font-bold">About Us</li>
          </ol>
        </div>
      </div>

      {/* Hero (Dark Section) */}
      <section className="bg-linear-to-b from-stone-950 to-stone-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 theme-hero-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[var(--color-accent)] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">Our Profile &amp; Mission</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-sm">About SSMBI</h1>
        </div>
      </section>

      {/* Profile (Light Section) */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display theme-section-title text-2xl md:text-3xl font-bold text-stone-900 mb-6">Company Profile</h2>
        <div className="space-y-6 text-stone-650 leading-relaxed text-base">
          <p>
            Established as a dedicated manufacturer and supplier, <strong className="text-stone-900 font-bold">Shri Sai Mill Board Industries (SSMBI)</strong> is committed to delivering high-temperature thermal insulation solutions. Our primary core focus is on the manufacturing, trading, and nationwide distribution of high-quality <strong className="text-stone-900 font-bold">Asbestos Mill Board Sheets</strong>.
          </p>
          <p>
            Our manufacturing facility utilizes carefully selected chrysotile asbestos fibers combined with high-grade binders to produce millboard sheets that offer excellent fire resistance, thermal barrier insulation, and structural integrity. Through years of industry experience, we have optimized our formulas to ensure that our sheets can withstand intense thermal conditions, performing stably up to 500°C continuously, and stable under support even up to 1400°C.
          </p>
          <p>
            We take pride in our rapid dispatch network, supplying bulk orders across industrial states in India with a strong commitment to quality control and on-time logistical execution.
          </p>
        </div>
      </section>

      {/* Sheet Grades (Dark Section) */}
      <section className="bg-stone-900 border-y border-stone-950 py-16 text-stone-300 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(223,178,86,0.08),transparent)]" aria-hidden />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="font-display theme-section-title text-center text-2xl md:text-3xl font-bold text-stone-100 mb-2">Our Product Grades</h2>
          <p className="text-stone-400 text-center mb-12 max-w-xl mx-auto text-sm">
            We manufacture Asbestos Mill Board Sheets in three distinct industrial grades to suit specific applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {GRADES.map((g, i) => (
              <div key={i} className="rounded-2xl border border-stone-800 bg-stone-950/50 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-stone-100 mb-3 text-xl">{g.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">{g.desc}</p>
                </div>
                <div className="border-t border-stone-800 pt-4 space-y-2 text-xs text-stone-500">
                  <div className="flex justify-between">
                    <span>Operating Temp:</span>
                    <span className="font-semibold text-stone-300">{g.temp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thickness Range:</span>
                    <span className="font-semibold text-stone-300">{g.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Density:</span>
                    <span className="font-semibold text-stone-300">{g.density}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Controls (Light Section) */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display theme-section-title text-2xl md:text-3xl font-bold text-stone-900 mb-6">Quality Assurance</h2>
        <div className="space-y-6 text-stone-650 leading-relaxed text-sm">
          <p>
            At SSMBI, every batch of Asbestos Millboard sheets undergoes strict parameter inspection before dispatch. We measure sheet thickness using high-precision digital caliper systems at multiple coordinates to guarantee uniform density and dimensions.
          </p>
          <p>
            Our testing protocols ensure that each sheet retains its mechanical stability, incombustibility, and resistance to chemical degradation, noise transmission, and vibration stress.
          </p>
        </div>
      </section>

      {/* CTA (Dark Section) */}
      <section className="bg-stone-950 text-white py-16 relative overflow-hidden border-t border-stone-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-2xl font-bold mb-2 text-stone-100">Need Custom Sheet Specs?</h2>
          <p className="text-stone-400 mb-8 max-w-md mx-auto text-sm">
            We manufacture sheets in custom thicknesses and sizes upon request. Get in touch with our team for details.
          </p>
          <Link to="/contact" className="theme-btn-primary inline-block">
            Send Enquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
