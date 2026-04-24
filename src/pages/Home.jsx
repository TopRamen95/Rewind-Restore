import { Link } from 'react-router-dom'
import { FaFilm, FaCompactDisc, FaVideo, FaMicrophone } from 'react-icons/fa'
import { MdOutlineCloudDownload, MdOutlineHighQuality, MdOutlineLocalShipping } from 'react-icons/md'
import { BsStarFill } from 'react-icons/bs'
import { GiFilmSpool } from 'react-icons/gi'

const services = [
  { icon: <FaCompactDisc className="text-4xl text-amber-500" />, title: 'DVD & Blu-ray', desc: 'Convert your disc collection to MP4 or MKV digital files.' },
  { icon: <FaVideo className="text-4xl text-amber-500" />, title: 'MiniDV Tapes', desc: 'Capture frame-perfect digital copies from MiniDV cassettes.' },
  { icon: <FaVideo className="text-4xl text-amber-500" />, title: 'VHS Tapes', desc: 'Revive classic home videos from VHS into crystal-clear digital.' },
  { icon: <GiFilmSpool className="text-4xl text-amber-500" />, title: '8mm Film', desc: 'Scan vintage 8mm film reels with high-resolution frame capture.' },
  { icon: <FaMicrophone className="text-4xl text-amber-500" />, title: 'Audio Cassettes', desc: 'Convert cassette recordings to high-quality MP3 or FLAC audio.' },
]

const steps = [
  { icon: <MdOutlineLocalShipping className="text-3xl text-amber-500" />, step: '01', title: 'Ship Your Media', desc: 'Pack and send your tapes, discs, or reels to our facility using our prepaid label.' },
  { icon: <FaFilm className="text-3xl text-amber-500" />, step: '02', title: 'We Digitize', desc: 'Our technicians carefully digitize every item using professional-grade equipment.' },
  { icon: <MdOutlineHighQuality className="text-3xl text-amber-500" />, step: '03', title: 'Quality Check', desc: 'Every file is reviewed for completeness and clarity before delivery.' },
  { icon: <MdOutlineCloudDownload className="text-3xl text-amber-500" />, step: '04', title: 'Download & Enjoy', desc: 'Receive your digital files via cloud download, USB drive, or both.' },
]

const testimonials = [
  { name: 'Margaret T.', location: 'Portland, OR', rating: 5, text: 'Rewind & Restore brought my grandmother\'s old 8mm wedding footage back to life. I cried happy tears watching it for the first time in HD. Absolutely incredible service!' },
  { name: 'David K.', location: 'Austin, TX', rating: 5, text: 'Fast turnaround and the quality exceeded my expectations. I had 30 VHS tapes digitized in under two weeks. The online download was seamless. Highly recommend!' },
  { name: 'Sandra L.', location: 'Chicago, IL', rating: 5, text: 'I was so nervous about mailing my irreplaceable MiniDV tapes. The team was communicative every step of the way. My memories are now safe forever. Thank you!' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
            Memories Preserved Forever
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Preserve Your <span className="text-amber-400">Memories</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We digitize your VHS tapes, DVDs, MiniDV, 8mm film, audio cassettes, and more — transforming fragile analog memories into lasting digital files you can share and enjoy forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              className="border border-slate-500 hover:border-amber-400 hover:text-amber-400 text-slate-300 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Digitize</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From VHS to vinyl, we handle virtually every analog format with expert care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center gap-3">
                {s.icon}
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex flex-col items-center text-center gap-3 justify-center">
              <p className="text-slate-600 text-sm font-medium">And many more formats!</p>
              <Link to="/services" className="text-amber-600 font-bold text-sm hover:underline">View all services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our simple 4-step process makes getting your memories digitized easy and stress-free.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-3">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md border border-slate-100">
                  {s.icon}
                </div>
                <span className="text-amber-500 font-black text-sm tracking-widest">{s.step}</span>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Thousands of families have trusted us with their most precious memories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <BsStarFill key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-auto">
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Ready to Preserve Your Memories?
          </h2>
          <p className="text-slate-800 mb-8 text-lg">
            Don&apos;t let time degrade your irreplaceable moments. Send us your media today.
          </p>
          <Link
            to="/order"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg inline-block"
          >
            Start Your Order
          </Link>
        </div>
      </section>
    </div>
  )
}
