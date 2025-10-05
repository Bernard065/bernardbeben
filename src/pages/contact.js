import React, { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <EmailIcon className='w-6 h-6' />,
      title: 'Email',
      content: 'bernardbebeni@gmail.com',
      link: 'mailto:bernardbebeni@gmail.com'
    },
    {
      icon: <LocationOnIcon className='w-6 h-6' />,
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: null
    },
    {
      icon: <PhoneIcon className='w-6 h-6' />,
      title: 'Phone',
      content: 'Available on request',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <TwitterIcon className='w-5 h-5' />,
      link: 'https://twitter.com/bernard_bebeni',
      label: 'Twitter'
    },
    {
      icon: <LinkedInIcon className='w-5 h-5' />,
      link: 'https://www.linkedin.com/in/benard-bebeni/',
      label: 'LinkedIn'
    },
    {
      icon: <GitHubIcon className='w-5 h-5' />,
      link: 'https://github.com/Bernard065',
      label: 'GitHub'
    }
  ];

  return (
    <>
      <Head>
        <title>Bernard | Contact Page</title>
        <meta name='description' content='Get in touch with Bernard Bebeni for collaborations, projects, or just to say hello.' />
      </Head>
      <main className='w-full flex flex-col items-center justify-center text-white bg-gray-900 min-h-screen'>
        <Layout className='pt-16 pb-16'>
          <AnimatedText text="Let's Connect and Build Something Amazing!" className='mb-8' />
          
          <motion.p 
            className='text-center text-gray-300 text-lg max-w-2xl mx-auto mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have a project in mind? Want to collaborate? Or just want to chat about tech? 
            I'm always open to discussing new opportunities and ideas.
          </motion.p>

          <div className='grid grid-cols-12 lg:grid-cols-1 gap-8 items-start'>
            {/* Left Column - Contact Info */}
            <motion.div
              className='col-span-4 lg:col-span-1 space-y-6'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className='bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50'>
                <h3 className='text-2xl font-bold mb-6 text-orange-500'>Contact Information</h3>
                
                <div className='space-y-4'>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors duration-300'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className='text-orange-500 mt-1'>
                        {info.icon}
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm text-gray-400 mb-1'>{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className='text-white hover:text-orange-500 transition-colors duration-300 break-all'
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className='text-white'>{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className='bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50'>
                <h3 className='text-xl font-bold mb-4 text-orange-500'>Follow Me</h3>
                <div className='flex gap-3'>
                  {socialLinks.map((social, index) => (
                    <Link 
                      key={index}
                      href={social.link} 
                      target='_blank'
                      className='p-3 rounded-lg bg-gray-700/50 hover:bg-orange-500/20 hover:scale-110 transition-all duration-300 group'
                      aria-label={social.label}
                    >
                      <div className='text-white group-hover:text-orange-500 transition-colors duration-300'>
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <motion.div
                className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-6 rounded-xl border border-green-500/30'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <h4 className='text-lg font-semibold text-green-400'>Available for Work</h4>
                </div>
                <p className='text-sm text-gray-300'>
                  Currently accepting new projects and collaborations
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className='col-span-8 lg:col-span-1 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700/50'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className='text-3xl font-bold mb-6 text-white'>Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-2 md:grid-cols-1 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium mb-2 text-gray-300'>
                      Name <span className='text-orange-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                      placeholder='Your Name'
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-medium mb-2 text-gray-300'>
                      Email <span className='text-orange-500'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                      placeholder='Your Email'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium mb-2 text-gray-300'>
                    Subject <span className='text-orange-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                    placeholder='Project Collaboration'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium mb-2 text-gray-300'>
                    Message <span className='text-orange-500'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all duration-300'
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                        : status.type === 'error'
                        ? 'bg-red-500/20 border border-red-500/50 text-red-400'
                        : 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type='submit'
                  className='w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>

              <p className='text-center text-gray-400 text-sm mt-6'>
                I typically respond within 24 hours on business days
              </p>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;