import { Link } from 'react-router-dom'
import asbestosSheetsImg from '../assets/images/asbestos_sheets.png'
import asbestosInspectionImg from '../assets/images/asbestos_inspection.png'
import heroBannerImg from '../assets/images/asbestos_hero_banner_clean.png'

const WHY_US = [
  { title: 'Quality Assured', desc: 'We manufacture and supply only tested, high-grade asbestos millboard sheets.' },
  { title: 'Timely Delivery', desc: 'Reliable pan-India and international logistics with fast turnaround.' },
  { title: 'Expert Support', desc: 'Technical guidance to help you choose the right sheet grade and thickness.' },
  { title: 'Competitive Rates', desc: 'Direct manufacturer pricing without compromising on material quality.' },
]

export default function HomePage() {
  return (
    <main className="theme-page min-h-screen">
      {/* Hero Banner (Dark Section) */}
      <section 
        className="relative py-28 md:py-36 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      >
        {/* Dark elegant overlay for legibility */}
        <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-[0.5px]" aria-hidden />
        <div className="absolute inset-0 theme-hero-glow" aria-hidden />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[var(--color-accent)] text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">SSMBI · Manufacturer &amp; Supplier</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-sm">
            Premium Asbestos<br className="hidden sm:block" /> Mill Board Sheets
          </h1>
          <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
            High-density heat-resistant asbestos mill boards for industrial sealing, thermal barriers, and insulation. Tested mechanical strength stable up to 1400°C.
          </p>
          <div className="flex justify-center">
            <Link to="/products/asbestos-mill-board" className="theme-btn-primary">
              View Product Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Product Spotlight & About (Light Section with Landscape Display) */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-24 animate-fade-in">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[var(--color-brand)] text-xs md:text-sm font-semibold uppercase tracking-widest block">
                Product Spotlight
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                SSMBI Asbestos Mill Board Sheets
              </h2>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-base md:text-lg">
              Shri Sai Mill Board Industries (SSMBI) is a leading manufacturer and supplier of premium <strong className="text-stone-900 font-bold">Asbestos Millboard Sheets</strong>. Specially engineered with chrysotile asbestos fibers and high-grade binding agents, our sheets provide outstanding fire resistance, thermal barrier shielding, and structural durability under continuous heat stress.
            </p>

            {/* Product Grades & Specifications Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Versatile Industrial Grades</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Manufactured in Soft (conformal gaskets), Medium (general backing), and Hard (structural support) densities.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Extreme Temperature Stability</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Withstands up to 500°C continuously, and stable under mechanical support up to 1400°C.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Standard &amp; Custom Sizes</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Standard 1m × 1m sheets with multiple thickness options ranging from 1.5mm to 12mm.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Mechanical Workability</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Sheets can be cleanly cut, drilled, punched, or molded to fit custom flanges and panels.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/products/asbestos-mill-board" className="theme-btn-primary">
                View Full Specifications
              </Link>
              <Link to="/about" className="px-5 py-3 text-sm font-semibold border border-stone-300 hover:border-amber-500 hover:text-amber-600 text-stone-700 rounded-xl transition duration-200">
                About Our Grades
              </Link>
            </div>
          </div>

          {/* Landscape Image Column */}
          <div className="lg:col-span-5 w-full">
            <Link 
              to="/products/asbestos-mill-board" 
              className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-[0_12px_40px_-15px_rgba(26,24,20,0.15)] hover:shadow-[0_28px_56px_-20px_rgba(26,24,20,0.22)] hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-350 aspect-video md:aspect-[4/3] lg:aspect-[4/3] bg-stone-100"
            >
              <img 
                src={asbestosSheetsImg} 
                alt="SSMBI Premium Asbestos Mill Board Sheets Stack" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
              />
              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide block drop-shadow-md">
                  SSMBI Millboards
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-400 font-bold mt-1 block">
                  Click to View Specifications
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Application Areas (Dark Section) */}
      <section className="bg-stone-900 border-y border-stone-950 py-20 text-stone-300 relative overflow-hidden">
        {/* Soft gold backdrop glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(223,178,86,0.08),transparent)]" aria-hidden />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 animate-fade-in">
            <span className="text-[var(--color-brand)] text-xs md:text-sm font-semibold uppercase tracking-widest block mb-2">
              Application Sectors
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-100 tracking-tight">
              Where Our Sheets Are Used
            </h2>
            <p className="text-stone-400 text-sm mt-3">
              SSMBI Asbestos Mill Board sheets perform as core thermal insulation panels in key high-temperature industries.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-stone-800 bg-stone-950/40 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
              <span className="text-amber-500 font-display font-bold text-sm block mb-3 uppercase tracking-wider">01 . Metallurgical</span>
              <h3 className="font-display font-semibold text-stone-100 mb-2 text-base">Steel &amp; Metal Plants</h3>
              <p className="text-stone-400 text-xs leading-relaxed">Used as robust backing insulation behind refractories in ladles, furnaces, and casting troughs.</p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-950/40 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
              <span className="text-amber-500 font-display font-bold text-sm block mb-3 uppercase tracking-wider">02 . Processing</span>
              <h3 className="font-display font-semibold text-stone-100 mb-2 text-base">Cement &amp; Glass Kilns</h3>
              <p className="text-stone-400 text-xs leading-relaxed">Protects kiln shells, cooling units, and furnace hoods from direct thermal transmission.</p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-950/40 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
              <span className="text-amber-500 font-display font-bold text-sm block mb-3 uppercase tracking-wider">03 . Power Systems</span>
              <h3 className="font-display font-semibold text-stone-100 mb-2 text-base">Electrical Switchboards</h3>
              <p className="text-stone-400 text-xs leading-relaxed">Dielectric backing plates for switchgear compartments, fuse boxes, and busbar chambers.</p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-950/40 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
              <span className="text-amber-500 font-display font-bold text-sm block mb-3 uppercase tracking-wider">04 . Machinery</span>
              <h3 className="font-display font-semibold text-stone-100 mb-2 text-base">Boiler &amp; Pipe Flanges</h3>
              <p className="text-stone-400 text-xs leading-relaxed">Cut into custom gaskets and seals for steam pipelines, heat exchangers, and boiler doors.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/clients" className="inline-flex items-center gap-2 text-[var(--color-brand)] hover:text-[var(--color-brand-hover)] font-semibold hover:gap-3 transition-all">
              Explore Our Industrial Clients
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us (Light Section) */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-24">
        <h2 className="font-display theme-section-title text-center text-2xl md:text-3xl font-bold text-stone-900 mb-2">Why Choose Us</h2>
        <p className="text-stone-600 text-center mb-14 max-w-xl mx-auto">
          Trusted by industries for quality, delivery, and support.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, i) => (
            <div key={i} className="theme-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[var(--color-brand)] to-[var(--color-accent)] text-white flex items-center justify-center font-display font-bold text-xl mx-auto mb-5 shadow-[0_4px_10px_rgba(230,101,21,0.2)]">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-stone-900 mb-3 text-lg">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA (Dark Section) */}
      <section className="bg-stone-950 text-white py-20 relative overflow-hidden border-t border-stone-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-stone-100">Can We Help?</h2>
          <p className="text-[var(--color-accent)] mb-2 text-lg font-semibold">+91 9411826175 · +91 9411263924</p>
          <p className="text-stone-400 mb-5">Have a question or need a quote for asbestos mill board sheets? Get in touch with our team.</p>
          <p className="text-stone-555 text-xs mb-8">Email: shrisaimillboardindustries@gmail.com</p>
          <Link to="/contact" className="theme-btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
