import { Link } from 'react-router-dom'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg mb-3">
              <MdOutlinePhotoCamera className="text-xl" />
              <span>Rewind &amp; Restore</span>
            </div>
            <p className="text-sm leading-relaxed">
              Preserving your precious memories by digitizing analog media with care and precision.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/services', 'Services'],
                ['/pricing', 'Pricing'],
                ['/about', 'About'],
                ['/order', 'Get a Quote'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-amber-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm">hello@rewindrestore.com</p>
            <p className="text-sm mt-1">(800) 555-0199</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook"><FaFacebook className="text-xl" /></a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Instagram"><FaInstagram className="text-xl" /></a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter"><FaTwitter className="text-xl" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Rewind &amp; Restore. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
