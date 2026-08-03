import Link from "next/link";
import React from "react";

const stats = [
  { number: "10+", title: "Years Experience" },
  { number: "100+", title: "Assignments" },
  { number: "50+", title: "Clients" },
  { number: "100%", title: "Integrity" },
];

const Page = () => {
  return (
    <>
      {/* Top Bar */}

      <div className="bg-slate-950 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between px-6 py-2">
          <p>📞 +91 9717998112</p>

          <p>✉️ deepika.bhugra@gmail.com</p>
        </div>
      </div>

      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

          <div>

            <h1 className="text-2xl font-bold text-slate-900">
              D Prasad
            </h1>

            <p className="text-xs tracking-widest text-amber-600 uppercase">
              Advisory LLP
            </p>

          </div>

          <ul className="hidden lg:flex gap-8 text-[15px] font-medium text-slate-700">

            <li><Link href="/">Home</Link></li>

            <li><Link href="/about">About</Link></li>

            <li><Link href="/services">Services</Link></li>

            <li><Link href="/team">Team</Link></li>

            <li><Link href="/credentials">Credentials</Link></li>

            <li><Link href="/gallery">Gallery</Link></li>

            <li><Link href="/announcements">Announcements</Link></li>

            <li><Link href="/knowledge-bank">Knowledge Bank</Link></li>

            <li><Link href="/contact">Contact</Link></li>

          </ul>

          <Link href="/contact">

            <button className="rounded-xl bg-amber-500 px-6 py-3 font-semibold hover:bg-amber-400 transition">

              Schedule Consultation

            </button>

          </Link>

        </div>
      </nav>

      {/* Hero */}

      <section className="relative overflow-hidden bg-slate-950">

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-amber-300">

            Insolvency • Bankruptcy • Restructuring

          </span>

          <h1 className="mt-8 max-w-4xl text-6xl font-bold leading-tight text-white">

            Professional Advisory Services for

            <span className="text-amber-400">

              {" "}Insolvency & Corporate Restructuring

            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">

            D Prasad Advisory LLP provides integrated legal, financial,
            operational and strategic advisory services under the Insolvency
            and Bankruptcy Code (IBC), 2016.

          </p>

          <div className="mt-10 flex gap-5">

            <Link href="/services">

              <button className="rounded-xl bg-amber-500 px-7 py-4 font-semibold hover:bg-amber-400">

                Explore Services

              </button>

            </Link>

            <Link href="/contact">

              <button className="rounded-xl border border-white/30 px-7 py-4 text-white hover:bg-white/10">

                Contact Us

              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="-mt-12 relative z-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 rounded-3xl bg-white shadow-2xl">

            {stats.map((item) => (

              <div
                key={item.title}
                className="border p-8 text-center"
              >

                <h2 className="text-4xl font-bold text-slate-900">

                  {item.number}

                </h2>

                <p className="mt-2 text-slate-600">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Page;