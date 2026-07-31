import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-900">
            D Prasad Advisory LLP
          </h1>



          {/* Menu */}
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>



            <li>
              <Link href="/team" className="hover:text-blue-600">
                Team
              </Link>
            </li>

            <li>
              <Link href="/credentials" className="hover:text-blue-600">
                Credentials
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-blue-600">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/announcements" className="hover:text-blue-600">
                Announcements
              </Link>
            </li>

            <li>
              <Link href="/knowledge-bank" className="hover:text-blue-600">
                Knowledge Bank
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>

          {/* Button */}
          <Link href="/contact">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-5xl font-bold text-blue-900">
          Welcome to D Prasad Advisory LLP
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Professional Advisory & Consultancy Services
        </p>

        <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg">
          "SSG (Static Site Generation) me Next.js build time (npm run build) par HTML generate karta hai aur usse static file ke roop me save kar deta hai. User request aane par server dobara HTML generate nahi karta, balki wahi ready HTML serve karta hai. Isse website bahut fast hoti hai aur SEO bhi achha hota hai."
        </button>


      </section>





    </>
  );
};

export default Page;