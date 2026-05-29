import React from 'react'

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
            <p className="text-stone-700 text-sm">123, Temple Road, Highlevel Area, Maharagama, Sri Lanka.</p>
          </div>
          <div className="space-y-3 text-sm">
            <p><strong>📞 Phone:</strong> +94 7X XXX XXXX</p>
            <p><strong>💬 WhatsApp:</strong> +94 7X XXX XXXX</p>
            <p><strong>✉️ Email:</strong> info@pilimakanu.lk</p>
            <p><strong>⏰ Working Hours:</strong> Daily 8:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="w-full h-72 bg-stone-200 rounded-xl overflow-hidden shadow-inner relative border border-stone-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3411440620253!2d79.9224451!3d6.8496245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25761a293d047%3A0xa1969df3b12f6fbf!2sMaharagama!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk" 
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
