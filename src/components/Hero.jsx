import React from 'react'

export default function Hero() {
  return (
    <section className="bg-hero text-ivory py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">ඔබගේ පූජනීය අවකාශයට ගැලපෙන උසස්ම තත්ත්වයේ බුදුපිළිම කණු</h1>
        <p className="text-lg md:text-xl text-ivory mb-8 max-w-xl mx-auto font-light">
          Beautiful, heavy-duty cement and carved pillars built to last. Simple dynamic catalog with straight-to-WhatsApp ordering.
        </p>
        <a href="#products" className="bg-primary hover:bg-primary-hover text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-0.5 inline-block">
          අපගේ නිෂ්පාදන බලන්න (Explore Products)
        </a>
      </div>
    </section>
  )
}
