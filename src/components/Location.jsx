export default function Location() {
  return (
    <section id="location" className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">අපව සම්බන්ධ කරගන්න (Contact & Location)</h2>
        <p className="text-stone-600">Visit our workshop or contact us directly anytime.</p>
        <div className="w-16 h-1 bg-amber-700 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-amber-50 border-l-4 border-amber-800 p-5 rounded-r-lg">
            <h4 className="font-bold text-stone-900 mb-1">Our Workshop Address</h4>
            <p className="text-stone-700 text-sm">162, Siyabalagoda, Polgasowita, Sri Lanka.</p>
          </div>
          <div className="space-y-3 text-sm text-stone-700">
            <p><strong>📞 Phone:</strong> +94 71 674 8730</p>
            <p><strong>💬 WhatsApp:</strong> +94 71 674 8730</p>
            <p><strong>✉️ Email:</strong> info@pilimakanu.lk</p>
            <p><strong>⏰ Working Hours:</strong> Daily 8:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="w-full h-72 bg-stone-200 rounded-xl overflow-hidden shadow-inner relative border border-stone-300">
          <iframe
            src="https://www.google.com/maps?q=6.792502,79.9694945&z=19&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SRI JAYA ARTS location map"
          />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
            <a
              href="https://maps.app.goo.gl/D1pE3okVjRckoDkh8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-800 text-white px-3 py-1 rounded-md text-sm shadow"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
