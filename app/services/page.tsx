"use client";

import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck2,
  Gavel,
  Handshake,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const services = [
  {
    icon: Gavel,
    title: "Interim Resolution Professional",
    description:
      "Acting as Interim Resolution Professional during the initial stages of the Corporate Insolvency Resolution Process (CIRP), including management of the corporate debtor, claim collation, and constitution of the Committee of Creditors.",
  },
  {
    icon: UserCheck,
    title: "Resolution Professional",
    description:
      "Serving as Resolution Professional in CIRP matters, overseeing the entire resolution process, stakeholder coordination, preparation of Information Memorandum, and facilitation of resolution plans.",
  },
  {
    icon: Building2,
    title: "Liquidation Services",
    description:
      "Acting as Liquidator appointed by the Adjudicating Authority to manage the liquidation process, asset realization, and distribution of proceeds in accordance with the IBC.",
  },
  {
    icon: Scale,
    title: "Voluntary Liquidation",
    description:
      "Advising and managing Voluntary Liquidation processes under Section 59 of the IBC, ensuring a structured and compliant winding-up of companies.",
  },
  {
    icon: ShieldCheck,
    title: "Insolvency Resolution for Personal Guarantors",
    description:
      "Handling insolvency proceedings for Personal Guarantors to Corporate Debtors under the applicable provisions of the Insolvency and Bankruptcy Code.",
  },
  {
    icon: TrendingUp,
    title: "Corporate Restructuring & Distressed Asset Advisory",
    description:
      "Providing strategic advisory services for business restructuring, revival strategies, and resolution of stressed assets for lenders, investors, and corporates.",
  },
  {
    icon: Landmark,
    title: "Legal & Regulatory Advisory",
    description:
      "Providing advisory and coordination for IBC proceedings before NCLT, NCLAT and other regulatory authorities, ensuring compliance with applicable laws and regulations.",
  },
];

const supportServices = [
  {
    icon: FileCheck2,
    title: "Verification of Claims",
    description:
      "Processing and verifying bulk claims within prescribed timelines as per applicable legal requirements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Asset Takeover Support",
    description:
      "Assisting IRPs and RPs in acquiring control, custody and management of Corporate Debtor assets.",
  },
  {
    icon: Handshake,
    title: "Concept Development",
    description:
      "Comprehensive support throughout CIRP proceedings — from COC meetings to ensuring procedural compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Due Diligence of PRAs",
    description:
      "Ensuring compliance of Prospective Resolution Applicants with Section 29A and other applicable regulations.",
  },
  {
    icon: CheckCircle2,
    title: "Resolution Plan Vetting",
    description:
      "Vetting Resolution Plans for alignment with the IBC, CIRP Regulations and relevant laws prior to NCLT approval.",
  },
];

const Page = () => {
  return (
    <main className="bg-[#f8fafc] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071a2b]">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Professional Insolvency & Restructuring Services
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Strategic Solutions for{" "}
              <span className="text-cyan-300">
                Insolvency & Distressed Assets
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              D Prasad Advisory LLP provides specialized professional services
              in insolvency, bankruptcy, restructuring and distressed asset
              resolution under the Insolvency and Bankruptcy Code, 2016.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-[#071a2b] transition hover:bg-cyan-300"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discuss Your Matter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Our Expertise
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
              Comprehensive support across the insolvency lifecycle
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Our team brings deep expertise and a structured approach to
            managing complex insolvency matters, helping stakeholders navigate
            regulatory, operational and commercial challenges with confidence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50 transition group-hover:bg-cyan-100" />

                <div className="relative">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a2b] text-cyan-300 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                    0{index + 1}
                  </p>

                  <h3 className="text-xl font-semibold text-[#071a2b]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#071a2b]">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-[#071a2b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Support Services
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Specialized Support to Insolvency Professionals
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Reliable execution support for IRPs and RPs across critical
              stages of the insolvency resolution process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                      <Icon size={20} />
                    </div>

                    <div>
                      <span className="text-xs font-medium text-cyan-300/70">
                        0{index + 1}
                      </span>

                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-cyan-400 px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#071a2b]/60">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
              Need professional guidance on a distressed asset or insolvency
              matter?
            </h2>

            <p className="mt-4 leading-7 text-[#071a2b]/70">
              Connect with D Prasad Advisory LLP to discuss your specific
              requirements and explore a structured way forward.
            </p>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#071a2b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102c43] lg:mt-0"
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Page;