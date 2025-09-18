import React from 'react'
import { Link } from 'react-router-dom'
import blogData from '../../data/blog.json'

const Blog = () => {
  const { posts } = blogData
  const featuredPosts = posts.filter(post => post.featured)
  const recentPosts = posts.slice(0, 3)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const BlogCard = ({ post, featured = false }) => (
    <Link
      to={`/blog/${post.slug}`}
      className={`card group overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Blog Image Placeholder */}
      <div className={`bg-gradient-to-br from-ocean-400 to-navy-500 relative overflow-hidden ${
        featured ? 'h-64' : 'h-48'
      }`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className={`mx-auto mb-2 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center ${
              featured ? 'w-20 h-20' : 'w-16 h-16'
            }`}>
              <svg className={`${featured ? 'w-10 h-10' : 'w-8 h-8'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <p className={`opacity-75 ${featured ? 'text-base' : 'text-sm'}`}>Blog Featured Image</p>
          </div>
        </div>
        
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-beach-coral text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <span>{formatDate(post.publishedDate)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        <h3 className={`font-bold text-navy-500 group-hover:text-ocean-600 transition-colors mb-3 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, featured ? 4 : 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-ocean-100 text-ocean-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > (featured ? 4 : 3) && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{post.tags.length - (featured ? 4 : 3)}
            </span>
          )}
        </div>

        {/* Read More Link */}
        <div className="flex items-center text-ocean-600 group-hover:text-ocean-700 font-medium">
          <span>Read Article</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 gradient-ocean mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, and the journey of continuous learning.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy-500 mb-8">Featured Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        )}

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold text-navy-500 mb-8">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ocean-500 to-navy-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 text-white/90">
              Subscribe to get notified about new articles and insights on web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-beach-coral"
              />
              <button className="bg-beach-coral hover:bg-beach-coral/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog