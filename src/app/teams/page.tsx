import Navbar from "@/components/Header";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const teamMembersR1: any[] = [
  {
    name: "Nahdiana",
    role: "Kepala Dinas",
    imgsrc: "/assets/kadin-disdik.webp",
    altxt: "kepala dinas disdik Jakarta",
    jobdesc: "Memimpin dan mengarahkan seluruh kebijakan pendidikan di DKI Jakarta serta memastikan implementasi program berjalan sesuai visi misi pemerintah daerah."
  },
  {
    name: "Sarjoko",
    role: "Wakil Kepala Dinas",
    imgsrc: "/assets/sarjoko2.webp",
    altxt: "wakil kepala dinas disdik Jakarta",
    jobdesc: "Mendampingi Kepala Dinas dalam pelaksanaan kebijakan pendidikan serta mengkoordinasi lintas bidang untuk efektivitas program dan layanan pendidikan."
  },
]

const teamMembersR2: any[] = [
  {
    name: "Taga",
    role: "Kepala Sekretariat Dinas & Plt. Bidang SMK, Kursus dan Pelatihan",
    imgsrc: "/assets/taga2.2.webp",
    altxt: "kepala dinas sekretariat dan Plt Bidang SMK",
    jobdesc: "Mengelola administrasi dinas serta merumuskan kebijakan dan program pengembangan pendidikan vokasi, kursus, dan pelatihan keterampilan kerja."
  },
  {
    name: "Wawan Sofwanudin",
    role: "Kepala Bidang PAUD, Pendidikan Masyarakat, dan Pendidikan Khusus",
    imgsrc: "/assets/wawan1.webp",
    altxt: "kepala bidang PAUD, pendidikan masyarakat, dan pendidikan khusus",
    jobdesc: "Merancang dan mengawasi program pendidikan anak usia dini, pendidikan luar sekolah, dan pendidikan inklusi bagi peserta didik berkebutuhan khusus."
  },
  {
    name: "Salikun",
    role: "Kepala Bidang SD & Plt. Bidang SMP",
    imgsrc: "/assets/salikun1.webp",
    altxt: "kepala bidang SD & Plt. Bidang SMP",
    jobdesc: "Bertanggung jawab atas pengembangan kurikulum, sarana, dan mutu pendidikan tingkat SD dan SMP di wilayah DKI Jakarta."
  },
  {
    name: "Ali Mukodas",
    role: "Kepala Bidang SMA",
    imgsrc: "/assets/ali1.webp",
    altxt: "kepala bidang SMA",
    jobdesc: "Mengembangkan dan mengawasi kebijakan serta pelaksanaan pendidikan tingkat SMA untuk meningkatkan kualitas lulusan dan kesiapan ke jenjang selanjutnya."
  },
  {
    name: "Asep Erwin Djuanda",
    role: "Kepala Bidang Program dan Anggaran",
    imgsrc: "/assets/asep1.webp",
    altxt: "kepala bidang program dan anggaran",
    jobdesc: "Merancang, mengelola, dan mengevaluasi anggaran pendidikan serta memastikan program strategis berjalan efisien dan tepat sasaran."
  },
]


export default function TeamsPage() {

    return (
        <div>
        <Navbar/>

        <section className="relative w-full h-[60vh] md:h-[80vh] pt-20">


            {/* Teams Hero */}
            <div className="absolute inset-0 z-0">
                <Image
                src="/assets/foto6.webp"
                alt="murid di sekolah"
                quality={80}
                fill
                priority
                className="object-cover"/>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Teams Hero Text */}
            <div className="relative flex flex-col justify-center items-center text-left z-10 mx-auto h-full text-white px-2 md:px-0">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4">Teams</h1>
                <p className="px-2 sm:px-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-center">Para personil di Dinas Pendidikan DKI Jakarta</p>
            </div>

            {/* Team Member */}
            <div className="relative mt-8">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center bg-white/80 py-2 rounded">Struktur Organisasi</h2>
                    {/* Kepala dan Wakil */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                    {teamMembersR1.map(({name, role, imgsrc, altxt, jobdesc}, index: number) => (
                        <Card key={index} className="w-56 sm:w-64 h-[500px] flex flex-col justify-between items-center">
                        <div className="flex flex-col justify-center items-center">
                            <div className="">
                            <Image
                            src={imgsrc}
                            alt={altxt}
                            width={200}
                            height={200}
                            className="object-cover rounded"/>
                            </div>
                            <div className="flex flex-col mx-auto text-center mt-2">
                                <h3 className="font-semibold text-base sm:text-lg">{name}</h3>
                                <h6 className="text-xs italic sm:text-sm text-gray-600">{role}</h6>        
                                <p className="text-xs  mt-3 sm:text-sm px-5">{jobdesc}</p>                        
                            </div>
                        </div>
                    </Card>
                    ))}
                </div>
            
                {/* Kepala Bidang */}
             <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:mt-5 md:px-5 sm:gap-8">
                {teamMembersR2.map(({name, role, imgsrc, altxt, jobdesc}, index: number) => (
                    <Card key={index} className="w-56 sm:w-64 h-[470px] flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="">
                            <Image
                            src={imgsrc}
                            alt={altxt}
                            width={200}
                            height={200}
                            className="object-cover rounded"/>
                        </div>
                        <div className="flex flex-col mx-auto text-center mt-2">
                            <h3 className="font-semibold text-base sm:text-lg">{name}</h3>
                            <h6 className="text-xs italic sm:text-sm text-gray-600">{role}</h6>
                            <p className="text-xs text-ellipsis mt-3 sm:text-sm px-3">{jobdesc}</p>
                        </div>
                    </div>
                </Card>
                ))}
             </div>
            </div>
                




        </section>






        </div>





        
    )}