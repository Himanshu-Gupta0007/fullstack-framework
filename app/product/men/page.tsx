type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Page = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing",
    {
      cache: "force-cache",
    }
  );

  const products: Product[] = await res.json();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Men's Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} />
            <h2>{product.title}</h2>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default Page;