const Products = () => {
  const products = [
    "Wooden Pallets",
    "Export Crates",
    "Packaging Boxes",
    "Industrial Pallets",
    "Custom Wooden Solutions",
    "Heavy Duty Pallets",
    "Wooden Frames",
  ];

  return (
    <section
      id="products"className="px-6 md:px-16 py-20 bg-[#E8EDDF]">
      <div className="text-center mb-14">
        <p className="text-[#153243] font-semibold uppercase tracking-[0.18em]">
          Product Gallery
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2D232E] mt-3">
          Products We Manufacture
        </h2>
        <p className="text-[#463F3A] mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore our range of wooden pallets, crates and packaging solutions
          designed for logistics, export and industrial requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        {products.map((product, index) => (
          <div key={index} className={`relative overflow-hidden  bg-[#E7DFD3]
            group
            ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            ${index === 5 ? "md:row-span-2" : ""}
            `}
          >
            <img src={`https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop`}
              alt={product}
              className=" w-full h-full object-cover transition duration-500 group-hover:scale-105"/>

            <div className="absolute inset-0bg-gradient-to-tfrom-[#153243]/70via-transparentopacity-80"/>
            <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold"> {product}</h3>

          </div>
        ))}

        <div className=" bg-[#153243] p-8 flex flex-col justify-center gap-4">
          <p className="text-[#CFDBD5] font-semibold uppercase tracking-wider">
            Custom Orders
          </p>
          <h3 className="text-2xl font-bold text-white">
            Need a Custom Size?
          </h3>
          <p className="text-[#CFDBD5] text-sm">
            Share your requirements and we will create a solution
            according to your needs.
          </p>
          <button
            className="mt-2 bg-[#CFDBD5] text-[#153243] py-3 rounded-xl font-mediumhover:bg-white transition">
            Send Requirements
          </button>

        </div>

      </div>

    </section>
  );
};

export default Products;