import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useMemo, useState, useCallback } from 'react'
import redux from '../../public/images/articles/redux.png'
import jwt from '../../public/images/articles/jwt.png'
import git from '../../public/images/articles/git.png'
import asynchronous from '../../public/images/articles/AsynchronousJavaScript.png'
import object from '../../public/images/articles/Object-Oriented.png'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image);

const ARTICLES_PER_PAGE = 20;
const FEATURED_COUNT = 2;

const MovingImg = React.memo(({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouse = useCallback((event) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'inline-block';
        }
        x.set(event.pageX);
        y.set(-10);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        if (imgRef.current) {
            imgRef.current.style.display = 'none';
        }
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <Link 
            href={link} 
            target='_blank'
            rel='noopener noreferrer'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className='group'
            aria-label={`Read article: ${title}`}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline hover:text-primary transition-colors duration-300 xs:text-lg'>
                {title}
            </h2>
            <FramerImage 
                style={{ x, y }}
                src={img}
                alt={title}
                ref={imgRef}
                className='w-96 h-auto hidden absolute rounded-lg md:!hidden z-50 shadow-2xl pointer-events-none'
            />
        </Link>
    )
});

MovingImg.displayName = 'MovingImg';

const Article = React.memo(({ img, title, date, link }) => {
    return (
        <article className='relative w-full p-6 my-4 rounded-2xl flex items-center justify-between bg-white/5 backdrop-blur-sm text-white first:mt-0 border border-white/10 hover:border-primary/50 transition-all duration-300 sm:flex-col group overflow-hidden hover:scale-[1.01]'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            
            <div className='relative z-10 flex-1'>
                <MovingImg 
                    title={title}
                    img={img}
                    link={link}
                />
            </div>
            <time 
                dateTime={new Date(date).toISOString().split('T')[0]} 
                className='relative z-10 text-primary/80 font-medium pl-4 sm:self-start sm:pl-0 sm:mt-2 xs:text-sm'
            >
                {date}
            </time>
        </article>
    )
});

Article.displayName = 'Article';

const FeatureArticles = React.memo(({ img, title, time, summary, link, index }) => {
    return (
        <motion.article 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 }}}
            viewport={{ once: true, margin: "-50px" }}
            className='relative col-span-1 w-full p-6 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group overflow-hidden'
        >
            <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

            <div className='relative z-10'>
                <Link 
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block relative w-full overflow-hidden rounded-2xl group/image mb-4'
                    aria-label={`Read article: ${title}`}
                >
                    <FramerImage 
                        src={img} 
                        alt={title}  
                        className='w-full h-auto' 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        priority={index < 2}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none' />
                    
                    <span className='absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover/image:opacity-100 transition-all duration-300 translate-x-2 group-hover/image:translate-x-0'>
                        Read More →
                    </span>
                </Link>

                <Link href={link} target='_blank' rel='noopener noreferrer' className='group/title'>
                    <h2 className='capitalize text-2xl font-bold my-2 hover:text-primary transition-colors duration-300 lg:text-xl'>
                        {title}
                    </h2>
                </Link>
                
                <p className='text-sm mb-4 text-white/70 line-clamp-3 leading-relaxed'>
                    {summary}
                </p>
                
                <div className='flex items-center justify-between'>
                    <span className='text-primary font-semibold text-sm'>
                        {time}
                    </span>
                    <div className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300'>
                        <span className='text-primary text-xs'>→</span>
                    </div>
                </div>
            </div>
        </motion.article>
    )
});

FeatureArticles.displayName = 'FeatureArticles';

