import Reveal from './Reveal'

const BASE = '/images/wishes/memorybloom/'

const desktop = [
  { src: 'memorybloom-gallery.webp', w: 1600, h: 1631, title: 'The live photo wall', text: 'Every photo your guests add shows up here, and the wall updates on its own.' },
  { src: 'memorybloom-admin.webp', w: 1600, h: 1337, title: 'You stay in charge', text: 'Photos wait for your approval before they appear. Switch it off any time.' },
  { src: 'memorybloom-upload.webp', w: 1600, h: 1371, title: 'Easy for every guest', text: 'Pick one photo or twenty, add a name if you like, and tap upload.' },
]
const phones = [
  { src: 'memorybloom-phone-upload.webp', alt: 'MemoryBloom upload page on a phone' },
  { src: 'memorybloom-phone-gallery.webp', alt: 'MemoryBloom live wall on a phone' },
]

export default function SeeItInAction() {
  return (
    <section id="see-it-in-action" className="py-20 px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl text-[#8B7355]" style={{ fontFamily: "'Alex Brush', cursive" }}>See it in action</h2>
          <p className="text-xl italic text-[#8B7355] mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Real screens from the album, set up for a made-up couple.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {desktop.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className={i === 0 ? 'md:col-span-2' : ''}>
              <figure>
                <div className="overflow-hidden rounded-2xl border border-[#E5DED2] bg-white shadow-sm">
                  <img src={BASE + s.src} width={s.w} height={s.h} alt={s.title} loading="lazy" className="block w-full h-auto" />
                </div>
                <figcaption className="mt-4 text-center">
                  <p className="text-2xl font-semibold text-[#3A3A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</p>
                  <p className="text-sm text-[#3A3A3A]/75 mt-1 max-w-md mx-auto">{s.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={0.18} className="flex items-start justify-center gap-5">
            {phones.map((p) => (
              <img key={p.src} src={BASE + p.src} width={780} height={1688} alt={p.alt} loading="lazy"
                className="w-[44%] max-w-[230px] h-auto rounded-2xl border border-[#E5DED2] shadow-sm" />
            ))}
          </Reveal>
        </div>

        <p className="text-center text-sm text-[#8B7355] mt-10">Screens show sample data.</p>
      </div>
    </section>
  )
}
