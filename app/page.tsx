import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background Blur */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-medium tracking-wide text-amber-300">
            Insolvency • Bankruptcy • Restructuring • IBC, 2016
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            D Prasad
            <span className="block text-amber-400">
              Advisory LLP
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-9 text-slate-300">
            Specializing in{" "}
            <span className="font-semibold text-white">
              Insolvency, Bankruptcy, Corporate Restructuring,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              Stressed Asset Resolution
            </span>{" "}
            under the Insolvency and Bankruptcy Code (IBC), 2016. We provide
            strategic, legal, and financial advisory solutions with integrity,
            professionalism, and industry expertise.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link href="/services">
              <button className="rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400">
                Our Services →
              </button>
            </Link>

            <Link href="/contact">
              <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-amber-400">10+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Years of Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-amber-400">100+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Successful Assignments
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-amber-400">50+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Corporate Clients
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-amber-400">100%</h3>
              <p className="mt-2 text-sm text-slate-300">
                Integrity & Confidentiality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;