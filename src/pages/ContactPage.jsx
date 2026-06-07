import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const CONTACT_EMAIL = 'shrisaimillboardindustries@gmail.com'

const ENQUIRY_LABELS = {
  'asbestos-mill-board': 'Asbestos Mill Board',
  'bricks': 'Bricks',
  'mortars': 'Mortars',
  'castables': 'Castables',
  'steel-anchors': 'Steel Anchors',
  'ceramic-fibers-and-board': 'Ceramic Fibers & Board',
  'calcium-silicate-board': 'Calcium Silicate Board',
  'other-products': 'Other Products',
}

function buildMailtoLink({ name, email, phone, subject, message, enquiryProduct }) {
  const subjectLine = enquiryProduct
    ? `Enquiry: ${ENQUIRY_LABELS[enquiryProduct] || enquiryProduct} - ${subject}`
    : `Website Enquiry: ${subject}`

  const bodyLines = [
    '---',
    'Enquiry for SSMBI Website',
    '---',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Subject: ${subject}`,
    ...(enquiryProduct ? [`Product of interest: ${ENQUIRY_LABELS[enquiryProduct] || enquiryProduct}`] : []),
    '',
    'Message:',
    message,
  ]
  const body = bodyLines.join('\n')

  const params = new URLSearchParams({
    subject: subjectLine,
    body,
  })
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const enquiryFromUrl = searchParams.get('enquiry') || ''

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    if (!enquiryFromUrl || !ENQUIRY_LABELS[enquiryFromUrl]) return
    const productName = ENQUIRY_LABELS[enquiryFromUrl]
    setSubject(prev => prev || `Enquiry for ${productName}`)
    setMessage(prev => prev || `I am interested in ${productName}. Please share details and pricing.\n\n`)
  }, [enquiryFromUrl])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const phone = form.phone.value.trim()
    const subj = form.subject.value.trim()
    const msg = form.message.value.trim()

    if (!name || !email || !subj || !msg) return

    const mailto = buildMailtoLink({
      name,
      email,
      phone,
      subject: subj,
      message: msg,
      enquiryProduct: enquiryFromUrl || undefined,
    })

    setShowHint(true)
    window.location.href = mailto
  }

  return (
    <main className="theme-page min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-stone-200/30 border-b border-stone-200/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-[var(--color-brand)] transition font-medium">Home</Link></li>
            <li className="text-stone-400">/</li>
            <li className="text-stone-900 font-bold">Contact</li>
          </ol>
        </div>
      </div>

      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="font-display theme-section-title text-3xl font-bold text-stone-900 mb-3">Contact Us</h1>
        <p className="text-stone-600 mb-10 leading-relaxed">
          Have a question or need a quote? Fill in the details below. Your default email app will open with the message ready to send to us.
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="theme-card p-5">
            <h2 className="font-display font-semibold text-stone-900 mb-2.5 text-lg">Address</h2>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Plot+No+-895M,+khata+No-62,+SUBHANPUR+KHEKRA+BAGHPAT+UTTAR+PRADESH+-+201102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-650 hover:text-[var(--color-brand)] text-sm leading-relaxed transition-colors block"
            >
              Plot No -895M, khata No-62,<br />
              SUBHANPUR KHEKRA BAGHPAT,<br />
              UTTAR PRADESH - 201102
            </a>
          </div>
          <div className="theme-card p-5">
            <h2 className="font-display font-semibold text-stone-900 mb-2.5 text-lg">Phone &amp; Email</h2>
            <p className="text-stone-600 text-sm leading-relaxed space-y-1">
              <a href="tel:+919411826175" className="block text-[var(--color-brand)] hover:text-[var(--color-brand-hover)] transition-colors font-semibold">+91 9411826175</a>
              <a href="tel:+919411263924" className="block text-[var(--color-brand)] hover:text-[var(--color-brand-hover)] transition-colors font-semibold">+91 9411263924</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block text-[var(--color-brand)] hover:text-[var(--color-brand-hover)] transition-colors font-semibold break-all text-xs" title={CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="theme-card p-6 md:p-8">
          {showHint && (
            <div className="mb-6 p-4 bg-amber-50 text-amber-950 rounded-xl text-sm border border-amber-200/80 shadow-xs">
              Your email client should open with the message. Please click <strong>Send</strong> there to complete your enquiry.
            </div>
          )}
          
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-stone-850 mb-1.5">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] focus:bg-white transition duration-200 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-850 mb-1.5">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] focus:bg-white transition duration-200 text-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-stone-850 mb-1.5">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] focus:bg-white transition duration-200 text-sm"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-stone-850 mb-1.5">Subject *</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] focus:bg-white transition duration-200 text-sm"
                placeholder="Enquiry / Quote / General"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-stone-850 mb-1.5">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/20 focus:border-[var(--color-brand)] focus:bg-white resize-y transition duration-200 text-sm"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="theme-btn-primary w-full sm:w-auto"
          >
            Open email to send enquiry
          </button>
        </form>
      </section>
    </main>
  )
}
