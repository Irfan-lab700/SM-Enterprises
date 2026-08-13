export const Services = () => {
  const services = [
    {
      title: "Wooden Pallets",
      img: "https://media.istockphoto.com/id/1194596989/photo/stack-of-wooden-pallets-at-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZES1vAycbYDo8_DoahFy6PpJ4Twg1CDN7uaXXd8fNHc=",
      desc: "Strong and reliable wooden pallets suitable for warehousing, logistics, transportation and material handling operations.",
    },
    {
      title: "Wooden Crates",
      img: "https://images.unsplash.com/photo-1568447280412-b3f8f2bdbbb6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29vZGVuJTIwY3JhdGVzJTIwbWFudWZhY3R1cmV8ZW58MHx8MHx8fDA%3D",
      desc: "Durable export and industrial crates designed to protect valuable goods during handling, transportation and shipment.",
    },
    {
      title: "Wooden Boxes",
      img: "https://images.unsplash.com/photo-1626459851797-3af317c8f61a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGVuJTIwYm94ZXN8ZW58MHx8MHx8fDA%3D",
      desc: "Custom wooden boxes manufactured according to storage, packaging and shipping requirements.",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-16 py-20 bg-[#CFDBD5]"
    >
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
          href="#contact"
          className="inline-flex mt-6 items-center gap-2 rounded-full bg-[#153243] px-7 py-3 font-medium text-[#CFDBD5] hover:bg-[#1D4154] transition"
        >
          Explore Full Product Range →
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
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