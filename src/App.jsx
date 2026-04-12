export default function App() {
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
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-bold">J Runnin Fades</h1>
        <p className="mt-4 text-gray-400">
          Clean cuts, sharp fades, and professional service in Fort Worth.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="rounded-xl bg-red-600 px-5 py-3">
            Book Appointment
          </button>
          <button className="rounded-xl border px-5 py-3">
            View Services
          </button>
        </div>

        <div className="mt-8">
          <p>(817) 902-1767</p>
          <p>5800 E Berry St #110, Fort Worth, TX</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">Services</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="rounded-2xl border p-5">
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-2xl text-red-400">{service.price}</p>
              <p className="text-gray-400">{service.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">Gallery</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((item) => (
            <div key={item} className="rounded-xl bg-gray-800 p-10">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">Book Appointment</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Name"
            className="rounded-xl border bg-black p-3"
          />
          <input
            placeholder="Phone"
            className="rounded-xl border bg-black p-3"
          />
          <input type="date" className="rounded-xl border bg-black p-3" />
          <input type="time" className="rounded-xl border bg-black p-3" />

          <button className="col-span-2 rounded-xl bg-red-600 p-3">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}