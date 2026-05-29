export default function ProductCard({ product, onOpen }) {
  const resolveImageSrc = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\/+/, '')}`

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200/60 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="overflow-hidden bg-stone-100">
          <img src={resolveImageSrc(product.image)} alt={product.name} className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-5">
          <h3 className="font-extrabold text-xl text-stone-900 mb-3 tracking-tight leading-snug group-hover:text-amber-800 transition-colors">{product.name}</h3>
          <p className="text-stone-700 text-base line-clamp-2 leading-relaxed">{product.shortDescription}</p>
        </div>
      </div>
      <div className="p-5 pt-0">
        <div className="text-amber-800 font-bold text-lg mb-4">{product.price}</div>
        <button onClick={() => onOpen(product)} className="w-full bg-amber-800 hover:bg-amber-900 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-sm">
          View Details & Order
        </button>
      </div>
    </div>
  )
}
