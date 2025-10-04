import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Bernard | Contact Page</title>
        <meta name='contact' content='contact' />
      </Head>
      <main className='w-full flex flex-col items-center justify-center text-white bg-gray-900 min-h-screen'>
        <Layout className='pt-16'>
          <AnimatedText text="Let's Connect and Build Something Amazing!" />

          <div className='grid grid-cols-2 lg:grid-cols-1 gap-12 items-start mt-8'>
            <motion.div
              className='text-center md:text-left'
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className='text-3xl font-bold mb-4 text-center'>Get In Touch</h2>
              <p className='text-lg text-left mb-3'>
                I&apos;m always interested in new opportunities and exciting projects.
                Whether you have a question, want to collaborate, or just want to say hello,
                I&apos;d love to hear from you!
              </p>
              <p className='text-lg text-left mb-3'>
                Feel free to reach out through the contact form or use any of the methods below.
                I typically respond within 24 hours.
              </p>

              <div className='mt-6'>
                <h3 className='text-xl font-semibold mb-3'>Other ways to reach me:</h3>
                <div className='space-y-2'>
                  <p className='text-lg'>
                    <span className='font-medium'>Email:</span> bernardbebeni@gmail.com
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'>LinkedIn:</span> Let&apos;s connect professionally
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'>GitHub:</span> Check out my latest projects
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='bg-gray-800 p-8 rounded-lg shadow-lg'
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <form className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                    placeholder='Your Name'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                    placeholder='your.email@example.com'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                    placeholder="What&apos;s this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    className='w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none'
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;