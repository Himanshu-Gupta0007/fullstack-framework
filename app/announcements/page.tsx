import React from "react";

const announcements = [
  {
    type: "CIRP",
    company: "Jaypee Cement Corporation Limited",
    description:
      "Corporate Insolvency Resolution Process is currently ongoing. Expression of Interest is invited from prospective Resolution Applicants.",
    href: "/public-announcements/jaypee-cement-corporation-limited",
    documents: 2,
  },
];

const galleryImages = [
  "https://dprasad.in/__l5e/assets-v1/b297cca4-abe3-4f16-92dd-6e851510a854/conference-ibc-2023-collage-1.jpeg",
  "https://dprasad.in/__l5e/assets-v1/ed8c857e-5299-4a1c-9b5e-bc6494d5ee72/conference-ibc-2023-collage-2.jpeg",
  "https://dprasad.in/assets/deepika-1-DtGOSw6R.jpg",
  "https://dprasad.in/assets/deepika-2-C2mUH3vv.jpg",
  "https://dprasad.in/assets/deepika-3-CHxVPHJa.jpg",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#17191c]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111315]">
        {/* Background glow */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
              Official Public Notices
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Public
              <span className="text-amber-400"> Announcements</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Official notices, invitations for Expression of Interest and
              Form G publications for companies under CIRP and Liquidation.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">01</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  Active CIRP
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">00</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  Liquidation
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">02</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  Documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Current Proceedings
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ongoing CIRP
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Active corporate insolvency resolution proceedings
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold shadow-sm">
            01
          </div>
        </div>

        {announcements.map((item) => (
          <article
            key={item.company}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.09)]"
          >
            {/* Accent line */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-amber-400 to-amber-600" />

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item.type}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-semibold text-gray-600">
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M8 13h8M8 17h6" />
                  </svg>
                  {item.documents} Documents
                </div>
              </div>

              <div className="mt-8 max-w-4xl">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {item.company}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-gray-500">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-7">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#17191c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  View Details
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  View Documents
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* LIQUIDATION */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Liquidation Proceedings
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Ongoing Liquidation
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Current liquidation announcements and notices
              </p>
            </div>

            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-gray-50 ring-1 ring-gray-200">
              <span className="text-2xl font-semibold">00</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Active
              </span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-5 rounded-2xl border border-dashed border-gray-200 bg-[#fafafa] p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 2" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>

            <div>
              <p className="font-semibold text-gray-700">
                No active announcements
              </p>
              <p className="mt-1 text-sm text-gray-500">
                There are currently no companies under active liquidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#17191c] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Need Assistance?
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Have a query regarding an announcement?
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                For any queries regarding public announcements, notices or
                proceedings, please get in touch with our team.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-amber-400"
            >
              Contact Us
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f7f8fa] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Gallery
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Events &amp; Moments
              </h2>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:mt-0 sm:text-right">
              A glimpse into conferences, events and professional engagements.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:grid-cols-3 lg:auto-rows-[280px]">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 3
                    ? "col-span-2"
                    : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Event gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 translate-y-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Gallery
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}