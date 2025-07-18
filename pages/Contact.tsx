import React, { useState, useId } from 'react';

const WaveDivider = (): React.ReactNode => {
  const id = useId();
  return (
    <div className="w-full h-20" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,40 C360,120 1080,-40 1440,40"
          stroke={`url(#${id})`}
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#A855F7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#14B8A6" stopOpacity="1" />
            <stop offset="75%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Contact = (): React.ReactNode => {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., send to API)
  };

  return (
    <div className="relative isolate pt-16">
      {/* Background gradients */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <WaveDivider />

      {/* Hero Section */}
      <header className="text-center px-6 max-w-4xl mx-auto py-12 md:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Let's Start a Conversation
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Whether you're ready to start your AI journey or just have a few questions, we're here to help. Reach out to us to learn how AI Solutions Consulting can help you achieve your business goals.
        </p>
      </header>

      <WaveDivider />

      <main>
        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Column 1: Get In Touch */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-100">Get In Touch</h2>
                <ul className="space-y-4 text-slate-300">
                  <li>
                    <strong>Business Address:</strong><br />
                    AI SOLUTIONS CONSULTING LLC
                  </li>
                  <li>
                    <strong>Email:</strong><br />
                    <a href="mailto:contact@aisolutionsconsulting.net" className="text-teal-400">contact@aisolutionsconsulting.net</a>
                  </li>
                  <li>
                    <strong>Phone:</strong><br />
                    <a href="tel:+16034174243" className="text-teal-400">(603) 417-4243</a>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong><br />
                    <a href="https://www.linkedin.com/company/zigzagvc/" target="_blank" rel="noopener noreferrer" className="text-teal-400">linkedin.com/company/zigzagvc/</a>
                  </li>
                </ul>
              </div>
              {/* Column 2: Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-100">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-xl p-6 text-center">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-300">Name</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1 text-slate-300">Company</label>
                      <input type="text" id="company" name="company" value={form.company} onChange={handleChange} className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-300">Email</label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-300">How can we help you?</label>
                      <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-2 text-white" />
                    </div>
                    <button type="submit" className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200">Submit</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Block */}
        <footer className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-2 text-white">Contact AI Solutions Consulting</h2>
              <p className="mb-4 text-slate-300">Let's talk about automating your IT & cloud workflows.</p>
              <ul className="space-y-1 text-slate-300">
                <li><strong>Phone:</strong> <a href="tel:+16034174243" className="text-teal-400">(603) 417-4243</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@aisolutionsconsulting.net" className="text-teal-400">info@aisolutionsconsulting.net</a></li>
                <li><strong>Web:</strong> <a href="/" className="text-teal-400">aisolutionsconsulting.net</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Contact;
