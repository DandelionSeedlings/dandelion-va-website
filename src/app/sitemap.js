import { getAllPosts } from '../lib/blog'

const base = 'https://dandelioncreations.co.za'

export default function sitemap() {
  const pages = [
    '/', '/book', '/abilitysuite', '/payability', '/bookability', '/receiptsnap', '/visibility',
    '/connectability', '/scalability', '/availability', '/mini-cash-up', '/trackability', '/schoolability', '/orderability', '/profitability', '/aceiq', '/budgetability', '/embeddedsupport', '/partners', '/setup-guide', '/refunds', '/cv', '/adaptability', '/claude', '/blog',
  ].map((path) => ({ url: base + path, lastModified: new Date() }))

  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

  return [...pages, ...posts]
}
