import React from 'react'
import profileImg from '../assets/Profile image.png'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-amber-800 tracking-wide flex items-center gap-2">
          <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-2xl">🛕</span> SRI JAYA ARTS Wiyaparaya
        </a>
        <nav className="hidden md:flex space-x-6 font-medium text-stone-600">
          <a href="#products" className="hover:text-amber-800 transition">Products</a>
          <a href="#feedback" className="hover:text-amber-800 transition">Customer Reviews</a>
          <a href="#location" className="hover:text-amber-800 transition">Our Location</a>
        </nav>
        <a href="#products" className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-md text-sm font-medium transition">
          View Gallery
        </a>
      </div>
    </header>
  )
}
