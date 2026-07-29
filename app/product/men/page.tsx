"use client";

import { useEffect, useState } from "react";

// Product ka type
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Page = () => {
  // State ka type
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );

        const data: Product[] = await res.json();

        setProducts(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Men's Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain"
            />

            <h2 className="font-semibold mt-4">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;