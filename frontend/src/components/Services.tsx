export const Services = () => {
  const categories = [
    "Wooden Pallets",
    "Export Crates",
    "Packaging Boxes",
    "Industrial Pallets",
    "Custom Wooden Solutions",
    "Heavy Duty Pallets",
    "Wooden Frames",
  ];

  const services = [
    {
      title: "Wooden Pallets",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      desc: "Strong and reliable wooden pallets suitable for warehousing, logistics, transportation and material handling operations."
    },
    {
      title: "Wooden Crates",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      desc: "Durable export and industrial crates designed to protect valuable goods during handling, transportation and shipment."
    },
    {
      title: "Wooden Boxes",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      desc: "Custom wooden boxes manufactured according to storage, packaging and shipping requirements."
    }
  ];

  return (
    <section id="services" className="px-6 md:px-16 py-20 bg-[#CFDBD5]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-[#153243] font-semibold uppercase tracking-wider">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 leading-tight">
          Wooden Pallets, Crates and Boxes Built To Your Requirements
        </h2>
        <p className="text-slate-600 mt-4">
          We provide durable wooden packaging products designed for
          transportation, storage, export shipments and industrial applications.
        </p>
        <a
          href="/products"
          className="inline-flex mt-6 items-center gap-2 rounded-full bg-[#153243] px-7 py-3 font-medium text-[#CFDBD5] hover:bg-[#1D4154] transition"
        >
          Explore Full Product Range →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        {categories.map((item,index)=>(
          <div
            key={index}
            className={`relative overflow-hidden group ${
              index===0 ? "md:col-span-2 md:row-span-2" : ""
            } ${index===5 ? "md:row-span-2" : ""}`}
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
              alt={item}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#153243]/80 via-transparent"/>
            <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
              {item}
            </h3>
          </div>
        ))}

        <div className="relative overflow-hidden group">

          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
            alt="Custom Wooden Solutions"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#153243]/75"/>
          <div className="absolute inset-0 flex flex-col justify-center p-8">
            <p className="text-[#CFDBD5] font-semibold uppercase tracking-wider">
              Custom Orders
            </p>
            <h3 className="text-2xl font-bold text-white mt-3">
              Need Custom Size?
            </h3>
            <p className="text-[#CFDBD5] text-sm mt-3">
              Share your requirements and we will create a solution
              according to your needs.
            </p>
            <a
              href="#contact"
              className="mt-5 w-fit bg-[#CFDBD5] text-[#153243] px-5 py-3 rounded-xl font-medium hover:bg-white transition"
            >
              Send Requirements →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">

        {services.map((service,index)=>(

          <div
            key={index}
            className="bg-[#F4F3EE] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover rounded-2xl mb-6"
            />
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              {service.title}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {service.desc}
            </p>
            <a
              href="#contact"
              className="block text-center w-full bg-[#153243] text-[#CFDBD5] py-3 rounded-xl hover:bg-[#1D4154] transition"
            >
              Order →
            </a>
          </div>

        ))}

      </div>


    </section>
  );
};

export default Services;