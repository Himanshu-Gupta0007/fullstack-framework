type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
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
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        Men's Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-contain"
            />

            <h2 className="font-semibold mt-4 font-lg leading-6 text-gray-800 bg-gray-100 p-2 rounded">
              {product.title}
            </h2>

            <p>j</p>

            <p className="text-lg font-bold mt-2">
              ${product.price}
              
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;