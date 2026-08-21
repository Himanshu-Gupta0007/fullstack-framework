"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  Image as ImageIcon,
  X,
} from "lucide-react";

const galleryImages = [
  {
    src: "https://dprasad.in/assets/event-1-CX-azvOa.jpg",
    category: "Events",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/event-2-BrlIfAnT.jpg",
    category: "Events",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/event-3-DcVCdW9T.jpg",
    category: "Events",
    title: "Industry Event",
  },
  {
    src: "https://dprasad.in/assets/event-4-B4kbJIwT.jpg",
    category: "Events",
    title: "Professional Gathering",
  },
  {
    src: "https://dprasad.in/assets/event-5-361YJ0_n.jpg",
    category: "Events",
    title: "Industry Engagement",
  },
  {
    src: "https://dprasad.in/assets/event-6-DBu2qsPc.jpg",
    category: "Events",
    title: "Professional Event",
  },

  {
    src: "https://dprasad.in/assets/deepika-1-DtGOSw6R.jpg",
    category: "Leadership",
    title: "CMA. Deepika Bhugra Prasad",
  },
  {
    src: "https://dprasad.in/assets/deepika-2-C2mUH3vv.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-3-CHxVPHJa.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-4-C8QIDI5E.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-5-BN1jxBRY.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-6-BiNM56Ei.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-7-QcAC2WOW.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-8-CIQYoxkA.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-9-B-xpjm70.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-10-mrXGK6NG.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-11-eOVdc0xy.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-12-BetQAJZU.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-13-DL_a6IwT.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-14--xCdNJAr.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-15-BWUNscg6.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-16-CNEZ9-SV.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },
  {
    src: "https://dprasad.in/assets/deepika-17-m09mWlID.jpg",
    category: "Leadership",
    title: "Professional Engagement",
  },

  {
    src: "https://dprasad.in/assets/event-7-CtaPbbnj.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-8-DXCIRs2e.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-9-BJhxPdES.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-10-CQ5lQfLd.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-11-BGGWjBVH.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-12-Be3EOXXP.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-13-DiLrRBrd.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-14-Bx_TNznQ.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-15-DsqgpSPN.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-16-BLCmsqFw.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-17-C82ZM0U7.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-18-B0VtdLnL.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-19-DHYCxtfF.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-20-CteD8uhZ.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-21-CVMVmGDU.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-22-DdxwDcc7.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-23-BFuOJg7c.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-24-CW4qt_Ha.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-25-BXGsgwNk.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-26-C0UOQFNN.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-27-BXDAdZGY.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-28-r_b4SNU3.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-29-B62sUWKW.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-30-C4yPCpn1.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-31-BpcniSUa.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-32-C1zixgTV.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-33-B_oOdLUC.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-34-Dv6Er-tI.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-35-CxRAbDyt.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-36-CgdeYIkc.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-37-CDTlJ9W6.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-38-DiKDwDGM.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-39-CwrmKPFF.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-40-VM0oYCQi.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-41-DZEYcryj.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-42-CsdBP557.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-43-BqiBQ0uR.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-44-CdO3f1Xx.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-45-BhbMGIp-.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-46-BxDwJE6l.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-47-CLZJVoQq.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-48-V7_3rLPS.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-49-DGn6rWmL.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-50-Tp-9Iifp.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-51-BNFwnjat.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-52-FMZBZ-Wb.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-53-C4q7oM-V.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-54-DKdBSPqA.jpg",
    category: "Events",
    title: "Professional Event",
  },
  {
    src: "https://dprasad.in/assets/event-55-BJGZAzAo.jpg",
    category: "Events",
    title: "Professional Event",
  },
];

const categories = ["All", "Events", "Leadership"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <main className="min-h-screen bg-[#f7f9fb] text-[#071a2b]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071a2b]">
        <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <ImageIcon size={16} />
              Our Gallery
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Moments that reflect our{" "}
              <span className="text-cyan-300">
                professional journey
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Moments from our events, seminars, professional engagements
              and industry interactions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-3">
          <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r">
            <div className="text-3xl font-bold text-[#071a2b]">
              {galleryImages.length}+
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Moments Captured
            </p>
          </div>

          <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r">
            <div className="text-3xl font-bold text-[#071a2b]">
              2
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Gallery Collections
            </p>
          </div>

          <div className="p-6">
            <div className="text-3xl font-bold text-[#071a2b]">
              ∞
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Professional Connections
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Heading + Filters */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Moments & Memories
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore Our Gallery
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              A glimpse into the events, seminars and professional
              engagements that shape our journey.
            </p>
          </div>

          {/* Filters */}
          <div className="flex w-fit items-center gap-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#071a2b] text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 hover:text-[#071a2b]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl bg-slate-200 text-left break-inside-avoid focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-4"
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="block h-auto w-full transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2b]/90 via-[#071a2b]/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Category */}
              <div className="absolute left-4 top-4 translate-y-[-5px] rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#071a2b] opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {image.category}
              </div>

              {/* Bottom information */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">
                      D Prasad Advisory LLP
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#071a2b]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <Grid2X2 className="mx-auto text-slate-400" size={40} />

            <h3 className="mt-4 text-lg font-semibold">
              No images found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try selecting another category.
            </p>
          </div>
        )}
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-cyan-400 px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#071a2b]/60">
              D Prasad Advisory LLP
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071a2b]">
              Experience. Expertise. Professionalism.
            </h2>

            <p className="mt-3 max-w-2xl text-[#071a2b]/70">
              Building meaningful professional relationships across the
              insolvency and restructuring ecosystem.
            </p>
          </div>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#071a2b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102c43] lg:mt-0"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02080d]/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#071a2b]"
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>

          {/* Counter */}
          <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            {(selectedIndex ?? 0) + 1} / {filteredImages.length}
          </div>

          {/* Previous */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#071a2b] sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#071a2b] sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[78vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {selectedImage.category}
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}