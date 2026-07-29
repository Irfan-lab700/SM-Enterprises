export const Home = () => {
  return (
    <section
      id="home"className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-12 bg-[#E0DDCF]">
      <div className="max-w-xl space-y-6">
        <span className="text-[#463F3A] font-semibold uppercase tracking-wider">
          Trusted Wooden Pallet Manufacturer
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#8A817C] leading-tight">
          Premium Wooden Pallets
          <span className="text-slate-700"> Solutions</span>
        </h1>
        <p className="text-lg text-[#8A817C]">
          We manufacture high-quality wooden pallets, crates, and packaging boxes for logistics, warehousing, export shipments, and industrial applications. Custom sizes, bulk orders, and reliable delivery solutions tailored to your business needs.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#8A817C] text-white px-6 py-3 rounded-lg hover:bg-[#003448] transition">
            Get a Quote
          </button>
          <button className="border border-slate-700 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-700 hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        Home Image
      </div>

    </section>
  );
};

export default Home;