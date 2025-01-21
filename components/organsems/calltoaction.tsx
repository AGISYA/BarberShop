import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
          Mau rambut kamu keren? Pilih yang kamu suka!
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Kami menyediakan berbagai layanan potong rambut dan cukur dengan
          kualitas terbaik. Apakah kamu ingin tampil lebih keren dengan potongan
          klasik, atau relaksasi dengan shave tradisional?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Option 1: Haircut */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/Los 12 mejores cortes taper fade.jpg" // Ganti dengan gambar potong rambut Anda
                alt="Potong Rambut"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Potong Rambut
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Potongan rambut klasik yang rapi dan stylish.
            </p>
          </div>

          {/* Option 2: Shave */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/TRADITIONAL SHAVE.jpg" // Ganti dengan gambar shave Anda
                alt="Shave"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Shave Tradisional
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Nikmati pengalaman shave dengan handuk panas.
            </p>
          </div>

          {/* Option 3: Haircut & Shave Combo */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/download 3.jpg" // Ganti dengan gambar kombinasi potong & shave Anda
                alt="Potong & Cukur"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Potong & Cukur
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Paduan potongan rambut dan shave untuk tampilan maksimal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
