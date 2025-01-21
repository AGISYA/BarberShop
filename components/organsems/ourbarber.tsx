"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function OurBarber() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const barbers = [
    {
      name: "Ahmad",
      image: "/images/download (1).jpg",
      description: "Ahli dalam potongan modern.",
    },
    {
      name: "Budi",
      image: "/images/Conteúdo para barbearia.jpg",
      description: "Spesialis potongan klasik.",
    },
    {
      name: "Charlie",
      image:
        "/images/RETRATOS _ RETRATO MASCULINO _ VISAGISTA _ ARQUÉTIPOS _ POSES.jpg",
      description: "Master gaya rambut unik.",
    },
  ];

  return (
    <section className="h-screen flex flex-col justify-between">
      <div
        ref={ref}
        className="relative flex-1 bg-fixed bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/images/barber.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex flex-col lg:flex-row justify-around items-center text-white container mx-auto py-12 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={2000} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Potongan Rambut Selesai</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={10} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Tahun Pengalaman</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={5} duration={2} />}
            </h2>
            <p className="text-lg mt-2">Layanan yang Tersedia</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {inView && <CountUp start={0} end={500} duration={2} />}+
            </h2>
            <p className="text-lg mt-2">Klien Puas</p>
          </div>
        </div>
      </div>

      <div className="min-h-80 bg-gray-900 text-white flex flex-col items-center py-8">
        <h1 className="text-4xl text-center font-bold text-yellow-500 mb-6">
          Tim Ahli Cukur Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {barbers.map((barber, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-yellow-500">
                {barber.name}
              </h2>
              <p className="text-white text-center">{barber.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
