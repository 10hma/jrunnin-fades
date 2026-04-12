export default function JRunninFadesDemo() {
  const services = [
    { name: "Classic Haircut", price: "$35", time: "30 min" },
    { name: "Haircut + Beard", price: "$45", time: "45 min" },
    { name: "Kids Cut", price: "$25", time: "25 min" },
    { name: "Line Up", price: "$20", time: "15 min" },
  ];

  const gallery = [
    "Clean fades",
    "Sharp lineups",
    "Beard trims",
    "Modern styles",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">J Runnin Fades</h1>
        <p className="mt-4 text-gray-400">
          Clean cuts, sharp fades, and professional service in Fort Worth.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-red-600 px-5 py-3 rounded-xl">
            Book Appointment
          </button>
          <button className="border px-5 py-3 rounded-xl">
            View Services
          </button>
        </div>

        <div className="mt-8">
          <p>(817) 902-1767</p>
          <p>5800 E Berry St #110, Fort Worth, TX</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <div key={s.name} className="border p-5 rounded-2xl">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-red-400 text-2xl">{s.price}</p>
              <p className="text-gray-400">{s.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((g) => (
            <div key={g} className="bg-gray-800 p-10 rounded-xl">
              {g}
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Book Appointment</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Name"
            className="p-3 bg-black border rounded-xl"
          />
          <input
            placeholder="Phone"
            className="p-3 bg-black border rounded-xl"
          />
          <input type="date" className="p-3 bg-black border rounded-xl" />
          <input type="time" className="p-3 bg-black border rounded-xl" />

          <button className="bg-red-600 p-3 rounded-xl col-span-2">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}