const Pagination = React.memo(({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        const showEllipsis = totalPages > 7;
        
        if (!showEllipsis) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        
        return pages;
    };

    return (
        <nav className='flex items-center justify-center gap-2 mt-12' aria-label="Pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className='px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300'
                aria-label="Previous page"
            >
                ←
            </button>
            
            {getPageNumbers().map((page, idx) => (
                page === '...' ? (
                    <span key={`ellipsis-${idx}`} className='px-2 text-white/40'>...</span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                            currentPage === page
                                ? 'bg-primary border-primary text-white'
                                : 'bg-white/5 border-white/10 hover:border-primary/50'
                        }`}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                )
            ))}
            
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300'
                aria-label="Next page"
            >
                →
            </button>
        </nav>
    );
});

Pagination.displayName = 'Pagination';

const ARTICLES_DATA = [
    {
        title: 'Simplifying State Management with Redux Toolkit',
        date: 'July 13, 2023',
        summary: 'Learn how to simplify state management in your React applications using Redux Toolkit.',
        time: '10 min read',
        link: 'https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1',
        img: redux,
        featured: true,
        tags: ['react', 'redux', 'state-management']
    },
    {
        title: 'Implementing JWT Authentication in Rails',
        date: 'May 20, 2023',
        summary: "Learn how to implement JWT authentication in your Rails applications.",
        time: '5 min read',
        link: 'https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6',
        img: jwt,
        featured: true,
        tags: ['rails', 'authentication', 'jwt']
    },
    {
        title: 'Complete Guide to Git Version Control: Mastering Collaboration',
        date: 'July 6, 2023',
        link: 'https://towardsdev.com/complete-guide-to-git-version-control-mastering-collaboration-e7f3a76e7a5',
        img: git,
        tags: ['git', 'version-control']
    },
    {
        title: 'Mastering Asynchronous Programming in JavaScript: A Comprehensive Guide',
        date: 'Jun 24, 2024',
        link: 'https://medium.com/@bernardbebeni/mastering-asynchronous-programming-in-javascript-a-comprehensive-guide-0384c105d518',
        img: asynchronous,
        tags: ['javascript', 'async']
    },
    {
        title: 'Mastering Object-Oriented Programming (OOP) in JavaScript',
        date: 'Jun 20, 2024',
        link: 'https://bernardbebeni.hashnode.dev/mastering-object-oriented-programming-oop-in-javascript',
        img: object,
        tags: ['javascript', 'oop']
    }
];

const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('all');

    const allTags = useMemo(() => {
        const tags = new Set();
        ARTICLES_DATA.forEach(article => {
            article.tags?.forEach(tag => tags.add(tag));
        });
        return ['all', ...Array.from(tags).sort()];
    }, []);

    const filteredArticles = useMemo(() => {
        return ARTICLES_DATA.filter(article => {
            const matchesSearch = searchQuery === '' || 
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.summary?.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesTag = selectedTag === 'all' || 
                article.tags?.includes(selectedTag);
            
            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    const { paginatedArticles, totalPages, featuredArticles } = useMemo(() => {
        const featured = filteredArticles.filter(article => article.featured).slice(0, FEATURED_COUNT);
        const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
        const endIndex = startIndex + ARTICLES_PER_PAGE;
        const paginated = filteredArticles.slice(startIndex, endIndex);
        const pages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
        
        return { 
            paginatedArticles: paginated, 
            totalPages: pages,
            featuredArticles: featured 
        };
    }, [filteredArticles, currentPage]);

    const handleSearch = useCallback((value) => {
        setSearchQuery(value);
        setCurrentPage(1);
    }, []);

    const handleTagChange = useCallback((tag) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    }, []);

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Head>
                <title>Bernard | Articles Page</title>
                <meta name='description' content='Explore insightful articles on web development, JavaScript, React, and modern software engineering practices.' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center text-white overflow-hidden'>
                <Layout className='pt-16'>
                    <header className='relative mb-20'>
                        <AnimatedText 
                            text='Words Revolutionize Software!'
                            className='mb-6 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                        />
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className='text-center text-white/60 text-lg max-w-2xl mx-auto lg:text-base sm:text-sm'
                        >
                            Exploring the latest in web development, architecture, and software craftsmanship
                        </motion.p>
                    </header>

                    {featuredArticles.length > 0 && currentPage === 1 && searchQuery === '' && selectedTag === 'all' && (
                        <section aria-labelledby="featured-articles" className='mb-32'>
                            <h2 id="featured-articles" className="sr-only">Featured Articles</h2>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'
                            >
                                {featuredArticles.map((article, index) => (
                                    <FeatureArticles 
                                        key={article.link}
                                        index={index}
                                        {...article}
                                    />
                                ))}
                            </motion.div>
                        </section>
                    )}

                    <section className='mb-12'>
                        <div className='flex flex-col gap-6 mb-8'>
                            {/* Search Bar */}
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Search articles...'
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className='w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none text-white placeholder:text-white/40 transition-all duration-300'
                                    aria-label="Search articles"
                                />
                                <span className='absolute right-6 top-1/2 -translate-y-1/2 text-white/40'>
                                    🔍
                                </span>
                            </div>

                            {/* Tag Filter */}
                            <div className='flex flex-wrap gap-2'>
                                {allTags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => handleTagChange(tag)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                            selectedTag === tag
                                                ? 'bg-primary text-white'
                                                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                                        }`}
                                        aria-pressed={selectedTag === tag}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h2 className='font-bold text-4xl lg:text-3xl sm:text-2xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent'>
                                {searchQuery || selectedTag !== 'all' ? 'Search Results' : 'All Articles'}
                            </h2>
                            <span className='text-white/40 text-sm'>
                                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </section>

                    <section aria-labelledby="all-articles">
                        <h2 id="all-articles" className="sr-only">Articles List</h2>
                        {paginatedArticles.length > 0 ? (
                            <>
                                <div className='space-y-0'>
                                    {paginatedArticles.map((article) => (
                                        <Article 
                                            key={article.link}
                                            title={article.title}
                                            date={article.date}
                                            link={article.link}
                                            img={article.img}
                                        />
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <Pagination 
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                )}
                            </>
                        ) : (
                            <div className='text-center py-20'>
                                <p className='text-white/60 text-lg'>No articles found matching your criteria.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedTag('all');
                                        setCurrentPage(1);
                                    }}
                                    className='mt-4 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors duration-300'
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </section>
                </Layout>
            </main>
        </>
    )
}

export default Articles