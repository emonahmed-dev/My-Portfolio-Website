import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-14 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Available for freelance projects, frontend development, website redesigns, and collaboration opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6 lg:grid-cols-[1.6fr_1fr]"
        >
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/95 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.35)]">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Message"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? 'SENDING...' : 'Submit'}
                </button>
                {status === 'success' && (
                  <p className="mt-3 text-sm text-emerald-400">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-3 text-sm text-rose-400">Unable to send message. Please try again.</p>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/95 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.18)]">
            <div>
              <h3 className="text-xl font-semibold text-white">Contact Details</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Reach out for freelance work, collaborations, or frontend development projects.
              </p>
            </div>

            <div className="flex gap-3 mt-3">
              <div className="px-3 py-2 rounded-lg bg-emerald-600/10 text-emerald-300 text-sm font-semibold">Available for Freelance Work</div>
              <div className="px-3 py-2 rounded-lg bg-slate-700/20 text-slate-200 text-sm">Typical response time: Within 24 Hours</div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-4 text-sm text-slate-200">
                <p className="font-semibold text-white">Email</p>
                <p className="mt-1">emon.webdev60@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-4 text-sm text-slate-200">
                <p className="font-semibold text-white">Location</p>
                <p className="mt-1">Moulvibazar, Sylhet, Bangladesh</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 mb-4">Available for</p>
              <div className="grid gap-3">
                {['Freelance Projects', 'React Development', 'Frontend Development', 'Website Redesign'].map((badge) => (
                  <div key={badge} className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 px-4 py-2 text-sm text-slate-100">
                    <span className="text-cyan-300">✓</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 mb-4">Social</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: 'https://github.com/emonahmed-dev', label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/emonahmed-dev/', label: 'LinkedIn' },
                  { href: 'https://x.com/emonahmed_dev', label: 'X' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-700/80 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
