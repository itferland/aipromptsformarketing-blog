import React from 'react'

export default function SuccessStories() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded bg-zinc-800">
          <h3 className="font-bold text-lg">Boosting Engagement with AI-Driven Content</h3>
          <p className="text-sm mt-2">Wicked Skateboards: Created a 30-day content calendar powered by Gemini, boosting Instagram reach.</p>
        </div>
        <div className="border p-4 rounded bg-zinc-800">
          <h3 className="font-bold text-lg">Streamlining Operations with Marketing Automation</h3>
          <p className="text-sm mt-2">Tech-Innovators Inc.: Audited email workflows and deployed automated lead nurturing using n8n.</p>
        </div>
      </div>
    </section>
  )
}