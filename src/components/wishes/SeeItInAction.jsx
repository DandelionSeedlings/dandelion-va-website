// "See it in action" section for the MemoryBloom landing page.
// Drop this file into src/components/wishes/ and put the webp files in public/images/wishes/memorybloom/.
// Add to src/app/wishes/memorybloom/page.jsx:
//   import SeeItInAction from '@/components/wishes/SeeItInAction'
//   ...place <SeeItInAction /> after the "Meet MemoryBloom" section, before pricing.

const BASE = '/images/wishes/memorybloom/'

const desktop = [
  { src: 'memorybloom-gallery.webp', w: 1600, h: 1631, title: 'The live photo wall', text: 'Every photo your guests add shows up here, and the wall updates on its own.' },
  { src: 'memorybloom-admin.webp', w: 1600, h: 1337, title: 'You stay in charge', text: 'Photos wait for your approval before they appear. Switch it off any time.' },
  { src: 'memorybloom-upload.webp', w: 1600, h: 1371, title: 'Easy for every guest', text: 'Pick one photo or twenty, add a name if you like, and tap upload.' },
]
const phones = [
  { src: 'memorybloom-phone-upload.webp', w: 780, h: 1688, alt: 'MemoryBloom upload page on a phone' },
  { src: 'memorybloom-phone-gallery.webp', w: 780, h: 1688, alt: 'MemoryBloom live wall on a phone' },
]

export default function SeeItInAction() {
  return (
    <section id="see-it-in-action" style={{ background: '#FAF6F0' }} className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }} className="text-5xl sm:text-6xl">See it in action</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#8B7355' }} className="mx-auto mt-3 max-w-xl text-xl italic">
            These are real screens from the album, set up for a made-up couple.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {desktop.map((s, i) => (
            <figure key={s.src} className={i === 0 ? 'md:col-span-2' : ''}>
              <div style={{ border: '1px solid #E5DED2', background: '#fff' }} className="overflow-hidden rounded-2xl shadow-sm">
                <img src={BASE + s.src} width={s.w} height={s.h} alt={s.title} loading="lazy" className="block h-auto w-full" />
              </div>
              <figcaption className="mt-4 text-center">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#3A3A3A' }} className="text-2xl font-semibold">{s.title}</p>
                <p style={{ color: '#3A3A3A', opacity: 0.75 }} className="mx-auto mt-1 max-w-md text-sm">{s.text}</p>
              </figcaption>
            </figure>
          ))}
          <div className="flex items-start justify-center gap-6">
            {phones.map((p) => (
              <img key={p.src} src={BASE + p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy"
                style={{ border: '1px solid #E5DED2' }} className="h-auto w-[44%] max-w-[230px] rounded-2xl shadow-sm" />
            ))}
          </div>
        </div>

        <p style={{ color: '#8B7355' }} className="mt-10 text-center text-sm">Screens show sample data.</p>
      </div>
    </section>
  )
}
