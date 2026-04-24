import { FaHeart, FaLeaf, FaUsers } from 'react-icons/fa'

const team = [
  { name: 'Clara Whitfield', role: 'Founder & CEO', initials: 'CW', bio: 'Clara lost her grandfather\'s 8mm reels to deterioration and vowed to help others avoid the same loss. She founded Rewind & Restore in 2015 with a single capture deck and a passion for preservation.' },
  { name: 'Marcus Osei', role: 'Head of Digitization', initials: 'MO', bio: 'With 15 years of experience in broadcast engineering, Marcus oversees every digitization workflow and ensures our quality standards exceed industry benchmarks.' },
  { name: 'Priya Nair', role: 'Customer Experience Lead', initials: 'PN', bio: 'Priya brings warmth and clarity to every customer interaction, ensuring families feel informed and cared for from the moment they ship their media to the moment they download their files.' },
]

const values = [
  { icon: <FaHeart className="text-3xl text-amber-500" />, title: 'Care', desc: 'We treat every item as if it were our own irreplaceable family memory.' },
  { icon: <FaLeaf className="text-3xl text-amber-500" />, title: 'Longevity', desc: 'We use archival best practices to ensure your digital files last another 100 years.' },
  { icon: <FaUsers className="text-3xl text-amber-500" />, title: 'Accessibility', desc: 'We believe everyone deserves access to professional-grade memory preservation.' },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Rewind &amp; Restore</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            We&apos;re a small, passionate team dedicated to rescuing priceless memories from deteriorating analog media — one tape, disc, and film reel at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Rewind &amp; Restore was born from a personal loss. Our founder Clara Whitfield discovered too late that her grandfather&apos;s home movies — captured on Super 8 throughout the 1960s — had deteriorated beyond recovery due to improper storage. The footage of family holidays, first steps, and Sunday dinners was gone forever.
            </p>
            <p>
              Determined that other families wouldn&apos;t face the same heartbreak, Clara invested in professional capture equipment and began offering digitization services to friends and neighbors in 2015. Word spread quickly, and within two years Rewind &amp; Restore had grown into a full-service operation with a dedicated team and a waiting list.
            </p>
            <p>
              Today, we&apos;ve digitized over 150,000 media items for families across the country. From a single grainy VHS of a child&apos;s first birthday to entire basement archives of wedding films, we approach every item with the same respect and technical precision.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-amber-50 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            To make professional-quality memory preservation accessible to every family — ensuring that the stories, faces, and moments captured on aging analog media are never lost to time.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-50 rounded-2xl p-6 text-center flex flex-col items-center gap-3 border border-slate-100">
                {v.icon}
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-slate-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-extrabold text-xl">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="text-amber-600 text-sm font-medium">{member.role}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
