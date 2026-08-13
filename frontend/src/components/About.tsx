const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 py-20 bg-[#E8EDDF]">

      <div className="mb-12">
        <p className="text-[#153243] font-semibold uppercase tracking-wider mb-2">
          About Us
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 max-w-7xl">
           Trusted Manufacturer Of Wooden Pallets and Crates 🖤
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-slate-600 mb-5 leading-6 text-justify">
            SM Enterprises, established in <b>2025</b> by <b>Mr. Savej</b>, is a manufacturer
            of wooden pallets, wooden crates and wooden boxes for logistics,
            warehousing, transportation and industrial applications. We focus
            on delivering durable, customized and cost-effective wooden
            packaging solutions tailored to client requirements.
          </p>

          <p className="border-l-4 border-[#153243] pl-4 italic text-slate-600 mb-8">
            Every pallet, crate and wooden box is manufactured according to
            the client's specific requirements.
          </p>

         <div className="rounded-xl bg-white p-6 shadow-md">
  <h3 className="text-2xl font-bold text-[#153243] mb-2">
    Location
  </h3>

  <a
    href="https://maps.app.goo.gl/iDiZcGWEhtULwgEi7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 leading-relaxed hover:text-[#153243] transition"
  >
    Bajidpur Bus Stand, Saha to Shahbad Road,
    Near Navdeep Fashion Point, Ambala, Haryana
  </a>

  <p className="mt-3 text-sm font-medium text-[#153243]">
    <a
    href="https://maps.app.goo.gl/iDiZcGWEhtULwgEi7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 leading-relaxed hover:text-[#153243] transition"
  >
    View on Google maps
  </a>
  </p>
</div>
        </div>

        <div className="relative h-[520px] w-full">

  <div className="absolute top-0 left-8 w-52 h-52 overflow-hidden rounded-full shadow-xl border-4 border-white">
    <img
      src="https://images.unsplash.com/photo-1626459851797-3af317c8f61a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGVuJTIwY3JhdGVzfGVufDB8fDB8fHww"
      alt="Wooden Pallets"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute top-28 right-4 w-64 h-64 overflow-hidden rounded-full shadow-xl border-4 border-white">
    <img
      src="https://media.istockphoto.com/id/1194596989/photo/stack-of-wooden-pallets-at-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZES1vAycbYDo8_DoahFy6PpJ4Twg1CDN7uaXXd8fNHc="
      alt="Wooden Crates"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute bottom-4 left-24 w-44 h-44 overflow-hidden rounded-full shadow-xl border-4 border-white">
    <img
      src="https://images.unsplash.com/photo-1738965742812-bc1f957c01e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbGxldHN8ZW58MHx8MHx8fDA%3D"
      alt="Wooden Packaging Boxes"
      className="w-full h-full object-cover"
    />
  </div>

</div>
      </div>

    </section>
  );
};

export default About;