import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logoImg from '../assets/images/SSMBI_LOGO.png'

const PRODUCTS = [
  'Asbestos Mill Board'
]

const DOMESTIC = [
  'Haryana', 'Himachal Pradesh', 'Punjab', 'Rajasthan', 'Goa',
  'Madhya Pradesh', 'Maharashtra', 'Chhattisgarh', 'Karnataka', 'Tamil Nadu',
]

function toSlug(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
}

export default function Layout() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null) // 'products' | 'international' | 'domestic'
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const closeMenus = () => {
    setOpenDropdown(null)
    setMobileMenuOpen(false)
    setMobileExpanded(null)
  }

  const topBarSlides = [
    {
      id: 'address',
      element: (
        <div className="w-full text-center px-4 leading-relaxed">
          <svg className="w-3.5 h-3.5 text-amber-500 inline mr-1.5 align-middle -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-bold text-amber-500">Address:</span> Plot No -895M, khata No-62, SUBHANPUR KHEKRA BAGHPAT UTTAR PRADESH - 201102
        </div>
      )
    },
    {
      id: 'phones',
      element: (
        <div className="w-full text-center px-4">
          <span className="flex items-center justify-center gap-2">
            <a href="tel:+919411826175" className="hover:text-amber-400 transition flex items-center gap-1.5 whitespace-nowrap">
              <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321.988l-1.305 1.305a12.933 12.933 0 005.07 5.07l1.305-1.305a1.3 1.3 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9411826175</span>
            </a>
            <span className="text-stone-700 select-none">|</span>
            <a href="tel:+919411263924" className="hover:text-amber-400 transition flex items-center gap-1 whitespace-nowrap">
              <span>+91 9411263924</span>
            </a>
          </span>
        </div>
      )
    },
    {
      id: 'email',
      element: (
        <div className="w-full text-center px-4">
          <a href="mailto:shrisaimillboardindustries@gmail.com" className="hover:text-amber-400 transition flex items-center justify-center gap-1.5 truncate max-w-[280px] mx-auto" title="shrisaimillboardindustries@gmail.com">
            <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">shrisaimillboardindustries@gmail.com</span>
          </a>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen theme-page text-stone-800">
      {/* Mobile Top Bar Marquee (visible below md) */}
      <div className="md:hidden bg-linear-to-r from-stone-900 to-stone-800 text-stone-300 text-[11px] sm:text-[11px] border-b border-stone-700/50 py-2 flex items-center overflow-hidden relative h-9">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-center items-center relative h-full">
          {topBarSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full transition-all duration-700 ease-in-out transform flex justify-center items-center ${index === currentSlide
                  ? 'opacity-100 translate-x-0 pointer-events-auto'
                  : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
            >
              {slide.element}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Top Bar (visible md and above) */}
      <div className="hidden md:block bg-linear-to-r from-stone-900 to-stone-800 text-stone-300 text-xs lg:text-sm border-b border-stone-700/50 py-2.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="text-left">
            <span className="leading-relaxed inline-block">
              <svg className="w-3.5 h-3.5 text-amber-500 inline mr-1.5 align-middle -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-amber-500">Address:</span> Plot No -895M, khata No-62, SUBHANPUR KHEKRA BAGHPAT UTTAR PRADESH - 201102
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="tel:+919411826175" className="hover:text-amber-400 transition flex items-center justify-center md:justify-start gap-1 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321.988l-1.305 1.305a12.933 12.933 0 005.07 5.07l1.305-1.305a1.3 1.3 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9411826175</span>
              </a>
              <span className="text-stone-700 text-xs select-none">|</span>
              <a href="tel:+919411263924" className="hover:text-amber-400 transition flex items-center justify-center md:justify-start gap-1 whitespace-nowrap">
                <span>+91 9411263924</span>
              </a>
            </div>

            <span className="text-stone-700 select-none">|</span>

            <a href="mailto:shrisaimillboardindustries@gmail.com" className="hover:text-amber-400 transition flex items-center justify-center md:justify-start gap-1.5 max-w-[280px] sm:max-w-none truncate" title="shrisaimillboardindustries@gmail.com">
              <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">shrisaimillboardindustries@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-surface-elevated/98 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-[0_1px_3px_rgba(26,24,20,0.06)]">
        <div className="max-w-7xl mx-auto px-4 py-1 lg:py-2">
          <nav className="flex items-center justify-between gap-4">
            <Link to="/" className="text-xl sm:text-2xl font-display flex items-center font-semibold text-stone-800 hover:text-amber-700 transition tracking-tight shrink-0" onClick={closeMenus}>
              <img src={logoImg} alt="SSMBI Logo" className="w-10 h-10 md:w-15 md:h-15" />
              <span className="text-2xl font-semibold">SSMBI</span>
            </Link>

            {/* Desktop nav - hidden below lg */}
            <ul className="hidden lg:flex flex-wrap items-center gap-1 xl:gap-2">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              <li className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                  className="nav-link flex items-center gap-1"
                >
                  Products <span className="text-xs">▼</span>
                </button>
                {openDropdown === 'products' && (
                  <ul className="dropdown">
                    {PRODUCTS.map((p) => (
                      <li key={p}>
                        <Link to={`/products/${toSlug(p)}`} className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                          {p}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link to="/clients" className="nav-link">Our Clients</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
              {/* <li className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'domestic' ? null : 'domestic')}
                  className="nav-link flex items-center gap-1"
                >
                  Domestic <span className="text-xs">▼</span>
                </button>
                {openDropdown === 'domestic' && (
                  <ul className="dropdown">
                    {DOMESTIC.map((s) => (
                      <li key={s}>
                        <Link to={`/domestic/${toSlug(s)}`} className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li> */}
            </ul>

            {/* Mobile menu button - visible below lg */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-stone-600 hover:bg-amber-50/80 hover:text-amber-800 transition"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile menu panel - visible below lg when open */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen ? 'max-h-[85vh] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
            aria-hidden={!mobileMenuOpen}
          >
            <ul className="pb-5 space-y-0 border-t border-stone-200 pt-4 bg-linear-to-b from-amber-50/30 to-transparent rounded-b-2xl">
              <li><Link to="/" className="nav-link-mobile" onClick={closeMenus}>Home</Link></li>
              <li><Link to="/about" className="nav-link-mobile" onClick={closeMenus}>About Us</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                  className="nav-link-mobile w-full flex items-center justify-between"
                >
                  Products <span className={`text-xs transition-transform ${mobileExpanded === 'products' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileExpanded === 'products' && (
                  <ul className="pl-4 pb-2 space-y-0 border-l-2 border-amber-200 ml-3 mt-1">
                    {PRODUCTS.map((p) => (
                      <li key={p}>
                        <Link to={`/products/${toSlug(p)}`} className="nav-link-mobile block py-2 text-sm" onClick={closeMenus}>{p}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link to="/clients" className="nav-link-mobile" onClick={closeMenus}>Our Clients</Link></li>
              <li><Link to="/contact" className="nav-link-mobile" onClick={closeMenus}>Contact</Link></li>
              {/* <li>
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === 'domestic' ? null : 'domestic')}
                  className="nav-link-mobile w-full flex items-center justify-between"
                >
                  Domestic <span className={`text-xs transition-transform ${mobileExpanded === 'domestic' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileExpanded === 'domestic' && (
                  <ul className="pl-4 pb-2 space-y-0 border-l-2 border-amber-200 ml-3 mt-1">
                    {DOMESTIC.map((s) => (
                      <li key={s}>
                        <Link to={`/domestic/${toSlug(s)}`} className="nav-link-mobile block py-2 text-sm" onClick={closeMenus}>{s}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-semibold text-white mb-3">About Us</h3>
              <p className="text-sm">
                SSMBI is a unit of manufacturing / trading and lining for refractory of boiler, furnaces, hot air generator.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-3">Working Hours</h3>
              <p className="text-sm">
                We work 7 days a week, excluding major holidays. Contact us for emergencies.
              </p>
              <p className="text-sm mt-2">Monday – Friday: 10:00 AM – 07:00 PM<br />Saturday: 10:00 AM – 06:00 PM</p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-3">Services</h3>
              <ul className="text-sm space-y-1">
                <li><Link to="/products/bricks" className="hover:text-amber-400 transition">Bricks</Link></li>
                <li><Link to="/products/mortars" className="hover:text-amber-400 transition">Mortars</Link></li>
                <li><Link to="/products/castables" className="hover:text-amber-400 transition">Castables</Link></li>
                <li><Link to="/products/steel-anchors" className="hover:text-amber-400 transition">Steel Anchors</Link></li>
                <li><Link to="/products/other-products" className="hover:text-amber-400 transition">Other Products</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-3">Contact</h3>
              <p className="text-sm">Plot No. 10, Jeevan Nagar Part II<br />Sohna Road, Ballabgarh, HR.</p>
              <p className="text-sm mt-2">GST: 06ABOPM2346Q1Z1</p>
              <a href="mailto:sales@ssmbi.com" className="text-amber-400 hover:underline text-sm transition">sales@ssmbi.com</a>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-6 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} SSMBI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
