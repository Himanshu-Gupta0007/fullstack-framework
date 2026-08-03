import React from "react";
import {
  ArrowRight,
  Building2,
  Scale,
  ShieldCheck,
  Landmark,
  Users,
} from "lucide-react";

const stats = [
  { number: "10+", label: "Years of Professional Experience" },
  { number: "100+", label: "Assignments & Advisory Support" },
  { number: "50+", label: "Corporate & Financial Clients" },
  { number: "100%", label: "Integrity & Compliance" },
];

const Page = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">

          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-300">
            Insolvency • Bankruptcy • Corporate Restructuring
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl md:text-7xl font-bold leading-tight text-white">
            Trusted Advisory Solutions for
            <span className="text-amber-400"> Insolvency & Corporate Restructuring</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            D Prasad Advisory LLP delivers integrated legal, financial,
            operational and strategic advisory services under the Insolvency
            and Bankruptcy Code (IBC), 2016 for Insolvency Professionals,
            Financial Institutions, Creditors, Investors and Corporate Entities.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-xl bg-amber-500 px-7 py-4 font-semibold text-black transition hover:bg-amber-400">
              Explore Services
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-white transition hover:bg-white/10">
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="-mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.label}
                className="text-center border-r last:border-r-0"
              >
                <h2 className="text-4xl font-bold text-slate-900">
                  {item.number}
                </h2>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-amber-600 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              D Prasad Advisory LLP
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              D Prasad Advisory LLP is a professional advisory firm specializing
              in Insolvency, Bankruptcy, Corporate Restructuring and Stressed
              Asset Resolution under the Insolvency and Bankruptcy Code, 2016.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              We provide comprehensive legal, financial, operational and
              strategic advisory support to Insolvency Professionals,
              Financial Institutions, Banks, Creditors, Investors and Corporate
              Entities involved in insolvency and restructuring processes.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Our multidisciplinary team combines expertise across law,
              finance, compliance and business strategy to deliver practical,
              transparent and value-driven professional solutions.
            </p>

          </div>

          <div>

            <div className="rounded-3xl bg-slate-900 p-10 shadow-2xl">

              <div className="grid gap-6">

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-amber-500 p-3">
                    <Scale className="text-black" />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      Insolvency Advisory
                    </h3>

                    <p className="mt-2 text-slate-300">
                      End-to-end advisory support under the Insolvency &
                      Bankruptcy Code.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-amber-500 p-3">
                    <Building2 className="text-black" />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      Corporate Restructuring
                    </h3>

                    <p className="mt-2 text-slate-300">
                      Strategic restructuring solutions for sustainable
                      business growth.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-amber-500 p-3">
                    <Landmark className="text-black" />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      Financial Institutions
                    </h3>

                    <p className="mt-2 text-slate-300">
                      Professional advisory services for lenders,
                      creditors and investors.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= VISION MISSION ================= */}

      <section className="bg-slate-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-10 shadow-lg">

              <ShieldCheck
                size={42}
                className="text-amber-500"
              />

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                Our Vision
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                To establish D Prasad Advisory LLP as one of India's most
                trusted advisory firms in Insolvency, Bankruptcy and
                Corporate Restructuring through ethical, innovative and
                value-driven professional services.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-10 shadow-lg">

              <Users
                size={42}
                className="text-amber-400"
              />

              <h2 className="mt-6 text-3xl font-bold text-white">
                Our Mission
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">

                <li>• Deliver efficient restructuring solutions.</li>

                <li>• Maximize stakeholder value.</li>

                <li>• Maintain transparency and ethics.</li>

                <li>• Strengthen India's insolvency ecosystem.</li>

                <li>• Promote continuous innovation and learning.</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;