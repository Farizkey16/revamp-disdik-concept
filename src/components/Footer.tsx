import Link from 'next/link';
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Dinas Pendidikan DKI Jakarta</h2>
          <p className="text-sm leading-relaxed">
            Dinas Pendidikan Provinsi DKI Jakarta adalah lembaga pemerintah daerah yang bertanggung jawab atas pengelolaan dan pengembangan sistem pendidikan di wilayah DKI Jakarta.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Peta Situs</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:underline">Tentang Kami</Link></li>
            <li><Link href="/services" className="hover:underline">Layanan</Link></li>
            <li><Link href="/teams" className="hover:underline">Tim</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/disdikdki/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@dinaspendidikanprovinsidki6085"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <AiOutlineYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Disdik DKI Jakarta. All rights reserved.
      </div>
    </footer>
  );
}