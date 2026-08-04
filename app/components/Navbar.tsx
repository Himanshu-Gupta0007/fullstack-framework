import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;