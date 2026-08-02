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
          <div className="mb-6 inline-flex items-center rounded-full bg-[#153243] px-4 py-2 text-sm font-medium text-white">
            ✓ ISPM-15 Certified Manufacturer
          </div>

          <p className="text-slate-600 mb-5 leading-6 text-justify">
            SM Enterprises, established in <b>2026</b> by <b>Mr. Savej</b>, is a manufacturer
            of wooden pallets, wooden crates and wooden boxes for logistics,
            warehousing, transportation and industrial applications. We focus
            on delivering durable, customized and cost-effective wooden
            packaging solutions tailored to client requirements.
          </p>

          <p className="border-l-4 border-[#153243] pl-4 italic text-slate-600 mb-8">
            Every pallet, crate and wooden box is manufactured according to
            the client's specific requirements.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-slate-100 p-6 space-y-5">
              <div>
                <h3 className="text-3xl font-bold text-[#153243]">5+</h3>
                <p className="text-slate-600">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#153243]">100+</h3>
                <p className="text-slate-600">Satisfied Clients</p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#153243] mb-3">
                Location
              </h3>
              <p className="text-slate-600 leading-7">
                Bajidpur Bus Stand, Saha to Shahbad Road, Near Navdeep Fashion Point, Ambala, Haryana
              </p>
            </div>

          </div>
        </div>

        <div className="relative h-[520px] w-full">

          <div className="absolute top-0 left-8 w-52 h-52 overflow-hidden rounded-full shadow-xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Wooden Pallets" className="w-full h-full object-cover"/>
          </div>

          <div className="absolute top-28 right-4 w-64 h-64 overflow-hidden rounded-full shadow-xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Wooden Crates" className="w-full h-full object-cover"/>
          </div>

          <div className="absolute bottom-4 left-24 w-44 h-44 overflow-hidden rounded-full shadow-xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Wooden Boxes" className="w-full h-full object-cover"/>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;