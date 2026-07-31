export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-12 bg-[#CFDBD5] overflow-hidden">
      <div className="absolute right-0 top-10 w-[55%] h-full">
        <img src="https://images.unsplash.com/photo-1778830355021-7ce744ea3755?w=1600&auto=format&fit=crop&q=80"alt="Wooden pallets"className="w-full h-full object-cover rounded-l-3xl"/>
      </div>
      <div className="absolute right-0 top-0 w-[55%] h-full bg-black/10 rounded-l-3xl"></div>
      <div className="relative z-10 max-w-6xl">
        <span className="text-[#463F3A] font-semibold uppercase tracking-wider">
          Trusted Wooden Pallet Manufacturer
        </span>
        <div className="mt-6 bg-[#153243]/90 backdrop-blur-md border border-[#CFDBD5]/25 shadow-2xl rounded-2xl p-6 md:p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Premium Wooden Pallets
            <span className="text-[#CFDBD5]"> Solutions</span>
          </h1>
        </div>
        <p className="mt-6 text-lg text-[#463F3A] leading-relaxed">
          We manufacture high-quality wooden pallets, crates, and packaging
          boxes for logistics, warehousing, export shipments, and industrial
          applications. Custom sizes, bulk orders, and reliable delivery
          solutions tailored to your business needs.
        </p>
      </div>
    </section>
  );
};
export default Home;