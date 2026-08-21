"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Factory,
  FileCheck2,
  Gavel,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const industries = [
  "Cement",
  "Aluminium",
  "Electricals",
  "Healthcare",
  "LED Manufacturing",
  "Retail",
  "Metal",
  "Construction",
  "Logistics",
  "Optical Fiber",
  "Manufacturing",
  "Infrastructure",
  "Finance",
  "Real Estate",
  "Trading",
  "Batteries",
];

const cirpAssignments = [
  ["Jaypee Cement Corporation Ltd.", "Cement", "₹4,900 Cr", "Ongoing"],
  ["Ess Dee Aluminium Ltd.", "Aluminium", "₹2,400 Cr", "Completed"],
  ["Leel Electricals Ltd.", "Electricals", "₹800 Cr", "Completed"],
  [
    "Nayati Healthcare & Research Pvt Ltd",
    "Healthcare",
    "₹450 Cr",
    "Completed",
  ],
  ["Compact Lamps Pvt. Ltd.", "LED Manufacturing", "₹240 Cr", "Completed"],
  ["Goel Jewellery & Mart Pvt Ltd", "Retail", "₹104 Cr", "Completed"],
  ["Laxmi Pipes Ltd.", "Metal", "₹70 Cr", "Ongoing"],
  ["Parivartan Buildtech Pvt. Ltd.", "Construction", "₹58 Cr", "Completed"],
  ["Cargo Planners Ltd.", "Logistics", "₹30 Cr", "Completed"],
  [
    "International Trenching Pvt. Ltd.",
    "Optical Fiber",
    "₹30 Cr",
    "Completed",
  ],
  ["Kanik Electronics Ltd.", "Manufacturing", "₹22 Cr", "Completed"],
  ["APS Infra Engineers Pvt Ltd", "Infrastructure", "₹20 Cr", "Completed"],
  ["Temple Leasing & Finance Ltd.", "Finance", "₹10 Cr", "Completed"],
  ["Jindal Builtech Pvt Ltd", "Construction", "₹5 Cr", "Completed"],
];

const liquidationAssignments = [
  ["Ess Dee Aluminium Ltd.", "Aluminium", "₹2,400 Cr", "Completed"],
  ["Compact Lamps Pvt. Ltd.", "LED", "₹240 Cr", "Completed"],
  ["Goel Jewellery & Mart Pvt Ltd", "Retail", "₹104 Cr", "Completed"],
  ["Parivartan Buildtech Pvt. Ltd.", "Construction", "₹58 Cr", "Completed"],
  ["Sahil International Pvt Ltd", "Trading", "₹50 Cr", "Near Completion"],
  ["Cargo Planners Ltd.", "Logistics", "₹30 Cr", "Dissolution Filed"],
  ["Gems Batteries Ltd.", "Batteries", "₹25 Cr", "Near Completion"],
  ["Kanik Electronics Ltd.", "Manufacturing", "₹22 Cr", "Completed"],
  ["Temple Leasing & Finance Ltd.", "Finance", "₹10 Cr", "Near Completion"],
  [
    "Ahmedabad Vadodara Expressway Ltd",
    "Infrastructure",
    "N/A",
    "Near Completion",
  ],
];

const realEstateAssignments = [
  ["Rohtas Projects Ltd.", "₹350+ Cr"],
  ["Three C Properties Pvt Ltd", "₹174+ Cr"],
  ["GRJ Distributors & Developers", "₹154+ Cr"],
  ["Fairwealth Housing Pvt Ltd", "₹100+ Cr"],
  ["Prabhu Shanti Real Estate Pvt Ltd", "₹100+ Cr"],
  ["Kalka Home Developers Pvt Ltd", "₹67+ Cr"],
  ["Clarion Townships Pvt Ltd", "₹31+ Cr"],
  ["IVR Prime IT SEZ Pvt Ltd", "₹22+ Cr"],
  ["Ramnath Developers Pvt Ltd", "₹10+ Cr"],
  ["Opulent Infra Developers Pvt Ltd", "₹5+ Cr"],
  ["Rudra Buildwell Construction Pvt. Ltd.", "N/A"],
];

