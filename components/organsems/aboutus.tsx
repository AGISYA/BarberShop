// pages/about.js
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen md:mt-0 mt-[430px] bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-500 text-center">
        Tentang Kami
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 max-w-5xl">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2 md:mt-10 flex justify-center mb-6 md:mb-0">
          <div className="w-full h-40 relative md:h-64">
            <Image
              src="/images/barber.jpg" // Ganti dengan path gambar
              alt="Barbershop"
              layout="fill"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Bagian Deskripsi */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-4"></h2>
          <p className="text-slate-100 leading-relaxed mb-4">
            Kami adalah tim barber profesional yang berdedikasi untuk memberikan
            pengalaman terbaik dalam merawat penampilan Anda. Dengan suasana
            yang nyaman dan gaya potongan terkini, kami siap membantu Anda
            tampil lebih percaya diri.
          </p>
          <p className="text-slate-100 leading-relaxed mb-4">
            Barbershop telah melayani pelanggan sejak tahun [tahun berdiri], dan
            menjadi pilihan utama untuk berbagai kebutuhan potongan rambut,
            cukur jenggot, serta perawatan gaya modern maupun klasik.
          </p>
          <p className="text-slate-100 leading-relaxed">
            Kami percaya bahwa setiap potongan rambut adalah karya seni, dan
            kami berkomitmen untuk memberikan hasil terbaik untuk Anda. Kunjungi
            kami dan rasakan pengalaman perawatan yang berbeda!
          </p>
        </div>
      </div>
    </div>
  );
}
