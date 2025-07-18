import React, { useState } from 'react';

const Contact = (): React.ReactNode => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="text-white">
      <div className="relative isolate pt-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[50rem] h-[50rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[50rem] h-[50rem] translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <header className="text-center py-12 md:py-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let's Start a Conversation
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Whether you're ready to start your AI journey or just have a few questions, we're here to help. Reach out to us to learn how AI Solutions Consulting can help you achieve your business goals.
          </p>
        </header>

        <main>
          <section className="py-16">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 px-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">Get In Touch</h2>
                <div className="mt-4 space-y-4 text-slate-400">
                  <div>
                    <h3 className="font-semibold text-slate-100">Business Address:</h3>
                    <p>AI SOLUTIONS CONSULTING LLC</p>
                    <p>11 Maria Jane Rd</p>
                    <p>New Hampton, NH 03256</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100">Email:</h3>
                    <a href="mailto:contact@aisolutionsconsulting.net" className="hover:text-teal-400">
                      contact@aisolutionsconsulting.net
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100">Phone:</h3>
                    <p>(603) 707-4630</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100">LinkedIn:</h3>
                    <a
                      href="https://www.linkedin.com/company/zigzagvc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400"
                    >
                      linkedin.com/company/zigzagvc/
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-100">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300">Company</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={form.company}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">How can we help you?</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-slate-900 shadow hover:bg-slate-200"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
