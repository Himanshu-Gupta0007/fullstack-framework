// app/page.tsx
// Next.js 14 (App Router) + Tailwind CSS
// Drop this into app/page.tsx. Make sure Tailwind is set up in your project.

import Link from "next/link";
import { FaReact, FaDocker, FaWordpress, FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
// npm install react-icons

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <span className="text-2xl font-extrabold tracking-tight">
          <span className="text-orange-500">AT</span>{" "}
          <span className="text-gray-900">DRIVE</span>
        </span>
        <svg width="28" height="20" viewBox="0 0 28 20" className="ml-1">
          <rect x="0" y="0" width="18" height="4" fill="#F4622A" transform="skewX(-20)" />
          <rect x="0" y="8" width="24" height="4" fill="#F4622A" transform="skewX(-20)" />
          <rect x="0" y="16" width="14" height="4" fill="#F4622A" transform="skewX(-20)" />
        </svg>
      </div>

      {/* Nav links */}
      <nav className="hidden lg:flex items-center gap-9 text-gray-800 font-medium text-[15px]">
        <button className="flex items-center gap-1 hover:text-orange-500 transition">
          Service
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <Link href="#" className="hover:text-orange-500 transition">Portfolio</Link>
        <Link href="#" className="hover:text-orange-500 transition">Industry Verticals</Link>
        <Link href="#" className="hover:text-orange-500 transition">About Us</Link>
        <Link href="#" className="hover:text-orange-500 transition">Career</Link>
      </nav>

      <Link
        href="#"
        className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-lg text-[15px]"
      >
        Contact
      </Link>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sticky "Get a Quote" side tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-orange-500 text-white text-sm font-semibold px-2 py-4 rounded-l-lg [writing-mode:vertical-rl] tracking-wide cursor-pointer">
        Get a Quotecusfhweouifh34gielmwd mindkwevnsnkdnjn9jwnhimajjs oejsdinwakxxkisdjidjvwkjcdihwecnisswqcsd san sbceufsscns xcujwiduwebcksdj ckihcbdwoucbsdn swchbdcijksd kdb dwvguiewwrfsd bcj dfcbvdwnc dcjk hbdwichbsm ndcjhcdabwq shcbswdujvbdjc scbdwvibdwc WR
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center px-6 md:px-10 pt-6 pb-16 max-w-7xl mx-auto relative">
        {/* LEFT: Text content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-gray-800">
            Building Secure and
            <br />
            Transforming <span className="text-orange-500">Ideas</span> into
            <br />
            Scalable Solutions
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
            Secure, high-performance digital solutions built with modern
            architecture and industry-proven best practices.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-7 py-4 rounded-lg">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="white" strokeWidth="1.8" />
            </svg>
          </button>

          <hr className="mt-10 border-gray-200 max-w-lg" />

          <div className="mt-8 flex gap-10 sm:gap-14">
            <Stat number="500+" label="PROJECTS" />
            <Stat number="98%" label="SATISFACTION" />
            <Stat number="50+" label="TEAM MEMBERS" />
          </div>
        </div>

        {/* RIGHT: Graphic */}
        <div className="relative h-[420px] sm:h-[560px] flex items-center justify-center">
          {/* soft glow behind everything */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,61,0.28)_0%,rgba(255,138,61,0)_70%)]" />
          {/* outer thin orbit ring */}
          <div className="absolute w-[440px] h-[440px] border border-orange-200/70 rounded-full" />
          {/* a few sparkle dots on the ring, like the screenshot */}
          <span className="absolute top-10 right-24 w-1.5 h-1.5 rounded-full bg-orange-300" />
          <span className="absolute bottom-16 left-28 w-1 h-1 rounded-full bg-orange-300" />
          <span className="absolute top-1/3 right-6 w-1 h-1 rounded-full bg-orange-200" />

          {/* Stacked / layered 3D squares (isometric card stack) */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-white rounded-[2rem] shadow-2xl" />
            <div className="absolute w-[15.5rem] h-[15.5rem] bg-gray-50 rounded-[1.8rem] shadow-xl translate-y-[-6px]" />
            <div className="absolute w-44 h-44 bg-white rounded-[1.6rem] shadow-lg translate-y-[-12px]" />
            <div className="absolute w-28 h-28 bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl shadow-lg translate-y-[-18px]" />
          </div>

          {/* Floating tech icon cards, positioned like the original around the stack */}
          <TechCard className="top-0 left-6 sm:left-12">
            <FaReact className="text-sky-400" size={30} />
          </TechCard>

          <TechCard className="top-4 right-0 sm:right-2">
            <FaAws className="text-gray-800" size={34} />
          </TechCard>

          <TechCard className="bottom-28 left-0" faded>
            <FaNodeJs className="text-green-600" size={28} />
          </TechCard>

          <TechCard className="bottom-2 left-20 sm:left-28">
            <FaDocker className="text-sky-500" size={30} />
          </TechCard>

          <TechCard className="bottom-20 right-0">
            <FaWordpress className="text-blue-700" size={32} />
          </TechCard>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-orange-500">{number}</div>
      <div className="text-xs tracking-widest text-gray-500 mt-1 font-medium">
        {label}
      </div>
    </div>
  );
}

function TechCard({
  className,
  children,
  faded,
}: {
  className: string;
  children: React.ReactNode;
  faded?: boolean;
}) {
  return (
    <div
      className={`absolute w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center ${
        faded ? "opacity-70" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}