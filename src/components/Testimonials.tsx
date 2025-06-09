
interface TestiType{
    name: string,
    role: string,
    quote: string
    img: string
}

const testimonials: TestiType[] = [
  { name: "Sari Dewi", role: "Guru SD", quote: "Layanan Disdik sangat membantu saya dalam mengakses materi pembelajaran terbaru.", img: "/assets/saridewi.webp"  },
  { name: "Budi Santoso", role: "Orang Tua Murid", quote: "Informasi yang diberikan selalu jelas dan terpercaya, membuat saya tenang.", img: "/assets/budisantoso.webp" },
  { name: "Rina Wahyuni", role: "Staf Sekolah", quote: "Publikasi resmi mereka sangat lengkap dan mudah dipahami.", img:"/assets/rini.webp" },
];

export default function TestiUser() {
    return (
        <section className="">
            <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mb-8 py-4 text-center">Testimoni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((value, index) => (
                <div key={index} className="flex flex-col text-left p-5 border rounded-2xl shadow-md hover:shadow-xl transition">
                    <blockquote className="text-sm">
                    <p>"{value.quote}"</p>
                    </blockquote>
                    <div className="flex items-center">

                    <div className="flex flex-row-reverse items-center gap-3">
                    <div className="flex flex-grow flex-col justify-between mt-4">
                        <footer className="font-bold">{value.name},</footer>
                        <span>{value.role}</span>
                    </div>
                    
                    <img src={value.img} className="w-9 h-9 rounded-full object-cover" alt="testimonial photo" />
                    </div>

                    

                    </div>
                    
                </div>
))}
            </div>
        </section>
    )
}