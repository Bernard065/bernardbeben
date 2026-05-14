import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import redux from '../../public/images/articles/redux.png';
import jwt from '../../public/images/articles/jwt.png';
import git from '../../public/images/articles/git.png';
import asynchronous from '../../public/images/articles/AsynchronousJavaScript.png';
import object from '../../public/images/articles/Object-Oriented.png';

const ARTICLES_DATA = [
  {
    title: 'Simplifying State Management with Redux Toolkit',
    date: 'July 13, 2023',
    summary:
      'A practical guide to simplifying React state management using Redux Toolkit with cleaner patterns and less boilerplate.',
    time: '10 min read',
    link: 'https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1',
    img: redux,
    featured: true,
    tags: ['React', 'Redux', 'State Management'],
  },
  {
    title: 'Implementing JWT Authentication in Rails',
    date: 'May 20, 2023',
    summary:
      'Learn how JWT authentication works in Rails and how to secure API-based applications using token-based auth.',
    time: '5 min read',
    link: 'https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6',
    img: jwt,
    featured: true,
    tags: ['Rails', 'JWT', 'Authentication'],
  },
  {
    title: 'Complete Guide to Git Version Control: Mastering Collaboration',
    date: 'July 6, 2023',
    summary:
      'A beginner-friendly guide to Git workflows, commits, branches, collaboration, and version control best practices.',
    time: '8 min read',
    link: 'https://towardsdev.com/complete-guide-to-git-version-control-mastering-collaboration-e7f3a76e7a5',
    img: git,
    tags: ['Git', 'Version Control'],
  },
  {
    title: 'Mastering Asynchronous Programming in JavaScript',
    date: 'June 24, 2024',
    summary:
      'A complete breakdown of callbacks, promises, async/await, and how asynchronous JavaScript works under the hood.',
    time: '12 min read',
    link: 'https://medium.com/@bernardbebeni/mastering-asynchronous-programming-in-javascript-a-comprehensive-guide-0384c105d518',
    img: asynchronous,
    tags: ['JavaScript', 'Async'],
  },
  {
    title: 'Mastering Object-Oriented Programming in JavaScript',
    date: 'June 20, 2024',
    summary:
      'Understand classes, objects, inheritance, encapsulation, and practical OOP patterns in JavaScript.',
    time: '9 min read',
    link: 'https://bernardbebeni.hashnode.dev/mastering-object-oriented-programming-oop-in-javascript',
    img: object,
    tags: ['JavaScript', 'OOP'],
  },
];

const ArticleCard = ({ article, index, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all hover:border-orange-500/40 ${
        featured ? 'p-5 sm:p-6' : 'p-5'
      }`}
    >
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl transition-all group-hover:bg-orange-500/20" />

      <div className={featured ? 'space-y-5' : 'flex gap-5 md:flex-col'}>
        <Link
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block overflow-hidden rounded-2xl border border-white/10 ${
            featured ? 'w-full' : 'w-56 shrink-0 md:w-full'
          }`}
        >
          <Image
            src={article.img}
            alt={article.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              featured ? 'h-64 sm:h-72' : 'h-36 md:h-56'
            }`}
            priority={featured && index === 0}
          />
        </Link>

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href={article.link} target="_blank" rel="noopener noreferrer">
            <h2
              className={`font-bold leading-tight text-white transition-colors group-hover:text-orange-400 ${
                featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              }`}
            >
              {article.title}
            </h2>
          </Link>

          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
            {article.summary}
          </p>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-sm text-gray-500">{article.date}</p>
              <p className="text-sm font-medium text-orange-400">
                {article.time}
              </p>
            </div>

            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-orange-500"
            >
              Read →
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = useMemo(() => {
    const uniqueTags = new Set();

    ARTICLES_DATA.forEach((article) => {
      article.tags.forEach((tag) => uniqueTags.add(tag));
    });

    return ['All', ...Array.from(uniqueTags).sort()];
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const search = searchQuery.toLowerCase();

      const matchesSearch =
        article.title.toLowerCase().includes(search) ||
        article.summary.toLowerCase().includes(search) ||
        article.tags.some((tag) => tag.toLowerCase().includes(search));

      const matchesTag =
        selectedTag === 'All' || article.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  return (
    <>
      <Head>
        <title>Bernard | Articles</title>
        <meta
          name="description"
          content="Technical articles by Bernard on JavaScript, React, Git, authentication, and modern software development."
        />
      </Head>

      <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <Layout className="relative z-10 px-4 pt-20 sm:px-6 md:px-10 xl:px-24">
          <header className="mx-auto mb-16 max-w-4xl text-center">
            <AnimatedText
              text="Writing That Makes Code Clear."
              className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
              I write practical technical articles on frontend development,
              backend concepts, authentication, JavaScript, Git, and software
              engineering workflows.
            </p>
          </header>

          <section className="mb-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6">
            <div className="grid grid-cols-[1fr_auto] gap-4 md:grid-cols-1">
              <input
                type="text"
                placeholder="Search articles by title, topic, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
              />

              <span className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-gray-400">
                {filteredArticles.length} article
                {filteredArticles.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-orange-500 text-white'
                      : 'border border-white/10 bg-black/40 text-gray-300 hover:border-orange-500/50 hover:bg-orange-500/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                    Featured
                  </p>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Selected Articles
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
                {featuredArticles.map((article, index) => (
                  <ArticleCard
                    key={article.link}
                    article={article}
                    index={index}
                    featured
                  />
                ))}
              </div>
            </section>
          )}

          <section className="pb-24">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Library
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                All Articles
              </h2>
            </div>

            {regularArticles.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {regularArticles.map((article, index) => (
                  <ArticleCard
                    key={article.link}
                    article={article}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
                <p className="text-gray-400">
                  No articles found. Try clearing your search or selecting a
                  different tag.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag('All');
                  }}
                  className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition-all hover:bg-orange-600"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Articles;