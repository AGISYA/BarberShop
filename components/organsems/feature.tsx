export default function Features() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-12">Layanan Unggulan Kami</h2>
      <div className="flex justify-center gap-16">
        <div className="w-64 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Potongan Rambut Klasik
          </h3>
          <p>Potongan rambut terbaik dengan gaya klasik yang timeless.</p>
        </div>
        <div className="w-64 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Cukur Jenggot</h3>
          <p>Cukur jenggot yang rapi dan sesuai dengan bentuk wajah Anda.</p>
        </div>
        <div className="w-64 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Facial & Pijat Kepala</h3>
          <p>
            Pijat relaksasi dan facial untuk membuat Anda merasa lebih segar.
          </p>
        </div>
      </div>
    </section>
  );
}
