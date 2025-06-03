
interface TestiType{
    name: string,
    role: string,
    quote: string
}

const testimonials: TestiType[] = [
  { name: "Sari Dewi", role: "Guru SD", quote: "Layanan Disdik sangat membantu saya dalam mengakses materi pembelajaran terbaru." },
  { name: "Budi Santoso", role: "Orang Tua Murid", quote: "Informasi yang diberikan selalu jelas dan terpercaya, membuat saya tenang." },
  { name: "Rina Wahyuni", role: "Staf Sekolah", quote: "Publikasi resmi mereka sangat lengkap dan mudah dipahami." },
];

export default function TestiUser() {
    return (
        <section>
            <h2>Testimoni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((value, index) => (
                <div key={index} className="flex flex-col items-start text-left p-6 border rounded-2xl shadow-md hover:shadow-xl transition">
                    <blockquote >
                    <p>"{value.quote}"</p>
                    </blockquote>
                    <div className="flex flex-grow flex-col items-start mt-4">
                        <footer className="font-bold">{value.name},</footer>
                        <span>{value.role}</span>
                    </div>
                    
                </div>
))}
            </div>
        </section>
    )
}