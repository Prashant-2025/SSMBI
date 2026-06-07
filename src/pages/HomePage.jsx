import { Link } from 'react-router-dom'
import AsbestosMillboardCard from '../components/AsbestosMillboardCard'

const WHY_US = [
  { title: 'Quality Assured', desc: 'We source and supply only tested, industry-grade refractory products.' },
  { title: 'Timely Delivery', desc: 'Pan-India and international logistics with reliable turnaround.' },
  { title: 'Expert Support', desc: 'Technical guidance to help you choose the right product.' },
  { title: 'Competitive Rates', desc: 'Best rates without compromising on quality or service.' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-linear-to-b from-stone-800 to-stone-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 theme-hero-glow" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.15)_100%)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-amber-300/90 text-sm font-medium uppercase tracking-widest mb-4">Refractory &amp; Lining Solutions</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            Boilers, Furnaces &amp;<br className="hidden sm:block" /> Hot Air Generators
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Manufacturing, trading, and lining specialists. Your trusted partner for thermal insulation and refractory products across India and beyond.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products/asbestos-mill-board" className="theme-btn-primary">
              View Products
            </Link>
            <Link to="/contact" className="theme-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display theme-section-title text-2xl md:text-3xl font-semibold text-stone-800 mb-5">About SSMBI</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              SSMBI is a leading unit in <strong className="text-stone-800">manufacturing, trading, and lining</strong> for refractory of boilers, furnaces, and hot air generators. We serve industries that demand reliable thermal insulation, fire resistance, and mechanical strength in extreme conditions.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              With a focus on quality and timely delivery, we supply bricks, mortars, castables, steel anchors, ceramic fibers, asbestos mill board, calcium silicate board, and more—across domestic and international markets.
            </p>
            <Link to="/about" className="theme-btn-primary inline-block">
              Learn More
            </Link>
          </div>
          <div className="relative rounded-2xl aspect-video bg-linear-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-500 border border-stone-200/80 shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
            <span className="text-sm font-medium relative z-10">Industrial / Refractory image</span>
          </div>
        </div>
      </section>

      {/* Asbestos Millboards — same card layout twice (grid); reference image not used */}
      <section className="bg-surface-elevated border-y border-stone-200/80 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display theme-section-title text-center text-2xl md:text-3xl font-semibold text-stone-800 mb-2">Asbestos Millboards</h2>
          <p className="text-stone-600 text-center mb-14 max-w-xl mx-auto">
            Premium thermal insulation sheets for boilers, furnaces, and industrial lining — soft, medium, and hard grades.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
            <AsbestosMillboardCard />
            <AsbestosMillboardCard stagger />
          </div>
          <div className="text-center mt-12">
            <Link to="/products/asbestos-mill-board" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:gap-3 transition-all">
              Full specifications
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-24">
        <h2 className="font-display theme-section-title text-center text-2xl md:text-3xl font-semibold text-stone-800 mb-2">Why Choose Us</h2>
        <p className="text-stone-600 text-center mb-14 max-w-xl mx-auto">
          Trusted by industries for quality, delivery, and support.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, i) => (
            <div key={i} className="theme-card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-100 to-amber-50 text-amber-700 flex items-center justify-center font-display font-bold text-2xl mx-auto mb-5 shadow-sm border border-amber-200/50">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-stone-800 mb-3 text-lg">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,168,83,0.12),transparent)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Can We Help?</h2>
          <p className="text-stone-300 mb-2 text-lg">(+91) 96500 73916 · (+91) 98100 73916</p>
          <p className="text-stone-400 mb-10">Have a question or need a quote? Get in touch with our team.</p>
          <Link to="/contact" className="theme-btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
