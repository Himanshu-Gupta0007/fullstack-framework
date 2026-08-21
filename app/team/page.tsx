"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Globe2,
  Scale,
  Users,
} from "lucide-react";

const directors = [
  {
    name: "CMA. Deepika Bhugra Prasad",
    role: "Founder & Managing Partner",
    qualification: "Cost Accountant, Insolvency Professional",
    description:
      "A leading women insolvency professional in India with over 25 years of experience. Based in Delhi & Gurgaon, she serves as an Insolvency Resolution Professional for CIRP, advising across healthcare, automobile, engineering, EPC, textiles, and more.",
    image: "/assets/deepika-prasad-Ec7LS7Qu.jpg",
    href: "/team/deepika-prasad",
  },
  {
    name: "Mr. Srinivas Prasad",
    role: "Designated Partner – International Strategy & Cross-Border Operations",
    qualification: "B.Sc, PGDCA, Ex Indian Army Officer",
    description:
      "Over three decades of global experience across Africa, Latin America, Russia, Europe, South Asia, and India. A former Indian Army officer with deep expertise in multi-jurisdictional EPC projects, international trade, and cross-border insolvency.",
    image: "/assets/srinivas-prasad-DkzDFhrt.jpg",
    href: "/team/srinivas-prasad",
  },
  {
    name: "CA Arvind Mittal",
    role: "Designated Partner",
    qualification: "Chartered Accountant, Insolvency Professional",
    description:
      "Over 17 years of experience in taxation, auditing, forensic investigations, and insolvency advisory. Actively involved in CIRP, liquidation, and personal guarantor insolvency proceedings across real estate, infrastructure, and financial services.",
    image: "/assets/arvind-mittal-D1T-Lhmi.jpg",
    href: "/team/arvind-mittal",
  },
  {
    name: "CMA Anil Sharma",
    role: "Senior Advisor",
    qualification: "Cost Accountant, ICMAI",
    description:
      "Over 30 years of professional experience in cost accounting, taxation, financial advisory, and management consulting. Former Chairman of Northern India Regional Council of ICMAI (2019-20) and Chairman of Indirect Tax Committee of ASSOCHAM (North).",
    image: "/assets/anil-sharma-wMGkciDD.jpg",
    href: "/team/anil-sharma",
  },
  {
    name: "CMA D.C. Bajaj",
    role: "Senior Advisor",
    qualification: "Former President, ICMAI",
    description:
      "Over 35 years of experience in finance, cost analysis, public policy, and regulatory advisory. Former Chief Adviser (Cost), Ministry of Finance, Government of India; Former Member, AERA.",
    image: "/assets/dc-bajaj-Ce3v0_lW.jpg",
    href: "/team/dc-bajaj",
  },
  {
    name: "Ms. Shalini Mathur",
    role: "Senior Advisor",
    qualification: "BA (Hons) Economics, MBE",
    description:
      "Over 36 years of banking experience with HDFC Bank and State Bank of India. Former Zonal Head (North) – Corporate Recoveries at HDFC Bank, managing a stressed asset portfolio of approximately ₹4,600 crore.",
    image: "/assets/shalini-mathur-CS2Jsr0y.jpg",
    href: "/team/shalini-mathur",
  },
];

const advocates = [
  "Atul Bhatia",
  "Akshay Goel",
  "Shrey Patnaik",
  "Mukesh Pandey",
  "Rahul Gupta",
  "Sanjeev Choudhary",
  "Gaurav Joshi",
  "Saira Khan",
  "Kush Taneja",
  "Shivani Chandra",
  "Anushka",
];

const teamMembers = [
  "Rajnish",
  "Kolkata – Arun",
  "Zhoib",
  "Zubeen",
];

const supportStaff = [
  "Pulkit Raswant",
  "Parth Advani",
  "Hreshekesh Jha",
  "Sundaram Pachauri",
];

const Page = () => {
  return (
    <main className="bg-[#f8fafc] text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071a2b]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Our Team
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experienced professionals,
              <br />
              <span className="text-cyan-300">trusted expertise.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Meet the experienced professionals leading D Prasad Advisory LLP
              with integrity and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DIRECTORS INTRO ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
              Our Directors & Advisors
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Our leadership brings together decades of experience across
            insolvency, finance, taxation, banking, international operations,
            restructuring and regulatory advisory.
          </p>
        </div>
      </section>

      {/* ================= DIRECTORS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2">
          {directors.map((person, index) => (
            <article
              key={person.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="relative h-[340px] overflow-hidden bg-[#071a2b]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  priority={index < 2}
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2b]/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 inline-flex rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-[#071a2b]">
                    {person.role}
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {person.name}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-cyan-600">
                  {person.qualification}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {person.description}
                </p>

                <Link
                  href={person.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#071a2b] transition hover:text-cyan-600"
                >
                  View Profile
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= EXPERTISE STRIP ================= */}
      <section className="bg-[#071a2b] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <Award className="text-cyan-300" size={28} />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Proven Experience
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Decades of professional experience across insolvency,
                finance, banking, taxation and advisory.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <Globe2 className="text-cyan-300" size={28} />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Global Perspective
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                International experience across multiple jurisdictions,
                industries and cross-border engagements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <Scale className="text-cyan-300" size={28} />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Professional Integrity
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                A structured, transparent and compliance-focused approach to
                every professional engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVOCATES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Legal Professionals
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
            Advocates
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Having more than half a decade of experience, our legal
            professionals support the firm across insolvency and restructuring
            matters.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advocates.map((name, index) => (
            <div
              key={name}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
            >
              <span className="text-xs font-bold text-cyan-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-medium text-[#071a2b]">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM MEMBERS ================= */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Our People
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#071a2b]">
                Team Members
              </h2>
            </div>

            <Users
              size={75}
              strokeWidth={1}
              className="hidden text-slate-200 md:block"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((name) => (
              <div
                key={name}
                className="rounded-xl bg-[#f8fafc] px-5 py-6 text-center font-semibold text-[#071a2b] transition hover:bg-cyan-50"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT STAFF ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-[#071a2b] p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Operations
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white">
              Support Staff
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Our support team plays an important role in ensuring smooth
              coordination and efficient execution across the firm.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {supportStaff.map((name) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-5 py-5 text-center font-medium text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-cyan-400 px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#071a2b]/60">
              D Prasad Advisory LLP
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
              Expertise you can rely on.
            </h2>

            <p className="mt-4 leading-7 text-[#071a2b]/70">
              Connect with our experienced professionals for insolvency,
              restructuring and distressed asset advisory.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#071a2b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102c43] lg:mt-0"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

     
    </main>
  );
};

export default Page;