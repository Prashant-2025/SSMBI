import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/SSMBI_LOGO.png'

export default function Layout() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const isProductsActive = location.pathname.startsWith('/products/')

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const closeMenus = () => {
    setMobileMenuOpen(false)
  }

  const topBarSlides = [
    {
      id: 'address',
      element: (
        <a
          href="https://www.google.com/maps/place/Shri+Sai+Mill+Board+Industries/@28.8248656,77.2480893,17z/data=!4m14!1m7!3m6!1s0x390c55909258237f:0xed43c9db90121edb!2sShri+Sai+Mill+Board+Industries!8m2!3d28.8248803!4d77.2480068!16s%2Fg%2F11ytkp3016!3m5!1s0x390c55909258237f:0xed43c9db90121edb!8m2!3d28.8248803!4d77.2480068!16s%2Fg%2F11ytkp3016?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-4 leading-relaxed hover:text-amber-400 transition-colors block"
        >
          <svg className="w-3.5 h-3.5 text-amber-500 inline mr-1.5 align-middle -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-bold text-amber-500">Address:</span> Plot No -895M, khata No-62, SUBHANPUR KHEKRA BAGHPAT UTTAR PRADESH - 201102
        </a>
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
    <div className="min-h-screen theme-page text-[var(--color-ink)]">
      {/* Mobile Top Bar Marquee (visible below md) */}
      <div className="md:hidden bg-linear-to-r from-stone-950 to-stone-900 text-stone-400 text-[11px] border-b border-stone-800/60 py-2 flex items-center overflow-hidden relative h-9">
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
      <div className="hidden md:block bg-linear-to-r from-stone-950 to-stone-900 text-stone-400 text-xs lg:text-sm border-b border-stone-800/60 py-2.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="text-left">
            <a
              href="https://www.google.com/maps/place/Shri+Sai+Mill+Board+Industries/@28.8248656,77.2480893,17z/data=!4m14!1m7!3m6!1s0x390c55909258237f:0xed43c9db90121edb!2sShri+Sai+Mill+Board+Industries!8m2!3d28.8248803!4d77.2480068!16s%2Fg%2F11ytkp3016!3m5!1s0x390c55909258237f:0xed43c9db90121edb!8m2!3d28.8248803!4d77.2480068!16s%2Fg%2F11ytkp3016?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed inline-block hover:text-amber-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-amber-500 inline mr-1.5 align-middle -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-amber-500">Address:</span> Plot No -895M, khata No-62, SUBHANPUR KHEKRA BAGHPAT UTTAR PRADESH - 201102
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="tel:+919411826175" className="hover:text-amber-400 transition flex items-center justify-center md:justify-start gap-1 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321.988l-1.305 1.305a12.933 12.933 0 005.07 5.07l1.305-1.305a1.3 1.3 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9411826175</span>
              </a>
              <span className="text-stone-800 text-xs select-none">|</span>
              <a href="tel:+919411263924" className="hover:text-amber-400 transition flex items-center justify-center md:justify-start gap-1 whitespace-nowrap">
                <span>+91 9411263924</span>
              </a>
            </div>

            <span className="text-stone-800 select-none">|</span>

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
      <header className="bg-stone-950/90 backdrop-blur-lg border-b border-stone-800/60 sticky top-0 z-50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-2 lg:py-3">
          <nav className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex items-center shrink-0" onClick={closeMenus}>
              <img src={logoImg} alt="SSMBI Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-amber-500/10 object-contain shadow-[0_2px_8px_rgba(195,90,26,0.2)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6" />
              <div className="flex flex-col ml-2.5">
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-stone-100 group-hover:text-amber-400 transition duration-300">SSMBI</span>
                <span className="text-[8px] uppercase tracking-widest text-amber-500/80 font-bold -mt-0.5 font-sans">Shri Sai Mill Board Industries</span>
              </div>
            </Link>

            {/* Desktop nav - simplified (no products dropdown) */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              <li>
                <Link to="/" className={`relative py-2.5 px-4 text-sm font-medium tracking-wide transition-colors duration-300 group flex items-center ${isActive('/') ? 'text-[var(--color-accent)] font-bold' : 'text-stone-300 hover:text-amber-400'
                  }`} onClick={closeMenus}>
                  Home
                  <span className={`absolute bottom-[-10px] left-0 right-0 h-[2px] bg-amber-500 transition-transform duration-300 origin-center ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={`relative py-2.5 px-4 text-sm font-medium tracking-wide transition-colors duration-300 group flex items-center ${isActive('/about') ? 'text-[var(--color-accent)] font-bold' : 'text-stone-300 hover:text-amber-400'
                  }`} onClick={closeMenus}>
                  About Us
                  <span className={`absolute bottom-[-10px] left-0 right-0 h-[2px] bg-amber-500 transition-transform duration-300 origin-center ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              </li>
              <li>
                <Link to="/products/asbestos-mill-board" className={`relative py-2.5 px-4 text-sm font-medium tracking-wide transition-colors duration-300 group flex items-center ${isProductsActive ? 'text-[var(--color-accent)] font-bold' : 'text-stone-300 hover:text-amber-400'
                  }`} onClick={closeMenus}>
                  Asbestos Mill Board
                  <span className={`absolute bottom-[-10px] left-0 right-0 h-[2px] bg-amber-500 transition-transform duration-300 origin-center ${isProductsActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              </li>
              <li>
                <Link to="/clients" className={`relative py-2.5 px-4 text-sm font-medium tracking-wide transition-colors duration-300 group flex items-center ${isActive('/clients') ? 'text-[var(--color-accent)] font-bold' : 'text-stone-300 hover:text-amber-400'
                  }`} onClick={closeMenus}>
                  Our Clients
                  <span className={`absolute bottom-[-10px] left-0 right-0 h-[2px] bg-amber-500 transition-transform duration-300 origin-center ${isActive('/clients') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`relative py-2.5 px-4 text-sm font-medium tracking-wide transition-colors duration-300 group flex items-center ${isActive('/contact') ? 'text-[var(--color-accent)] font-bold' : 'text-stone-300 hover:text-amber-400'
                  }`} onClick={closeMenus}>
                  Contact
                  <span className={`absolute bottom-[-10px] left-0 right-0 h-[2px] bg-amber-500 transition-transform duration-300 origin-center ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              </li>
            </ul>

            {/* Desktop CTA & Menu Controls */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden lg:flex px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-linear-to-b from-stone-900 to-stone-950 hover:from-stone-900 hover:to-stone-800 text-amber-400 hover:text-amber-300 border border-stone-800 hover:border-stone-750 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 active:scale-98">
                Get a Quote
              </Link>

              {/* Mobile menu button - visible below lg */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl border border-stone-800/80 bg-stone-900/20 text-stone-300 hover:bg-amber-950/40 hover:text-amber-400 hover:border-amber-900/60 transition-all duration-250 cursor-pointer shadow-xs"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                {mobileMenuOpen ? (
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu panel - visible below lg when open */}
          <div
            className={`absolute top-full left-4 right-4 z-50 lg:hidden transition-all duration-300 ease-out origin-top ${mobileMenuOpen ? 'max-h-[calc(100vh-100px)] overflow-y-auto opacity-100 mt-2 scale-100 visible' : 'max-h-0 opacity-0 mt-0 scale-95 invisible overflow-hidden pointer-events-none'
              }`}
            aria-hidden={!mobileMenuOpen}
          >
            <div className="border border-stone-800/60 bg-stone-950/95 backdrop-blur-xl rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] p-3 mb-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${isActive('/') ? 'bg-amber-950/30 text-amber-400 font-semibold border-l-2 border-amber-500/80 pl-3.5 ml-0.5 rounded-l-none' : 'text-stone-300 hover:bg-stone-900/60 hover:text-stone-100'
                      }`}
                    onClick={closeMenus}
                  >
                    <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${isActive('/about') ? 'bg-amber-950/30 text-amber-400 font-semibold border-l-2 border-amber-500/80 pl-3.5 ml-0.5 rounded-l-none' : 'text-stone-300 hover:bg-stone-900/60 hover:text-stone-100'
                      }`}
                    onClick={closeMenus}
                  >
                    <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/asbestos-mill-board"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${isProductsActive ? 'bg-amber-950/30 text-amber-400 font-semibold border-l-2 border-amber-500/80 pl-3.5 ml-0.5 rounded-l-none' : 'text-stone-300 hover:bg-stone-900/60 hover:text-stone-100'
                      }`}
                    onClick={closeMenus}
                  >
                    <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>Asbestos Mill Board</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/clients"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${isActive('/clients') ? 'bg-amber-950/30 text-amber-400 font-semibold border-l-2 border-amber-500/80 pl-3.5 ml-0.5 rounded-l-none' : 'text-stone-300 hover:bg-stone-900/60 hover:text-stone-100'
                      }`}
                    onClick={closeMenus}
                  >
                    <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Our Clients</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${isActive('/contact') ? 'bg-amber-950/30 text-amber-400 font-semibold border-l-2 border-amber-500/80 pl-3.5 ml-0.5 rounded-l-none' : 'text-stone-300 hover:bg-stone-900/60 hover:text-stone-100'
                      }`}
                    onClick={closeMenus}
                  >
                    <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-stone-800/60 flex flex-col gap-2">
                <a
                  href="tel:+919411826175"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white hover:bg-amber-700 text-xs font-bold tracking-widest transition-colors shadow-sm bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-[0_4px_12px_rgba(230,101,21,0.25)]"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321.988l-1.305 1.305a12.933 12.933 0 005.07 5.07l1.305-1.305a1.3 1.3 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-semibold text-stone-100 mb-3 text-lg">About Us</h3>
              <p className="text-sm leading-relaxed text-stone-400">
                SSMBI is a premier manufacturer and supplier of high-temperature Asbestos Mill Board Sheets in India, offering soft, medium, and hard grades for extreme heat environments.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-stone-100 mb-3 text-lg">Working Hours</h3>
              <p className="text-sm text-stone-400">
                We work 7 days a week, excluding major holidays. Contact us for emergencies.
              </p>
              <p className="text-sm mt-2 text-stone-450">Monday – Sunday: 10:00 AM – 07:00 PM</p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-stone-100 mb-3 text-lg">Millboard Grades</h3>
              <ul className="text-sm space-y-2 text-stone-450">
                <li><Link to="/products/asbestos-mill-board" className="hover:text-amber-450 transition">Soft Grade (Conformal)</Link></li>
                <li><Link to="/products/asbestos-mill-board" className="hover:text-amber-450 transition">Medium Grade (General Thermal)</Link></li>
                <li><Link to="/products/asbestos-mill-board" className="hover:text-amber-450 transition">Hard Grade (High Strength)</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-stone-100 mb-3 text-lg">Contact Us</h3>
              <a
                href="https://www.google.com/maps/place/Shri+Sai+Mill+Board+Industries/@28.8248656,77.2480893,17z/data=!4m14!1m7!3m6!1s0x390c55909258237f:0xed43c9db90121edb!2sShri+Sai+Mill+Board+Industries!8m2!3d28.8248803!4d77.2480068!16s%2Fg%2F11ytkp3016!3m5!1s0x390c55909258237f:0xed43c9db90121edb!8m2!3d28.8248803!4d77.2480068!16s%2Fg%2F11ytkp3016?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-relaxed mb-3 text-stone-400 hover:text-amber-400 transition-colors block"
              >
                Plot No -895M, khata No-62,<br />
                SUBHANPUR KHEKRA BAGHPAT,<br />
                UTTAR PRADESH - 201102
              </a>
              <p className="text-sm mb-3">
                <a href="tel:+919411826175" className="block text-amber-400 hover:text-amber-300 transition">+91 9411826175</a>
                <a href="tel:+919411263924" className="block text-amber-400 hover:text-amber-300 transition">+91 9411263924</a>
              </p>
              <a href="mailto:shrisaimillboardindustries@gmail.com" className="text-amber-400 hover:underline text-xs transition break-all block" title="shrisaimillboardindustries@gmail.com">
                shrisaimillboardindustries@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-stone-800/60 mt-8 pt-6 text-center text-sm text-stone-600">
            © {new Date().getFullYear()} SSMBI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
