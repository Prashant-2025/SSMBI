import { Link } from 'react-router-dom'
import AsbestosMillboardCard from '../components/AsbestosMillboardCard'

const FEATURES = [
  { title: 'High Thermal Resistance', desc: 'Maintains physical strength at high temperatures. For heat shields and heat-insulating linings.' },
  { title: 'Low Thermal Conductivity', desc: 'Effective insulation minimises heat flow and heat loss.' },
  { title: 'Mechanical Strength & Durability', desc: 'Hard and medium grades add robustness. Hard grade when stiffness is required.' },
  { title: 'Mechanical Workability', desc: 'Can be cut, drilled, punched, moulded, or shaped without serious cracking.' },
  { title: 'Impact & Vibration Resistance', desc: 'Resists mechanical stress in industrial conditions.' },
  { title: 'Electrical Insulation', desc: 'Use in electrical insulation applications as a dielectric board.' },
  { title: 'Incombustible & Fire-Resistant', desc: 'Highly fire-resistant; will not ignite even in exposure to heat sources.' },
  { title: 'Acid / Sound / Vermin Proof', desc: 'Natural resistance to breakdown, sound transmission, and vermin attack.' },
  { title: 'Versatile Grades', desc: 'Soft: conformal insulation. Medium: general thermal. Hard: structural support.' },
]

const APPLICATIONS = [
  'High-Temperature Insulation',
  'Thermal Barriers and Shields',
  'Gasketing & Sealing',
  'Heat Protection in Mechanical Equipment',
  'Electrical & Mechanical Insulation',
  'Structural & Construction Uses (Industrial)',
]

export default function AsbestosMillBoardPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-linear-to-r from-stone-100 to-amber-50/30 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-amber-700 transition font-medium">Home</Link></li>
            <li className="text-stone-400">/</li>
            <li><Link to="/products" className="hover:text-amber-700 transition font-medium">Products</Link></li>
            <li className="text-stone-400">/</li>
            <li className="text-stone-800 font-semibold">Asbestos Mill Board</li>
          </ol>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-linear-to-b from-stone-800 to-stone-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 theme-hero-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">Asbestos Mill Board</h1>
          <p className="text-stone-300 text-lg">Supplier &amp; Manufacturer in India</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="prose prose-stone max-w-none">
          <p className="text-stone-600 leading-relaxed mb-4">
            <strong className="text-stone-800">SSMBI</strong> offers <strong>premium-quality Asbestos Millboard Sheets</strong>, trusted for their exceptional heat resistance and durability in demanding industrial applications. These sheets are specially designed to provide <strong>excellent thermal insulation, fire resistance</strong>, and <strong>mechanical strength</strong>, making them ideal for high-temperature environments. Our millboards are known for heat and fire resistance and hardness. They perform best between temperatures of up to 500°C (932°F) and are stable to even higher temperatures under support, and stable at extremely high temperatures around 1400°C. The sheets are available in soft, medium, and hard grades. They are easily cut, drilled, and screwed to beams.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Our Asbestos Millboard Sheets find extensive application in furnaces, steel and catering equipment, kilns, boilers, ovens, and heat insulation panels because they do not deform at high temperatures. These sheets are also applicable in gasketing, lining, and thermal barriers in industrial applications for safety and efficiency.
          </p>
          <h2 className="font-display text-2xl font-semibold text-stone-800 mt-10 mb-4">Asbestos Millboard Sheets Manufacturer and Supplier in India</h2>
          <p className="text-stone-600 leading-relaxed">
            We at <strong className="text-stone-800">SSMBI</strong> are a reliable Asbestos Sheet Mill Boards Manufacturer and Supplier in India. We provide the best quality heat-resistant thermal insulation solutions for industrial applications. Our Asbestos Mill Board are commonly used for thermal insulation, fire protection, electrical panels, and furnace liners because of their high strength and resistance to high temperatures. Asbestos millboard sheets are available across India. With an overall focus on quality and delivery, <strong className="text-stone-800">SSMBI</strong> provides a reliable source of insulated products as required by the industry.
          </p>
        </div>
      </section>

      {/* Product specification */}
      <section className="bg-surface-elevated border-y border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl font-semibold text-stone-800 mb-6">Product Specification: Asbestos Millboard Sheets</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-stone-200 rounded-xl overflow-hidden">
              <tbody className="text-stone-700">
                <tr className="bg-stone-50 border-b border-stone-200">
                  <td className="px-4 py-3 font-semibold w-48">Product Name</td>
                  <td className="px-4 py-3">Asbestos Millboard Sheets</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-4 py-3 font-semibold">Standard Sheet Size</td>
                  <td className="px-4 py-3">1000 mm × 1000 mm (1 m × 1 m)</td>
                </tr>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <td className="px-4 py-3 font-semibold">Thickness Options</td>
                  <td className="px-4 py-3">1.5mm, 3mm, 4mm, 5mm, 6mm, 10mm, 12mm (other upon request)</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-4 py-3 font-semibold">Grades Available</td>
                  <td className="px-4 py-3">Soft Grade, Medium Grade, Hard Grade</td>
                </tr>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <td className="px-4 py-3 font-semibold">Material Composition</td>
                  <td className="px-4 py-3">Chrysotile asbestos fibers, incombustible inorganic fillers and binders, optional acid/sound resistance additives</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-4 py-3 font-semibold">Operating Temperature</td>
                  <td className="px-4 py-3">Up to ~500°C (932°F) continuous; with support, up to 1400°C in controlled conditions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical features */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-display text-2xl font-semibold text-stone-800 mb-6">Technical Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div key={i} className="theme-card p-4">
              <h3 className="font-display font-semibold text-stone-800 mb-2">{f.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="bg-stone-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl font-semibold text-stone-800 mb-6">Primary Industrial Applications</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {APPLICATIONS.map((a, i) => (
              <li key={i} className="flex items-center gap-2 text-stone-700">
                <span className="text-amber-600 font-bold">•</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product spotlight cards */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-display text-2xl font-semibold text-stone-800 mb-8 text-center">Explore the range</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          <AsbestosMillboardCard />
          <AsbestosMillboardCard stagger />
        </div>
        <p className="text-center mt-10">
          <Link to="/contact?enquiry=asbestos-mill-board" className="theme-btn-primary inline-block">
            Send enquiry
          </Link>
        </p>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="font-display text-2xl font-semibold mb-2">Can We Help?</h2>
          <p className="text-stone-300 mb-4">(+91) 96500 73916</p>
          <p className="text-stone-400 mb-8">Have a question in mind? Don&apos;t hesitate to contact us.</p>
          <Link to="/contact" className="theme-btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
