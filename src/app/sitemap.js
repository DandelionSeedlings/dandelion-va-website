export default function sitemap() {
  const base = 'https://www.dandelioncreations.co.za'
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/receiptsnap', lastModified: new Date() },
    { url: base + '/connectability', lastModified: new Date() },
    { url: base + '/bookability', lastModified: new Date() },
    { url: base + '/embeddedsupport', lastModified: new Date() },
  ]
}