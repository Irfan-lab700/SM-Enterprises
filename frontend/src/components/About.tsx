const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 bg-white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <p className="text-amber-600 font-semibold uppercase tracking-wider mb-2">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted Wooden Packaging Solutions
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            SM Enterprises is a manufacturer of wooden pallets,
            wooden crates and wooden boxes for logistics,
            warehousing, transportation and industrial applications.
          </p>

          <p className="text-slate-600 mb-8 leading-relaxed">
            We specialise in durable and custom-built wooden
            packaging solutions designed to meet storage,
            handling and shipping requirements for businesses
            of all sizes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">

            <div className="p-4 rounded-lg bg-slate-100">
              <h3 className="text-2xl font-bold text-slate-900">
                X+
              </h3>
              <p className="text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-100">
              <h3 className="text-2xl font-bold text-slate-900">
                Location
              </h3>
              <p className="text-slate-600">
                City, State
              </p>
            </div>

          </div>

          

        </div>

        {/* Right Image */}
        {/* Right Side Images */}
<div className="relative h-[500px] w-full">

  {/* Image 1 */}
  <div className="absolute top-0 left-8 w-52 h-52 overflow-hidden rounded-full shadow-xl">
    <img
      src=""
      alt="Wooden Pallets"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 2 */}
  <div className="absolute top-32 right-0 w-64 h-64 overflow-hidden rounded-full shadow-xl">
    <img
      src=""
      alt="Wooden Crates"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 3 */}
  <div className="absolute bottom-0 left-20 w-44 h-44 overflow-hidden rounded-full shadow-xl">
    <img
      src=""
      alt="Wooden Boxes"
      className="w-full h-full object-cover"
    />
  </div>

</div>

      </div>
    </section>
  );
};

export default About;
