import { useState } from "react";

export default function App() {
  const bookingLink =
    "https://getsquire.com/booking/book/no-cap-kutz-barbershop-fort-worth/barber/jibre-woods/services";

  const phone = "(817) 902-1767";
  const phoneHref = "tel:8179021767";
  const address = "5800 E Berry St #110, Fort Worth, TX 76119";

  const services = [
    {
      name: "Adult Haircut",
      price: "$40",
      time: "30 mins",
      desc: "Adult Haircut (Men & Women) A complete haircut service for men and women. Includes a precision haircut tailored to your style, straight-razor detailing, beard shaping (if needed), enhancements, and eyebrow cleanup. OG CLIENTS KEEP THEIR ORIGINAL PRICES.",
    },
    {
      name: "Kids & Teen Haircut",
      price: "$25",
      time: "30 mins",
      desc: "Kids & Teen Haircut (Ages 0–17) Designed for kids and teens of all ages. This service includes a clean, age-appropriate haircut with attention to comfort, patience, and detail. Perfect for first cuts, school styles, or fresh fades. OG clients keep their original pricing.",
    },
    {
      name: "VIP Full Package 👑",
      price: "$65",
      time: "1 hr 15 mins",
      desc: "Begin with a refreshing shampoo, followed by a precision haircut and full shave. This service includes a hot towel, facial steam, relaxing massage, deep skin facial cleansing with a black mask, and nose hair removal so you leave fully refreshed, polished, and confident.",
    },
    {
      name: "Line Up / Beard Trim",
      price: "$20",
      time: "30 mins",
      desc: "Clean lineup and detailed beard trim using trimmers, straight razor and scissors for sharp edges and a polished finish. Does not include a taper or haircut. OG clients keep their original pricing.",
    },
    {
      name: "After Hours",
      price: "$50",
      time: "1 hr",
      desc: "A cut before 8 AM or after 8 PM? No problem! After-hours haircuts are $10 added to your regular cut, resulting in: Kid Cut: $35 • Adult Cut: $50. Text to book: 817-902-1767.",
    },
    {
      name: "House Calls",
      price: "$85",
      time: "2 hrs 30 mins",
      desc: "Can’t make it to the shop? I’ll come to you! Serving the Fort Worth/DFW area with convenient, safe, and fresh cuts wherever you are. Drives over 30 minutes from the shop are $25 extra. Text to book: 817-902-1767.",
    },
  ];

  const gallery = [
    {
      title: "Clean fades",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sharp lineups",
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Beard trims",
      image:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Modern styles",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const features = [
    "Easy online booking",
    "Clean, professional cuts",
    "Fort Worth barber service",
    "Fast scheduling experience",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10,10,10,0.78), rgba(10,10,10,0.88)), url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-200">
              Fort Worth Barber Shop
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              J Runnin Fades
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Clean cuts, sharp fades, and professional service in Fort Worth.
              Modern style, smooth booking, and a shop experience your clients
              remember.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-red-900/30 transition hover:scale-[1.02] hover:bg-red-500"
              >
                Book Now
              </a>

              <button
                onClick={() => scrollToSection("services")}
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                View Services
              </button>

              <a
                href={phoneHref}
                className="rounded-2xl border border-white/20 bg-black/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Call Shop
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-neutral-400">Phone</p>
                <a
                  href={phoneHref}
                  className="mt-1 block font-medium hover:text-red-300"
                >
                  {phone}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:col-span-2">
                <p className="text-sm text-neutral-400">Location</p>
                <p className="mt-1 font-medium">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 text-sm text-neutral-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Popular cuts and pricing
            </h2>
          </div>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
          >
            Book Through Squire
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{service.time}</p>
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-base font-bold text-red-300">
                  {service.price}
                </div>
              </div>

              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="mt-4 text-sm font-medium text-blue-300 transition hover:text-blue-200"
              >
                {openIndex === i ? "Hide Description" : "Read Description"}
              </button>

              {openIndex === i && (
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {service.desc}
                </p>
              )}

              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-2xl bg-red-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-red-500"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">
              Gallery
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Work that sells the shop
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-400">
              Check out some of our recent work. Clean fades, sharp lineups, and modern styles done right.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xl font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">
              Booking
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Ready for a fresh cut?
            </h2>
            <p className="mt-4 text-neutral-400">
              Book your appointment quickly through our secure online booking page.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold transition hover:bg-red-500"
              >
                Open Booking Page
              </a>

              <a
                href={phoneHref}
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
              >
                Call {phone}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6">
            <h3 className="text-2xl font-bold">Shop info</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Address</p>
                <p className="mt-1">{address}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Phone</p>
                <a href={phoneHref} className="mt-1 block hover:text-red-300">
                  {phone}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">Hours / Availability</p>
                <p className="mt-1 text-neutral-300">
                  Appointments available through online booking or by phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>J Runnin Fades</p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-white"
            >
              Gallery
            </button>
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Book
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}