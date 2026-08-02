import { FaWhatsapp } from "react-icons/fa";

export const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-16 py-12 bg-[#CFDBD5] overflow-hidden">
      <div className="absolute inset-0 md:hidden">
        <img src="https://images.unsplash.com/photo-1778830355021-7ce744ea3755?w=1600&auto=format&fit=crop&q=80" alt="Wooden pallets" className="w-full h-full object-cover opacity-90"/>
        <div className="absolute inset-0 bg-[#CFDBD5]/85" />
      </div>

      <div className="absolute right-10 top-0 hidden md:block w-[40%] h-full">
        <img src="https://images.unsplash.com/photo-1778830355021-7ce744ea3755?w=1600&auto=format&fit=crop&q=80" alt="Wooden pallets" className="w-full h-full object-cover rounded-l-3xl"/>
      </div>

      <div className="absolute right-0 top-0 hidden md:block w-[50%] h-full bg-black/10 rounded-l-3xl" />
      <div className="relative z-10 max-w-7xl">
        <span className="font-semibold uppercase tracking-wider text-[#463F3A]">
          Trusted Wooden Pallet Manufacturer
        </span>

        <div className="mt-6 p-0 md:border md:border-[#CFDBD5]/25 md:bg-[#153243]/90 md:p-8 md:shadow-2xl md:backdrop-blur-md md:opacity-90">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.45)]">
            Premium Wooden Pallets
            <span className="text-[#153243] md:text-[#CFDBD5]"> Solutions</span>
          </h1>
        </div>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#463F3A] text-justify">
          We manufacture high-quality wooden pallets, crates, and packaging
          boxes for logistics, warehousing, export shipments, and industrial
          applications. Custom sizes, bulk orders, and reliable delivery
          solutions tailored to your business needs.<a href="/products" className="font-semibold text-[#153243] hover:text-[#FF6A89] transition">  Explore»</a>
        </p>

       <a
       href="https://wa.me/919034816104?text=Hello%20SM%20Enterprises,%20I%20am%20interested%20in%20your%20wooden%20pallets."
       target="_blank"
       rel="noopener noreferrer"
       className="mt-6 flex w-fit items-center gap-2 rounded-full border border-[#CFDBD5]/70 bg-[#153243] px-6 py-3 font-medium text-[#CFDBD5] transition-all duration-300 hover:border-[#153243] hover:bg-[#CFDBD5] hover:text-[#153243]">
       <FaWhatsapp size={20} />
       WhatsApp Us
       </a>
       
      </div>
    </section>
  );
};

export default Home;