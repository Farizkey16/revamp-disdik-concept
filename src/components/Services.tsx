import Link from "next/link";
import { Button } from "./ui/button";

const services = [
  {
    title: "Informasi Pendidikan",
    desc: "Akses data pendidikan terbaru di DKI Jakarta.",
    btn: "Lihat Detail",
    href: "/informasi-publik",
  },
  {
    title: "Layanan Publik",
    desc: "Pelayanan cepat dan transparan untuk masyarakat.",
    btn: "Gunakan Layanan",
    href: "/layanan-publik",
  },
  {
    title: "Publikasi Resmi",
    desc: "Dokumen dan laporan resmi terkait pendidikan.",
    btn: "Baca Publikasi",
    href: "/publikasi",
  },
];

export default function ServicesComponent() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-label="layanan">
            <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mb-8 text-center" id="layanan">Layanan</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map(({title, desc, btn, href}) => (
                    <div key={title} aria-label={title} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="mb-4 text-gray-700">{desc}</p>
                        <Button className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold cursor-pointer"><Link href={href}>{btn}</Link></Button>
                    </div>
                ))}
            </div>
        </section>
    )
}