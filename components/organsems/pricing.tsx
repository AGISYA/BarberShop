import Image from "next/image";

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Gambar Kiri */}
          <div className="flex-shrink-0 w-full md:w-1/3 p-4 mb-6 md:mb-0">
            <div className="relative w-full h-64">
              <Image
                src="/images/alat.jpg" // Replace with the correct image path
                alt="Barber Shop"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Tabel Harga di Kanan */}
          <div className="w-full text-white md:w-2/3 p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-6">
              Daftar Harga Barber Shop
            </h1>
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left bg-gray-800 text-yellow-500">
                    Jenis Layanan
                  </th>
                  <th className="px-4 py-2 text-left bg-gray-800 text-yellow-500">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Potongan Rambut Pria</td>
                  <td className="px-4 py-2">Rp 50.000</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Potongan Rambut Anak-anak</td>
                  <td className="px-4 py-2">Rp 40.000</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Pemangkasan Jenggot</td>
                  <td className="px-4 py-2">Rp 20.000</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Potong Rambut dengan Gunting</td>
                  <td className="px-4 py-2">Rp 60.000</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Tutup Pencukuran</td>
                  <td className="px-4 py-2">Rp 15.000</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Penataan Rambut</td>
                  <td className="px-4 py-2">Rp 25.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
