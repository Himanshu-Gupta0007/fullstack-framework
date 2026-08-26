type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  number: number;
};

const Page = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's%20clothing",
    {
      cache: "force-cache",
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 px-5 py-10 md:px-10 lg:px-16">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          New Collection
        </p>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Men&apos;s Products
            </h1>

            <p className="mt-3 max-w-xl text-gray-500">
              Discover our latest collection of stylish and comfortable
              essentials for men.
            </p>
          </div>

          <div className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-200">
            {products.length} Products
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-50 p-6">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                NEW
              </span>

              <button
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-md transition hover:bg-red-50 hover:text-red-500"
                aria-label="Add to wishlist"
              >
                ♡
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                Men&apos;s Fashion
              </p>

              <h2 className="line-clamp-2 min-h-[56px] text-lg font-bold leading-7 text-gray-900">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <div className="text-sm tracking-wide text-yellow-400">
                  ★★★★★
                </div>

                <span className="text-xs text-gray-400">
                  (4.8)
                </span>
              </div>

              {/* Price + Button */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Price</p>
                  <p className="text-2xl font-extrabold text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <button className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;