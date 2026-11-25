export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://dandelioncreations.co.za/sitemap.xml',
      'https://dandelioncreations.co.za/wishes/sitemap.xml',
    ],
  }
}