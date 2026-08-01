export const Services = () => {
  return (
    <section
      id="services"
      className="px-6 md:px-16 py-20 bg-[#CFDBD5]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-[#153243] font-semibold uppercase tracking-wider">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
          Wooden Pallets, Crates & Boxes Built To Your Requirements
        </h2>
        <p className="text-slate-600 mt-4">
          We provide durable wooden packaging products designed
          for transportation, storage, export shipments and
          industrial applications.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        <div className="bg-[#F4F3EE] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"alt="Wooden Pallets"className="w-full h-56 object-cover"/>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Wooden Pallets
          </h3>
          <p className="text-slate-600 mb-6">
            Strong and reliable wooden pallets suitable for
            warehousing, logistics, transportation and material
            handling operations.
          </p>
  <button className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">
    Order Custom Pallets
  </button>

        </div>

        <div className="bg-[#F4F3EE] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

         <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Wooden Crates" className="w-full h-56 object-cover"/>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Wooden Crates
          </h3>
          <p className="text-slate-600 mb-6">
            Durable export and industrial crates designed to
            protect valuable goods during handling,
            transportation and shipment.
          </p>

  <button className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">
    Order Custom Crates
  </button>

        </div>
        <div className="bg-[#F4F3EE] rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition">

          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Wooden Pallets" className="w-full h-56 object-cover"/>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Wooden Boxes
          </h3>
          <p className="text-slate-600 mb-6">
            Custom wooden boxes manufactured according to
            storage, packaging and shipping requirements for
            different industries.
          </p>
  <button className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">
    Order Custom Boxes
  </button>
        </div>
      </div>
    </section>
  );
};
export default Services;