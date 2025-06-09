import Navbar from "@/components/Header";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Globe, Briefcase, Sparkles, Users } from "lucide-react"



const teamMembersR1: any[] = [
    { name: "Nahdiana", role: "Kepala Dinas", imgsrc: "/assets/kadin-disdik.webp", altxt: "kepala dinas disdik Jakarta"},
    { name: "Sarjoko", role: "Wakil Kepala Dinas", imgsrc: "/assets/sarjoko2.webp", altxt: "wakil kepala dinas disdik Jakarta"},
]

const teamMembersR2: any[] = [
    { name: "Taga", role: "Kepala Sekretariat Dinas & Plt. Bidang SMK, Kursus dan Pelatihan", imgsrc: "/assets/taga2.2.webp", altxt: "kepala dinas sekretariat dan Plt Bidang SMK"},
    { name: "Wawan Sofwanudin", role: "Kepala Bidang PAUD, Pendidikan Masyarakat, dan Pendidikan Khusus", imgsrc: "/assets/wawan1.webp", altxt: "kepala bidang PAUD, pendidikan masyarakat, dan pendidikan khusus"},
    { name: "Salikun", role: "Kepala Bidang SD & Plt. Bidang SMP", imgsrc: "/assets/salikun1.webp", altxt: "kepala bidang SD & Plt. Bidang SMP"},
    { name: "Ali Mukodas", role: "Kepala Bidang SMA", imgsrc: "/assets/ali1.webp", altxt: "kepala bidang SMA"},
    { name: "Asep Erwin Djuanda", role: "Kepala Bidang Program dan Anggaran", imgsrc: "/assets/asep1.webp", altxt: "kepala bidang program dan anggaran"},
]

const cultureBox: any[] = [
{
    title: "Transparansi",
    description: "Mengutamakan kejujuran dan keterbukaan dalam pengelolaan pendidikan.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Aksesibilitas",
    description: "Menjamin pendidikan inklusif dan merata untuk semua lapisan masyarakat.",
    icon: <Globe className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Profesionalisme",
    description: "Menjaga mutu layanan pendidikan dengan etika dan kompetensi tinggi.",
    icon: <Briefcase className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Inovasi",
    description: "Mendorong penggunaan teknologi dan ide kreatif dalam pembelajaran.",
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Kolaborasi",
    description: "Bekerja sama dengan berbagai pihak untuk menciptakan solusi pendidikan.",
    icon: <Users className="w-8 h-8 text-orange-500" />,
  },
]


export default function AboutPage() {

    return (
        <div>
        <Navbar/>
        <AboutSection/>
        </div>
    )}


function AboutSection() {

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh]">  
        
            {/* About Us Hero */}
            <div className="absolute inset-0 z-0">
            <Image
            src="/assets/about-us.webp"
            alt="anak laki-laki berbaju pramuka"
            quality={80}
            fill
            priority
            className="object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* About Us Hero Text */}
            <div className="relative flex flex-col justify-center items-center text-left z-10 mx-auto h-full text-white px-2 md:px-0">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4">About Us</h1>
                <p className="px-2 sm:px-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-center"> Dibentuk sebagai bagian dari struktur pemerintah daerah yang mengelola urusan pendidikan. Sejak berdirinya, Disdik Jakarta berfokus pada pemerataan akses pendidikan, peningkatan mutu sekolah, serta penyelarasan sistem pendidikan dengan tantangan zaman. Seiring waktu, mereka meluncurkan berbagai inisiatif seperti digitalisasi sekolah, pendidikan inklusif, dan revitalisasi SMK untuk menjawab kebutuhan dunia kerja.</p>
            </div>

            {/* Team Member */}
            <div className="relative z-10 mt-8">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center bg-white/80 py-2 rounded">Struktur Organisasi</h2>
                    {/* Kepala dan Wakil */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                    {teamMembersR1.map(({name, role, imgsrc, altxt}, index: number) => (
                        <Card key={index} className="w-60 sm:w-70 shadow-md hover:shadow-xl transition">
                        <div className="flex flex-col justify-center items-center ">
                            <Image
                            src={imgsrc}
                            alt={altxt}
                            width={200}
                            height={200}
                            className="object-cover rounded"/>
                            <div className="flex flex-col mx-auto text-center mt-2">
                                <h3 className="font-semibold text-base sm:text-lg">{name}</h3>
                                <h6 className="text-xs sm:text-sm text-gray-600">{role}</h6>
                            </div>
                        </div>
                    </Card>
                    ))}
                </div>
            
                {/* Kepala Bidang */}
             <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:mt-5 md:px-5 sm:gap-8">
                {teamMembersR2.map(({name, role, imgsrc, altxt}, index: number) => (
                    <Card key={index} className="w-60 sm:w-70 shadow-md hover:shadow-xl transition">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                        src={imgsrc}
                        alt={altxt}
                        width={200}
                        height={200}
                        className="object-cover rounded"/>
                        <div className="flex flex-col mx-auto text-center mt-2">
                            <h3 className="font-semibold text-base sm:text-lg">{name}</h3>
                            <h6 className="text-xs sm:text-sm text-gray-600 ">{role}</h6>
                        </div>
                    </div>
                </Card>
                ))}
             </div>
            </div>
                {/* Culture */}
            <div className="bg-white py-16 px-6">
                <h2 className="text-2xl font-bold text-center mb-8">Budaya Kerja</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cultureBox.map(({title, description, icon}, index: number) => (
                        <div key={index}
                        className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-md hover:shadow-xl transition">
                            <div className="mb-4">{icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{title}</h3>
                            <p className="text-sm text-gray-600">{description}</p>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )

}