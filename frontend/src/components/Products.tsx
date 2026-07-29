const Products = () => {
  return (
    <section
      id="products"
      className="px-6 md:px-16 py-20 bg-white">
      <div className="text-center mb-14">
        <p className="text-amber-600 font-semibold uppercase tracking-wider">
          Product Gallery
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
          Our Recent Products
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Explore some of our wooden pallets, crates and custom
          packaging solutions manufactured for different industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 1
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 2
        </div>
        
        <div className="overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 3
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 4
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 5
        </div>

        <div className="md:row-span-2 overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 6
        </div>

        <div className="overflow-hidden rounded-3xl bg-slate-200 cursor-pointer hover:scale-[1.02] transition duration-300 flex items-center justify-center">
          Product Image 7
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-center gap-4">

          <p className="text-amber-500 font-semibold uppercase tracking-wider">
            Custom Orders
          </p>

          <h3 className="text-2xl font-bold text-white">
            Need a Custom Size?
          </h3>
          <button className="mt-2 bg-amber-600 text-white py-3 rounded-xl hover:bg-amber-700 transition">
            Send Requirements
          </button>

        </div>

      </div>
    </section>
  );
};

export default Products;