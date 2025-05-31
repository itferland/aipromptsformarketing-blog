import React from 'react'

export default function FloatingMenu() {
  return (
    <div className="fixed right-6 bottom-6 bg-zinc-900 border border-zinc-700 p-4 rounded z-50 shadow-xl">
      <div className="grid grid-cols-2 gap-2 text-xs font-bold">
        <button className="bg-pink-500 px-2 py-1 rounded">Case Studies</button>
        <button className="bg-cyan-400 px-2 py-1 rounded">Blog</button>
        <button className="bg-yellow-400 px-2 py-1 rounded">Contact</button>
        <button className="bg-purple-500 px-2 py-1 rounded">Our Approach</button>
      </div>
    </div>
  )
}