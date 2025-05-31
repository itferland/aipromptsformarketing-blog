import React from 'react'
import './index.css'
import FloatingMenu from './components/FloatingMenu'
import SuccessStories from './components/SuccessStories'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      <div className="absolute inset-0 animate-background" />
      <h1 className="text-4xl text-center pt-10 z-10 relative">AI Solutions Consulting</h1>
      <FloatingMenu />
      <main className="relative z-10 mt-10">
        <SuccessStories />
      </main>
    </div>
  )
}