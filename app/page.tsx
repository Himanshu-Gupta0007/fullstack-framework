import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <nav className="flex gap-4 justify-center items-center text-blue-500 text-lg font-semibold">
        <ul className="flex gap-4 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
           <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Home Page</h1>
      </div>
    </div>
  );
};

export default Page;