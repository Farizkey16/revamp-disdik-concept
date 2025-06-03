import Image from "next/image"
import {Baby, BookOpenCheck, School, Briefcase, Users, ClipboardList, Wrench, Globe, Megaphone, PlayCircle} from "lucide-react"
import type { LucideIcon } from 'lucide-react'
import Navbar from "@/components/Header";
import TestiUser from "@/components/Testimonials";



const servicesBox = [
  {
    title: "Pendidikan Anak Usia Dini (PAUD) dan Pendidikan Masyarakat",
    desc: "Menyediakan layanan pendidikan untuk anak usia dini serta program pendidikan non-formal bagi masyarakat, termasuk kursus dan pelatihan keterampilan.",
    icon: Baby
  },
  {
    title: "Pendidikan Dasar dan Pendidikan Khusus",
    desc: "Mengelola pendidikan tingkat Sekolah Dasar (SD) serta menyediakan layanan untuk siswa dengan kebutuhan khusus melalui pendidikan inklusif.",
    icon: BookOpenCheck
  },
  {
    title: "Pendidikan Menengah Pertama dan Atas",
    desc: "Bertanggung jawab atas penyelenggaraan pendidikan tingkat SMP dan SMA, termasuk pengembangan kurikulum dan peningkatan mutu pendidikan.",
    icon: School
  },
  {
    title: "Pendidikan Menengah Kejuruan (SMK)",
    desc: "Menyediakan pendidikan kejuruan yang mempersiapkan siswa untuk memasuki dunia kerja dengan keterampilan spesifik sesuai kebutuhan industri.",
    icon: Briefcase
  },
  {
    title: "Pengembangan Guru dan Tenaga Kependidikan",
    desc: "Menyelenggarakan pelatihan dan workshop untuk meningkatkan kompetensi guru dan tenaga kependidikan.",
    icon: Users
  },
  {
    title: "Manajemen Kepegawaian",
    desc: "Mengelola administrasi kepegawaian, termasuk rekrutmen, penempatan, dan pengembangan karier guru serta staf pendidikan.",
    icon: ClipboardList
  },
  {
    title: "Sarana dan Prasarana Pendidikan",
    desc: "Mengelola pembangunan, renovasi, dan pemeliharaan fasilitas pendidikan serta distribusi peralatan pendidikan.",
    icon: Wrench
  },
  {
    title: "Sistem Informasi dan Portal Digital",
    desc: "Mengembangkan sistem informasi dan portal layanan daring untuk mendukung administrasi dan akses publik.",
    icon: Globe
  },
  {
    title: "Layanan Informasi Publik dan Pengaduan",
    desc: "Menyediakan akses informasi publik melalui PPID serta layanan pengaduan pendidikan dari masyarakat.",
    icon: Megaphone
  },
  {
    title: "Media Edukasi: Jakdisdik TV",
    desc: "Kanal YouTube resmi Disdik Jakarta yang menyajikan konten edukatif seperti podcast dan pembelajaran visual.",
    icon: PlayCircle
  }
];

export default function ServicesPage() {
    
    return (
        <div>
        <Navbar/>

        <section className="relative w-full h-[60vh] md:h-[80vh] pt-20">

            {/* Services Hero */}
            <div className="absolute inset-0 z-0">
            <Image
            src="/assets/foto3.webp"
            alt="suasana di ruang kelas"
            quality={80}
            fill
            priority
            className="object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Services Hero Text */}
            <div className="relative flex flex-col justify-center items-center text-left z-10 mx-auto h-full text-white px-2 md:px-0">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4">Services</h1>
                <p className="px-2 sm:px-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-center">Layanan yang tersedia secara publik di Dinas Pendidikan DKI Jakarta</p>
            </div>

            {/* Layanan */}
            <div className="bg-white py-16 px-6">
                <h2 className="text-2xl font-bold text-center mb-8">Layanan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {servicesBox.map((value, index: number) => {
                        const IconComponent = value.icon
                        return (
                        <div key={index}
                        className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-md hover:shadow-xl transition">
                            <div className="w-6 h-6 text-blue-600 mb-4"><IconComponent/></div>
                            <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                            <p className="text-sm text-gray-600">{value.desc}</p>
                        </div>
                        );
})}

                </div>
            </div>

            {/* Testimoni */}
            <div>
                <TestiUser/>
            </div>


        </section>
        </div>    
)}