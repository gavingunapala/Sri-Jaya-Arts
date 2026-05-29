import React from 'react'

export default function ProductModal({ product, onClose }) {
  if (!product) return null

  const resolveImageSrc = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\/+/, '')}`

  const whatsappNumber = '947XXXXXXXX'
  const message = `BuduSRI JAYA ARTS Order Form:\n\n*Product Name:* ${product.name}\n*Product Code:* ${product.id}\n*Price:* ${product.price}\n\nMata meka ganna thawa wisthara tikak kiyanna puluwanda?`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transition-all" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-700 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">&times;</button>
        <img src={resolveImageSrc(product.image)} alt={product.name} className="w-full mx-auto max-h-[70vh] object-contain" />
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-2">{product.name}</h3>
          <div className="text-amber-800 font-bold text-xl mb-6">{product.price}</div>
          <div className="border-t border-stone-100 pt-4 mb-6">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Detailed Description</h4>
            <p className="text-stone-700 leading-relaxed text-sm whitespace-pre-line">{product.longDescription}</p>
          </div>
          <div className="bg-stone-50 border border-stone-200/60 p-4 rounded-lg text-sm text-stone-600 mb-8">
            <strong className="text-stone-800">Specifications:</strong> <span>{product.dimensions}</span>
          </div>
          <button onClick={() => window.open(whatsappUrl, '_blank')} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-md shadow-emerald-600/20 text-base">
            WhatsApp හරහා ඇණවුම් කරන්න (Order via WhatsApp)
          </button>
        </div>
      </div>
    </div>
  )
}
