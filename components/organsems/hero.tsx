export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("/images/HOME _ Fitzrovia Barbers Warren Street.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">FORR MEN</h1>
        <p className="text-base md:text-lg mb-6">BARBERSHOP</p>
        <a
          href="#pricing"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-400 transition"
        >
          Cek Layanan Kami
        </a>
      </div>
    </section>
  );
}
