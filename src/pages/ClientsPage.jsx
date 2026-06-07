import { Link } from 'react-router-dom'
import steelMillImg from '../assets/images/steel_mill_client.png'

const INDUSTRIES = [
  {
    title: 'Steel & Metallurgical Plants',
    desc: 'Asbestos millboard sheets are used as high-temperature backing insulation in metal processing operations to prevent heat transfer and energy loss.',
  },
  {
    title: 'Cement Plants & Kiln Backing',
    desc: 'Provides a robust thermal barrier layer behind the refractory bricks in rotary cement kilns, ensuring structural safety and thermal efficiency.',
  },
  {
    title: 'Glass & Ceramic Factories',
    desc: 'Applied as flat insulation panels, heat shields, and gasket seals in high-temperature drying ovens and ceramic firing chambers.',
  },
  {
    title: 'Electrical & Power Panels',
    desc: 'Utilized as a durable dielectric backing board inside power distribution switchboards and electrical panels for fire protection and insulation.',
  },
  {
    title: 'Sugar Mills & Distilleries',
    desc: 'Serves as high-temperature gasket sealing material in steam pipeline flanges, evaporator systems, and boiling tanks.',
  },
  {
    title: 'Chemical & Process Industries',
    desc: 'Protects pipelines, valves, and mechanical equipment from high thermal stress and corrosive vapor exposure under continuous operation.',
  },
]

export default function ClientsPage() {
  return (
    <main className="theme-page min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-stone-200/30 border-b border-stone-200/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-[var(--color-brand)] transition font-medium">Home</Link></li>
            <li className="text-stone-400">/</li>
            <li className="text-stone-900 font-bold">Our Clients</li>
          </ol>
        </div>
      </div>

      {/* Hero (Dark Section) */}
      <section className="bg-linear-to-b from-stone-950 to-stone-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 theme-hero-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[var(--color-accent)] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">Industries &amp; Partners</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-sm">Our Clients</h1>
        </div>
      </section>

      {/* Overview (Light Section - Split with Image) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display theme-section-title text-2xl md:text-3xl font-bold text-stone-900 mb-5">Industries We Serve</h2>
            <p className="text-stone-600 leading-relaxed mb-4 text-base">
              SSMBI supplies high-temperature Asbestos Mill Board Sheets to diverse industrial manufacturers and distributors across India. Our sheets serve as essential components in heavy thermal processing, mechanical sealing, and electrical shielding.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-base">
              From heavy steel plants to switchboard distributors, our clients rely on our products to maintain process safety, reduce energy consumption, and guarantee structural fire safety under extreme conditions.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-md group/client aspect-video">
            <img 
              src={steelMillImg} 
              alt="High temperature steel mill processing plant utilizing asbestos backing sheets" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/client:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/20 to-transparent pointer-events-none" aria-hidden />
          </div>
        </div>
      </section>

      {/* Grid of Sectors (Dark Section) */}
      <section className="bg-stone-900 border-y border-stone-950 py-16 text-stone-300 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(223,178,86,0.08),transparent)]" aria-hidden />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="font-display theme-section-title text-center text-2xl md:text-3xl font-bold text-stone-100 mb-2">Application Sectors</h2>
          <p className="text-stone-400 text-center mb-12 max-w-xl mx-auto text-sm">
            Our Asbestos Mill Board sheets perform as core thermal insulation panels in key sectors.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="rounded-2xl border border-stone-800 bg-stone-950/50 p-6 shadow-md hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-stone-100 mb-3 text-lg">{ind.title}</h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Capability (Light Section) */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display theme-section-title text-center text-2xl md:text-3xl font-bold text-stone-900 mb-6">Distribution &amp; Logistics</h2>
        <div className="space-y-4 text-stone-650 leading-relaxed text-sm max-w-2xl mx-auto">
          <p>
            SSMBI is equipped to fulfill bulk manufacturing orders with robust packaging setups to prevent moisture intake or edge cracking during transport. We supply sheet containers to major industrial hubs in Uttar Pradesh, Haryana, Maharashtra, Rajasthan, Punjab, and Chhattisgarh.
          </p>
        </div>
      </section>

      {/* CTA (Dark Section) */}
      <section className="bg-stone-950 text-white py-16 relative overflow-hidden border-t border-stone-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-2xl font-bold mb-2 text-stone-100">Ready to Partner with SSMBI?</h2>
          <p className="text-stone-400 mb-8 max-w-md mx-auto text-sm">
            Reach out to our sales team for contract parameters, sample sheet requests, and bulk discount pricing models.
          </p>
          <Link to="/contact" className="theme-btn-primary inline-block">
            Get a Bulk Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
