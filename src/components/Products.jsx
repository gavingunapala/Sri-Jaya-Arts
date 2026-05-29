import React, { useState } from 'react'
import productsData from '../data/products.json'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function Products() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">Our Pillars Gallery</h2>
        <p className="text-stone-600">Click on any product to see its full specifications and place an order instantly.</p>
        <div className="w-16 h-1 bg-amber-700 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productsData.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={setSelected} />
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
