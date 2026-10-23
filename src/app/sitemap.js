import { getAllPosts } from '../lib/blog'

const base = 'https://dandelioncreations.co.za'

export default function sitemap() {
  const pages = [
    '/', '/book', '/order', '/abilitysuite', '/payability', '/bookability', '/receiptsnap',
    '/connectability', '/budgetability', '/embeddedsupport', '/blog',
  ].map((path) => ({ url: base + path, lastModified: new Date() }))

  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

  return [...pages, ...posts]
}