const ongoingGuarantors = [
  "Navneet Mathur",
  "Rekha Mathur",
  "Anil Agarwal",
  "Parivartan Singh",
  "Raja Bhoj",
  "K L Gupta",
  "Sandeep Gupta",
  "Shobhna Gupta",
  "Divya Gupta",
  "NM Gupta",
  "Rahul Gupta",
];

const concludedGuarantors = [
  "Naresh Chand Jain",
  "Avinash Jain",
  "Anju Jain",
  "Pankaj Jain",
  "Shehlata Jain",
  "Amit Jain",
  "Vikas Jain",
];

const tabs = [
  {
    id: "all",
    label: "All IBC Assignments",
    icon: BarChart3,
  },
  {
    id: "cirp",
    label: "CIRP Assignments",
    icon: Gavel,
  },
  {
    id: "liquidation",
    label: "Liquidations",
    icon: Landmark,
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: Building2,
  },
  {
    id: "guarantor",
    label: "Personal Guarantor",
    icon: ShieldCheck,
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const isCompleted = status === "Completed";
  const isOngoing =
    status === "Ongoing" || status === "Near Completion";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
        isCompleted
          ? "bg-emerald-50 text-emerald-700"
          : isOngoing
            ? "bg-amber-50 text-amber-700"
            : "bg-slate-100 text-slate-600"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isCompleted
            ? "bg-emerald-500"
            : isOngoing
              ? "bg-amber-500"
              : "bg-slate-400"
        }`}
      />
      {status}
    </span>
  );
};

const AssignmentTable = ({
  data,
}: {
  data: string[][];
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Corporate Debtor
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Industry
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Claims
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={row[0]}
                className={`group border-b border-slate-100 transition hover:bg-cyan-50/40 ${
                  index === data.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-cyan-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-semibold text-[#071a2b]">
                      {row[0]}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {row[1]}
                </td>

                <td className="px-6 py-5 text-sm font-bold text-[#071a2b]">
                  {row[2]}
                </td>

                <td className="px-6 py-5">
                  <StatusBadge status={row[3]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071a2b]">
        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-56 -left-48 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <Award size={16} />
              Our Credentials
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A proven track record in{" "}
              <span className="text-cyan-300">
                insolvency & resolution
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              A proven track record across 53+ CIRP, Liquidation, Personal
              Guarantor, and Advisory assignments — handling over ₹10,000
              Crores in value with 60+ years of combined group experience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          <div className="group border-b border-slate-200 p-7 transition hover:bg-cyan-50/40 sm:border-r lg:border-b-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <TrendingUp size={22} />
            </div>

            <div className="mt-5 text-4xl font-bold tracking-tight text-[#071a2b]">
              60+
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Years of Group Exp.
            </p>
          </div>

          <div className="group border-b border-slate-200 p-7 transition hover:bg-cyan-50/40 lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <CircleDollarSign size={22} />
            </div>

            <div className="mt-5 text-4xl font-bold tracking-tight text-[#071a2b]">
              ₹10,000+
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Crores Debt Handled
            </p>
          </div>

          <div className="group border-b border-slate-200 p-7 transition hover:bg-cyan-50/40 sm:border-r lg:border-b-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <FileCheck2 size={22} />
            </div>

            <div className="mt-5 text-4xl font-bold tracking-tight text-[#071a2b]">
              53+
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              CIRP, Liquidation, PGs & Advisory
            </p>
          </div>

          <div className="group p-7 transition hover:bg-cyan-50/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
              <Users size={22} />
            </div>

            <div className="mt-5 text-4xl font-bold tracking-tight text-[#071a2b]">
              18+
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Expert Members
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRY COVERAGE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Sector Expertise
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
            Industry Coverage
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            We have handled insolvency matters across a wide spectrum of
            industries.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group flex min-h-[76px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-[#071a2b] shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:shadow-md"
            >
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          ASSIGNMENTS SECTION
      ========================================================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Track Record
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
              IBC Assignments
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore our track record across CIRP, liquidation, real estate
              and personal guarantor assignments.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10 flex gap-2 overflow-x-auto border-b border-slate-200 pb-px">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "border-cyan-500 text-[#071a2b]"
                      : "border-transparent text-slate-500 hover:text-[#071a2b]"
                  }`}
                >
                  <Icon size={17} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              ALL
          ===================================================== */}
          {activeTab === "all" && (
            <div className="mt-10">
              <div className="mb-8 rounded-2xl bg-[#071a2b] p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                      Complete Portfolio
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      All IBC Assignments
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Complete overview of all 53+ assignments across CIRP,
                      Liquidation, Real Estate & Personal Guarantor categories.
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                    <BarChart3 size={26} />
                  </div>
                </div>
              </div>

              <AssignmentTable data={cirpAssignments} />
            </div>
          )}

          {/* =====================================================
              CIRP
          ===================================================== */}
          {activeTab === "cirp" && (
            <div className="mt-10">
              <SectionHeader
                icon={Gavel}
                eyebrow="Corporate Insolvency"
                title="CIRP Assignments"
                description="Selected Corporate Insolvency Resolution Process assignments handled by the team."
              />

              <AssignmentTable data={cirpAssignments} />
            </div>
          )}

          {/* =====================================================
              LIQUIDATION
          ===================================================== */}
          {activeTab === "liquidation" && (
            <div className="mt-10">
              <SectionHeader
                icon={Landmark}
                eyebrow="Asset Resolution"
                title="Liquidation Assignments"
                description="Selected liquidation assignments involving asset realization, stakeholder coordination and statutory compliance."
              />

              <AssignmentTable data={liquidationAssignments} />
            </div>
          )}

          {/* =====================================================
              REAL ESTATE
          ===================================================== */}
          {activeTab === "realestate" && (
            <div className="mt-10">
              <SectionHeader
                icon={Building2}
                eyebrow="Real Estate"
                title="Real Estate Assignments"
                description="Experience across complex real estate projects and distressed property assignments."
              />

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-[1fr_auto] border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Project</span>
                  <span>Debt Size</span>
                </div>

                {realEstateAssignments.map((row, index) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-[1fr_auto] items-center border-b border-slate-100 px-6 py-5 transition last:border-0 hover:bg-cyan-50/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-cyan-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-semibold text-[#071a2b]">
                        {row[0]}
                      </span>
                    </div>

                    <span className="text-sm font-bold text-[#071a2b]">
                      {row[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              PERSONAL GUARANTOR
          ===================================================== */}
          {activeTab === "guarantor" && (
            <div className="mt-10">
              <SectionHeader
                icon={ShieldCheck}
                eyebrow="Personal Insolvency"
                title="Personal Guarantor Assignments"
                description="Assignments handled under the applicable insolvency framework for personal guarantors to corporate debtors."
              />

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Ongoing */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                        Ongoing
                      </span>

                      <h3 className="mt-4 text-xl font-semibold text-[#071a2b]">
                        PIRP in Process
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <TrendingUp size={21} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    {ongoingGuarantors.map((name, index) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"
                      >
                        <span className="text-xs font-bold text-cyan-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concluded */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                        Successfully Concluded
                      </span>

                      <h3 className="mt-4 text-xl font-semibold text-[#071a2b]">
                        Resolved Assignments
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <CheckCircle2 size={21} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    {concludedGuarantors.map((name, index) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-cyan-600">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-medium text-slate-700">
                            {name}
                          </span>
                        </div>

                        <span className="text-xs font-semibold text-emerald-600">
                          Resolved
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-cyan-400 px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#071a2b]/60">
              Experience Matters
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071a2b] sm:text-4xl">
              Proven experience. Structured resolution.
            </h2>

            <p className="mt-4 leading-7 text-[#071a2b]/70">
              Our track record reflects the breadth of our experience across
              insolvency, liquidation, restructuring and distressed asset
              assignments.
            </p>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#071a2b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102c43] lg:mt-0"
          >
            Discuss Your Matter
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
};

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-2 text-cyan-600">
          <Icon size={18} />
          <span className="text-xs font-bold uppercase tracking-[0.18em]">
            {eyebrow}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold text-[#071a2b]">
          {title}
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>

      <ChevronRight
        size={32}
        strokeWidth={1}
        className="hidden text-slate-300 sm:block"
      />
    </div>
  );
}

export default Page;