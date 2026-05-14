import React, { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const contactCards = [
  {
    icon: <EmailIcon />,
    title: 'Email',
    value: 'bernardbebeni@gmail.com',
    href: 'mailto:bernardbebeni@gmail.com',
  },
  {
    icon: <LocationOnIcon />,
    title: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
  },
  {
    icon: <WorkOutlineIcon />,
    title: 'Availability',
    value: 'Open to projects and full-time roles',
    href: null,
  },
];

const socialLinks = [
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/bernard_bebeni',
    label: 'Twitter',
  },
  {
    icon: <LinkedInIcon />,
    href: 'https://www.linkedin.com/in/benard-bebeni/',
    label: 'LinkedIn',
  },
  {
    icon: <GitHubIcon />,
    href: 'https://github.com/Bernard065',
    label: 'GitHub',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: 'loading',
      message: 'Sending your message...',
    });

    // Temporary simulated submission.
    // Replace this later with Formspree, Resend, EmailJS, or a Next.js API route.
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: "Message sent successfully. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus({
          type: '',
          message: '',
        });
      }, 5000);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Bernard | Contact</title>
        <meta
          name="description"
          content="Contact Bernard for full-stack development, web applications, collaborations, and software projects."
        />
      </Head>

      <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <Layout className="relative z-10 px-4 pt-20 pb-24 sm:px-6 md:px-10 xl:px-24">
          <header className="mx-auto mb-16 max-w-4xl text-center">
            <AnimatedText
              text="Let's Build Something Useful."
              className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Have a project, role, collaboration, or technical idea in mind?
              Send me a message and I will get back to you as soon as possible.
            </p>
          </header>

          <section className="grid grid-cols-12 gap-8 lg:grid-cols-1">
            <motion.aside
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="col-span-4 space-y-6 lg:col-span-1"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Contact Info
                </p>

                <h2 className="mb-8 text-2xl font-bold text-white">
                  Reach me directly
                </h2>

                <div className="space-y-4">
                  {contactCards.map((card) => (
                    <div
                      key={card.title}
                      className="group flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4 transition-all hover:border-orange-500/40 hover:bg-orange-500/10"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                        {card.icon}
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">{card.title}</p>

                        {card.href ? (
                          <a
                            href={card.href}
                            className="break-all font-medium text-white transition-colors hover:text-orange-400"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white">{card.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Socials
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-gray-300 transition-all hover:border-orange-500/50 hover:bg-orange-500 hover:text-white hover:scale-105"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-green-500/20 bg-green-500/10 p-6 backdrop-blur-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                  <h3 className="text-lg font-bold text-green-300">
                    Available for Work
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-gray-300">
                  Currently open to full-stack development roles, freelance
                  projects, technical writing, and collaboration opportunities.
                </p>
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="col-span-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8 lg:col-span-1"
            >
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Message
                </p>

                <h2 className="text-3xl font-bold text-white">
                  Send me a message
                </h2>

                <p className="mt-3 text-gray-400">
                  Fill in the form below and I will respond within 24 hours on
                  business days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Name <span className="text-orange-400">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email <span className="text-orange-400">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject <span className="text-orange-400">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message <span className="text-orange-400">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, role, or idea..."
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl border p-4 text-sm font-medium ${
                      status.type === 'success'
                        ? 'border-green-500/30 bg-green-500/10 text-green-300'
                        : status.type === 'error'
                        ? 'border-red-500/30 bg-red-500/10 text-red-300'
                        : 'border-orange-500/30 bg-orange-500/10 text-orange-300'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
                  className="w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-bold text-white transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Contact;