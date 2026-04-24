import { Link } from 'react-router-dom'
import { FaFilm, FaCompactDisc, FaVideo, FaMicrophone, FaVolumeUp } from 'react-icons/fa'
import { GiFilmSpool } from 'react-icons/gi'
import { MdOutlineVideoLibrary } from 'react-icons/md'

const services = [
  {
    icon: <FaCompactDisc className="text-5xl text-amber-500" />,
    title: 'DVD & Blu-ray',
    description: 'We rip your DVD and Blu-ray discs to high-quality MP4 or MKV files, preserving all audio tracks and subtitles. Perfect for home movies, family archives, or personal collections.',
    turnaround: '3–5 business days',
    outputFormats: 'MP4, MKV',
    includes: ['Menu navigation preserved', 'All audio tracks', 'Subtitle extraction', 'Chapter markers'],
  },
  {
    icon: <FaVideo className="text-5xl text-amber-500" />,
    title: 'MiniDV Tapes',
    description: 'MiniDV tapes are highly susceptible to mold and deterioration. We capture your footage in full native DV quality via FireWire for the highest-fidelity digital transfer available.',
    turnaround: '5–7 business days',
    outputFormats: 'AVI (DV), MP4',
    includes: ['Native DV quality capture', 'Timecode preservation', 'Scene detection', 'Color correction available'],
  },
  {
    icon: <MdOutlineVideoLibrary className="text-5xl text-amber-500" />,
    title: 'VHS Tapes',
    description: 'VHS tapes degrade at roughly 10–20% quality loss per decade. Our professional capture equipment stabilizes the signal and produces clean, watchable digital files from even older, worn tapes.',
    turnaround: '5–7 business days',
    outputFormats: 'MP4, AVI',
    includes: ['TBC (Time Base Correction)', 'Noise reduction', 'Sharpening enhancement', 'VHS-C adapter included'],
  },
  {
    icon: <FaFilm className="text-5xl text-amber-500" />,
    title: '8mm Film',
    description: 'Standard 8mm film from the 1930s–1960s captures some of the most irreplaceable family history. We use a frame-by-frame scanner to produce crisp 1080p digital files from your precious reels.',
    turnaround: '10–14 business days',
    outputFormats: 'MP4 (1080p)',
    includes: ['Frame-by-frame scanning', '1080p HD output', 'Dust & scratch removal', 'Custom soundtrack option'],
  },
  {
    icon: <GiFilmSpool className="text-5xl text-amber-500" />,
    title: 'Super 8 Film',
    description: 'Super 8 was the go-to home movie format of the 1960s–80s. Our precision scanners capture every frame in stunning 2K resolution, breathing new life into your vintage footage.',
    turnaround: '10–14 business days',
    outputFormats: 'MP4 (1080p / 2K)',
    includes: ['2K high-resolution scan', 'Color grading available', 'Stabilization', 'Speed correction'],
  },
  {
    icon: <FaMicrophone className="text-5xl text-amber-500" />,
    title: 'Audio Cassettes',
    description: 'Whether it&apos;s a mixtape from the 80s, a recorded family conversation, or a band demo, we transfer your cassettes with audiophile-grade decks and deliver clean digital audio files.',
    turnaround: '3–5 business days',
    outputFormats: 'MP3, FLAC, WAV',
    includes: ['Audiophile-grade decks', 'Noise reduction', 'Track splitting', 'Lossless FLAC option'],
  },
  {
    icon: <FaVolumeUp className="text-5xl text-amber-500" />,
    title: 'Vinyl Records',
    description: 'Your vinyl collection deserves a digital archive. We use a high-quality turntable with a precision stylus to produce warm, detailed 24-bit digital recordings of your favourite albums.',
    turnaround: '5–7 business days',
    outputFormats: 'MP3, FLAC, WAV',
    includes: ['24-bit/96kHz recording', 'Click & pop removal', 'Per-track splitting', 'Artwork scanning'],
  },
]

export default function Services() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Professional digitization for every analog format. Each service is handled by trained technicians using broadcast-quality equipment.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:shadow-md transition-shadow flex flex-col gap-4">
              <div className="flex items-start gap-4">
                {s.icon}
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                  <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full mt-1">
                    Turnaround: {s.turnaround}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Output Formats: <span className="text-slate-800">{s.outputFormats}</span></p>
                <ul className="grid grid-cols-2 gap-1">
                  {s.includes.map((item) => (
                    <li key={item} className="text-xs text-slate-600 flex items-center gap-1">
                      <span className="text-amber-500 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-slate-900 rounded-2xl py-12 px-6">
          <h2 className="text-2xl font-bold text-white mb-3">Have a format not listed here?</h2>
          <p className="text-slate-400 mb-6">We handle many other formats. Contact us and we&apos;ll let you know what&apos;s possible.</p>
          <Link
            to="/order"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
