import React from 'react'

export default function Feedback() {
  const reviewImages = [
    {
      src: '/reviews/whatsapp-review-1.svg',
      alt: 'WhatsApp review screenshot from a customer in Maharagama',
    },
    {
      src: '/reviews/google-review-1.svg',
      alt: 'Google review screenshot from a customer in Kandy',
    },
    {
      src: '/reviews/whatsapp-review-2.svg',
      alt: 'WhatsApp review screenshot from a customer in Kaduwela',
    },
  ]

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
          {reviewImages.map((reviewImage) => (
            <div key={reviewImage.src} className="bg-white rounded-xl shadow-sm border border-stone-200/40 overflow-hidden">
              <div className="relative bg-stone-100">
                <img src={resolveImageSrc(reviewImage.src)} alt={reviewImage.alt} className="w-full h-56 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
