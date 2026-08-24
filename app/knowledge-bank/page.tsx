import React from "react";

const articles = [
  {
    category: "NCLT",
    area: "Companies Act",
    title:
      "NCLT Upholds Shareholder Wisdom in Capital Reduction Despite Losses",
    caseName: "Abtran India Pvt. Ltd. — Capital Reduction",
    year: "2025",
    description:
      "A company with accumulated losses can still undertake reduction of share capital under Section 66 and make payments to shareholders, provided the scheme is duly approved by special resolution and complies with statutory requirements.",
    href: "/articles/nclt-capital-reduction-abtran",
    pdf: "/articles/nclt-capital-reduction.pdf",
  },
  {
    category: "NCLT",
    area: "Companies Act",
    title: "P & R Infraprojects Ltd. v. Ministry of Corporate Affairs & Anr.",
    caseName: "P & R Infraprojects Ltd. v. MCA",
    year: "2025",
    description:
      "Section 131 of the Companies Act, 2013 cannot be invoked for inadvertent filing errors in AOC-4 XBRL. Such administrative mistakes must be rectified through the Registrar of Companies.",
    href: "/articles/pr-infra-vs-mca",
    pdf: "/articles/pr-infra-vs-mca.pdf",
  },
  {
    category: "NCLT Bengaluru",
    area: "IBC / CIRP",
    title:
      "Regional Provident Fund Commissioner v. Dunlop Polymer Pvt. Ltd. & Anr.",
    caseName: "RPFC v. Dunlop Polymer Pvt. Ltd.",
    year: "2025",
    description:
      "Claims filed beyond prescribed CIRP timelines cannot be entertained after approval of the resolution plan. While provident fund dues are excluded from the liquidation estate, statutory authorities must still comply with procedural timelines under the IBC.",
    href: "/articles/pf-commissioner-vs-dunlop",
    pdf: "/articles/pf-commissioner-vs-dunlop.pdf",
  },
  {
    category: "NCLAT",
    area: "IBC / Limitation",
    title:
      "Sub-Registrar Office & Anr. v. Venkataraman Subramanian & Anr.",
    caseName: "Sub-Registrar Office v. Venkataraman Subramanian",
    year: "2025",
    description:
      "Delay beyond the maximum statutory limit of 45 days under Section 61 of the IBC is strictly non-condonable. Any appeal filed after this period is liable to be dismissed as time-barred.",
    href: "/articles/sub-registrar-vs-venkataraman",
    pdf: "/articles/sub-registrar-vs-venkataraman.pdf",
  },
];

const galleryImages = [
  "https://dprasad.in/__l5e/assets-v1/b297cca4-abe3-4f16-92dd-6e851510a854/conference-ibc-2023-collage-1.jpeg",
  "https://dprasad.in/__l5e/assets-v1/ed8c857e-5299-4a1c-9b5e-bc6494d5ee72/conference-ibc-2023-collage-2.jpeg",
  "https://dprasad.in/assets/deepika-1-DtGOSw6R.jpg",
  "https://dprasad.in/assets/deepika-2-C2mUH3vv.jpg",
  "https://dprasad.in/assets/deepika-3-CHxVPHJa.jpg",
  "https://dprasad.in/assets/deepika-4-C8QIDI5E.jpg",
  "https://dprasad.in/assets/deepika-5-BN1jxBRY.jpg",
  "https://dprasad.in/assets/deepika-6-BiNM56Ei.jpg",
  "https://dprasad.in/assets/deepika-7-QcAC2WOW.jpg",
  "https://dprasad.in/assets/deepika-8-CIQYoxkA.jpg",
  "https://dprasad.in/assets/deepika-9-B-xpjm70.jpg",
  "https://dprasad.in/assets/deepika-10-mrXGK6NG.jpg",
  "https://dprasad.in/assets/deepika-11-eOVdc0xy.jpg",
  "https://dprasad.in/assets/deepika-12-BetQAJZU.jpg",
  "https://dprasad.in/assets/deepika-13-DL_a6IwT.jpg",
];

function FileIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#17191c]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#111315]">
        <div className="absolute -left-32 -top-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,.8)]" />
              Knowledge Bank
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Articles
              <span className="text-amber-400"> &amp; Case Laws</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
              Curated commentary on landmark judgments shaping insolvency,
              corporate, and commercial jurisprudence in India.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <p className="text-2xl font-semibold text-white">04</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  Case Notes
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <p className="text-2xl font-semibold text-white">2025</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  Latest Cases
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <p className="text-2xl font-semibold text-white">NCLT</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  Primary Forum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
            Legal Insights
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Recent Case Laws
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
            Concise expert summaries of recent NCLT and NCLAT rulings, drawn
            from our practice.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_35px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-transparent" />

              <div className="flex h-full flex-col p-7 sm:p-8">
                {/* Tags */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                      {article.category}
                    </span>

                    <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      {article.area}
                    </span>
                  </div>

                  <span className="shrink-0 text-xs font-bold text-gray-400">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-7">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-gray-400">
                    {article.caseName}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-5 flex-1 text-sm leading-7 text-gray-500">
                  {article.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      {article.year.slice(2)}
                    </span>
                    {article.year}
                    <span className="mx-1 text-gray-300">•</span>
                    Case Note
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={article.href}
                      className="group inline-flex items-center gap-2 rounded-xl bg-[#17191c] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-amber-600"
                    >
                      Read More
                      <ArrowIcon />
                    </a>

                    <a
                      href={article.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-bold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      <FileIcon />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KNOWLEDGE CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#17191c] px-7 py-12 sm:px-10 lg:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Stay Informed
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Stay updated with evolving jurisprudence.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Explore our curated collection of judgments, case notes and
                practical insights across insolvency and corporate law.
              </p>
            </div>

            <a
              href="#recent-cases"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-amber-400"
            >
              Explore Case Laws
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="border-t border-gray-200 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
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
              Conferences, professional engagements and moments from our
              practice.
            </p>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 lg:auto-rows-[250px]">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 5
                    ? "col-span-2"
                    : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 translate-y-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Gallery #{String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}