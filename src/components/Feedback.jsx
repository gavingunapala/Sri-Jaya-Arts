import feedbackData from '../data/feedback.json'

export default function Feedback() {
  const resolveImageSrc = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\/+/, '')}`

  return (
    <section id="feedback" className="bg-stone-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">පාරිභෝගික අදහස් (Customer Feedback)</h2>
          <p className="text-stone-600">What our valued clients say about our products and swift delivery.</p>
          <div className="w-16 h-1 bg-amber-700 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbackData.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm border border-stone-200/40 overflow-hidden">
              <div className="relative bg-stone-100">
                <img src={resolveImageSrc(review.image)} alt={review.imageAlt} className="w-full h-56 object-contain" />
              </div>
              <div className="p-5">
                <div className="flex text-amber-500 mb-3 text-lg">★★★★★</div>
                {review.quote ? <p className="text-stone-700 text-sm mb-4 italic">"{review.quote}"</p> : null}
                {review.author ? <div className="font-semibold text-stone-950 text-sm">- {review.author}</div> : <div className="font-semibold text-stone-950 text-sm">{review.source}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
