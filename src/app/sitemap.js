export default async function sitemap() {
  const baseUrl = 'https://dandelioncreations.co.za'

  const routes = [
    '',
    '/about',
    '/services',
    '/products',
    '/pricing',
    '/portfolio',
    '/blog',
    '/contact',
    '/resellers',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}