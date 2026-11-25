// Dandelion Wishes has its own sitemap, separate from the Dandelion Creations OS one.
// Served at /wishes/sitemap.xml and listed in robots.txt.
const base = 'https://dandelioncreations.co.za/wishes'

export default function sitemap() {
  return ['', '/start', '/memorybloom', '/rsvpbloom', '/wedding-bloom'].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }))
}
