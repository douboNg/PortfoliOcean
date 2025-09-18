import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import blogData from '../data/blog.json'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { posts } = blogData
  
  const post = posts.find(p => p.slug === slug)
  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container-custom">
        {/* Back Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-ocean-600 hover:text-ocean-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Portfolio</span>
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            {/* Featured Image Placeholder */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-ocean-400 to-navy-500 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <p className="text-lg opacity-75">Featured Article Image</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
              <span>{formatDate(post.publishedDate)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-500 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-ocean-100 text-ocean-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Convert markdown-like content to JSX */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-navy-500 mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-navy-500 mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-navy-500 mt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[\w]*\n?/g, '')
                return (
                  <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                    <code className="text-sm text-gray-800">{codeContent}</code>
                  </pre>
                )
              }
              if (paragraph.startsWith('- ')) {
                const listItems = paragraph.split('- ').filter(item => item.trim())
                return (
                  <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                    {listItems.map((item, idx) => (
                      <li key={idx} className="text-gray-700">{item.trim()}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-gray-600">
                  Written by <span className="font-semibold text-navy-500">{post.author}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Published on {formatDate(post.publishedDate)}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <button className="text-ocean-600 hover:text-ocean-700 transition-colors">
                  Share on Twitter
                </button>
                <button className="text-ocean-600 hover:text-ocean-700 transition-colors">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="mt-20 py-16 bg-beach-sand rounded-2xl">
            <div className="px-8">
              <h2 className="text-2xl font-bold text-navy-500 mb-8 text-center">
                Other Articles You Might Enjoy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="card group"
                  >
                    <div className="h-32 bg-gradient-to-br from-ocean-400 to-navy-500 rounded-t-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-navy-500 group-hover:text-ocean-600 transition-colors mb-2 text-sm">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default BlogPost