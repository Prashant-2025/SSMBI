import { Link } from 'react-router-dom'
import asbestosInspectionImg from '../assets/images/asbestos_inspection.png'

const FEATURES = [
  { title: 'High Thermal Resistance', desc: 'Maintains physical strength at high temperatures. Ideal for heat shields and backing insulation.' },
  { title: 'Low Thermal Conductivity', desc: 'Effective thermal insulation minimises heat flow and reduces heat loss.' },
  { title: 'Mechanical Strength & Durability', desc: 'Hard and medium grades add robustness for structural backing sheets.' },
  { title: 'Mechanical Workability', desc: 'Can be cut, drilled, punched, moulded, or shaped cleanly without cracking.' },
  { title: 'Impact & Vibration Resistance', desc: 'Resists mechanical stress under demanding industrial operations.' },
  { title: 'Electrical Insulation', desc: 'Provides excellent dielectric properties for electrical panel linings.' },
  { title: 'Incombustible & Fire-Resistant', desc: 'Highly fire-resistant; will not ignite or support combustion.' },
  { title: 'Acid / Sound / Vermin Proof', desc: 'Natural resistance to chemical breakdown, noise transmission, and vermin.' },
  { title: 'Versatile Grades', desc: 'Soft: conformal gaskets. Medium: general thermal backing. Hard: structural support.' },
]

const APPLICATIONS = [
  'High-Temperature Insulation Backing',
  'Thermal Barriers and Heat Shields',
  'Industrial Gasketing & Sealing',
  'Heat Protection in Mechanical Equipment',
  'Electrical Panel & Mechanical Insulation',
  'Structural Construction backing sheets',
]

export default function AsbestosMillBoardPage() {
  return (
    <main className="theme-page min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-stone-200/30 border-b border-stone-200/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-[var(--color-brand)] transition font-medium">Home</Link></li>
            <li className="text-stone-400">/</li>
            <li><Link to="/" className="hover:text-[var(--color-brand)] transition font-medium">Products</Link></li>
            <li className="text-stone-400">/</li>
            <li className="text-stone-900 font-bold">Asbestos Mill Board</li>
          </ol>
        </div>
      </div>

      {/* Hero (Dark Section) */}
      <section className="bg-linear-to-b from-stone-950 to-stone-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 theme-hero-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[var(--color-accent)] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">Supplier &amp; Manufacturer in India</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-sm">Asbestos Mill Board</h1>
        </div>
      </section>

      {/* Intro (Light Section - 2 Columns with Clean Image) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 text-stone-600">
            <p className="leading-relaxed">
              <strong className="text-stone-900 font-bold">SSMBI</strong> offers <strong className="text-stone-900 font-bold">premium-quality Asbestos Millboard Sheets</strong>, trusted for their exceptional heat resistance and durability in demanding industrial applications. These sheets are specially designed to provide <strong className="text-stone-900 font-bold">excellent thermal insulation, fire resistance</strong>, and <strong className="text-stone-900 font-bold">mechanical strength</strong>, making them ideal for high-temperature backing. Our millboards are known for heat and fire resistance and hardness. They perform best between temperatures of up to 500°C (932°F) and are stable to even higher temperatures under support, and stable at extremely high temperatures around 1400°C. The sheets are available in soft, medium, and hard grades. They are easily cut, drilled, and screwed to beams.
            </p>
            <p className="leading-relaxed">
              Our Asbestos Millboard Sheets find extensive application in industrial equipment, heat shield backing, and thermal barriers for safety and efficiency because they do not deform under heat.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-md group/prod aspect-square w-full max-w-sm">
              <img 
                src={asbestosInspectionImg} 
                alt="SSMBI Asbestos Millboard quality control sheet thickness inspection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/prod:scale-105" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/30 to-transparent pointer-events-none" aria-hidden />
            </div>
            <div className="text-center w-full max-w-sm">
              <p className="text-xs uppercase tracking-widest text-[var(--color-brand)] font-bold mb-1">SSMBI Insulation Sheets</p>
              <p className="text-[11px] text-stone-400">High-density fiber composition for extreme thermal resistance</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-stone-600">
          <h2 className="font-display text-2xl font-bold text-stone-900 mt-10 mb-4">Asbestos Millboard Sheets Manufacturer and Supplier in India</h2>
          <p className="leading-relaxed">
            We at <strong className="text-stone-900 font-bold">SSMBI</strong> are a reliable Asbestos Sheet Mill Boards Manufacturer and Supplier in India. We provide the best quality heat-resistant thermal insulation solutions for industrial applications. Our Asbestos Mill Board are commonly used for thermal insulation, fire protection, and electrical panels because of their high strength and resistance to high temperatures. Asbestos millboard sheets are available across India. With an overall focus on quality and delivery, <strong className="text-stone-900 font-bold">SSMBI</strong> provides a reliable source of insulated products as required by the industry.
          </p>
        </div>
      </section>

      {/* Product specification (Light Elevated Card Section) */}
      <section className="bg-surface-elevated border-y border-stone-200/40 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Product Specification: Asbestos Millboard Sheets</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-stone-200/80 rounded-2xl overflow-hidden border-collapse shadow-xs">
              <tbody className="text-stone-700 bg-white">
                <tr className="border-b border-stone-150 hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-stone-900 w-52 bg-stone-50/10 text-sm border-r border-stone-150">Product Name</td>
                  <td className="px-5 py-4 text-stone-600 text-sm">Asbestos Millboard Sheets</td>
                </tr>
                <tr className="border-b border-stone-150 hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-stone-900 w-52 bg-stone-50/10 text-sm border-r border-stone-150">Standard Sheet Size</td>
                  <td className="px-5 py-4 text-stone-600 text-sm">1000 mm × 1000 mm (1 m × 1 m)</td>
                </tr>
                <tr className="border-b border-stone-150 hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-stone-900 w-52 bg-stone-50/10 text-sm border-r border-stone-150">Thickness Options</td>
                  <td className="px-5 py-4 text-stone-600 text-sm">1.5mm, 3mm, 4mm, 5mm, 6mm, 10mm, 12mm (other upon request)</td>
                </tr>
                <tr className="border-b border-stone-150 hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-stone-900 w-52 bg-stone-50/10 text-sm border-r border-stone-150">Grades Available</td>
                  <td className="px-5 py-4 text-stone-600 text-sm">Soft Grade, Medium Grade, Hard Grade</td>
                </tr>
                <tr className="border-b border-stone-150 hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-stone-900 w-52 bg-stone-50/10 text-sm border-r border-stone-150">Material Composition</td>
                  <td className="px-5 py-4 text-stone-600 text-sm">Chrysotile asbestos fibers, incombustible inorganic fillers and binders, optional acid/sound resistance additives</td>
                </tr>
                <tr className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-stone-900 w-52 bg-stone-50/10 text-sm border-r border-stone-150">Operating Temperature</td>
                  <td className="px-5 py-4 text-stone-600 text-sm">Up to ~500°C (932°F) continuous; with support, up to 1400°C in controlled conditions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical features (Dark Section) */}
      <section className="bg-stone-900 border-y border-stone-950 py-16 text-stone-300 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(223,178,86,0.08),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="font-display text-2xl font-bold text-stone-100 mb-6">Technical Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-2xl border border-stone-800 bg-stone-950/50 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="font-display font-semibold text-stone-100 mb-2.5 text-lg">{f.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications (Warm Accent Section) */}
      <section className="bg-amber-50/40 border-y border-stone-200/40 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Primary Industrial Applications</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {APPLICATIONS.map((a, i) => (
              <li key={i} className="flex items-center gap-3 text-stone-750 text-sm">
                <svg className="w-4 h-4 text-[var(--color-brand)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry CTA Section (Dark Section) */}
      <section className="bg-stone-950 text-white py-16 relative overflow-hidden border-t border-stone-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-stone-100">Request a Custom Quote</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Need a specific thickness, custom sheet size, or high-volume delivery parameters? Get in touch with our engineering team for technical sheets, test reports, and wholesale contract parameters.
          </p>
          <Link to="/contact?enquiry=asbestos-mill-board" className="theme-btn-primary inline-block">
            Send Enquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
