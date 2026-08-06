const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Product Page
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Welcome to the Product Page 🚀
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
          Explore Products
        </button>
      </div>
    </main>
  );
};

export default Page;