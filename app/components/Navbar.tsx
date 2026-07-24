import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">🚀 Next Todo</h1>

          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/todos" className="hover:text-yellow-300 transition">
                Todos
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Content */}
      <main className="flex items-center justify-center h-[80vh]">
        <h2 className="text-4xl font-bold">🏠 Home Page</h2>
      </main>
    </>
  );
}