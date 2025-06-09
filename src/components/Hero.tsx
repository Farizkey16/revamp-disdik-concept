import Image from "next/image";
import Navbar from "./Header";

export default function Hero() {
    return (
        <div>
            
                <section className="relative w-full h-[80vh]">
                {/* Image Div */}
                <div className="absolute inset-0">
                    <Image
                    src={"/assets/kelas-pembelajaran.webp"}
                    alt="suasana ruang kelas"
                    fill
                    priority
                    quality={80}
                    className="object-cover"/>
                    <div className="absolute inset-0 bg-black/50"/>
                </div>

                {/* Text Div */}
                <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Selamat Datang di Dinas Pendidikan DKI Jakarta
                    </h1>
                    <h3 className="mb-6 text-base md:text-lg text-white">
                        Membuka Akses, Menanam Sukses
                    </h3>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition cursor-pointer">
                        <a href="/about-us">Pelajari Lebih Lanjut</a>  
                    </button>
                </div>

                
            {/* </div> */}
        </section>
        </div>
    )
}