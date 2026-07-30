import React from "react";

const Page = async () => {
    console.log("Helloooooooooo SSR");
  // Server Side API Call
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Products (SSR)
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((item: any) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain"
            />

            <h2 className="font-semibold mt-4 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;