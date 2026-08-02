import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Heavy Duty Wooden Pallet",
      category: "Pallets",
      sizes: ["1200 x 1000 mm", "1200 x 1200 mm"],
      material: "Pine Wood",
      colors: ["Natural Brown"],
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      id: 2,
      name: "Export Wooden Pallet",
      category: "Pallets",
      sizes: ["1200 x 1000 mm"],
      material: "Hard Wood",
      colors: ["Brown Finish"],
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      id: 3,
      name: "Industrial Wooden Crate",
      category: "Crates",
      sizes: ["Custom Size"],
      material: "Pine & Hardwood",
      colors: ["Natural Wood"],
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      id: 4,
      name: "Export Packaging Crate",
      category: "Crates",
      sizes: ["As Per Requirement"],
      material: "Premium Wood",
      colors: ["Natural Brown"],
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
  ];

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("All");

  const filteredProducts = products.filter((product)=>(
    (product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.material.toLowerCase().includes(search.toLowerCase()) ||
  product.sizes.some((size) => size.toLowerCase().includes(search.toLowerCase()))||
product.colors.some((color) => color.toLowerCase().includes(search.toLowerCase())))
    &&
    (category==="All" || product.category===category)
  ));


  return (
    <section id="products" className="px-6 md:px-16 py-20 bg-[#CFDBD5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#153243] mt-3">
            Our Wooden Products
          </h2>
          <p className="text-[#463F3A] mt-4 max-w-3xl mx-auto">
            Explore our range of wooden pallets and crates designed for
            logistics, export and industrial requirements.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search products, material..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className=" w-full px-5 py-3 rounded-full bg-white border border-[#153243]/20 outline-none focus:border-[#153243]"/>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {
            ["All","Pallets","Crates"].map((item)=>(
              <button
                key={item}
                onClick={()=>setCategory(item)}
                className={`
                px-6 py-2 rounded-full font-medium transition
                ${category===item
                ?"bg-[#153243] text-white"
                :"bg-white text-[#153243] hover:bg-[#153243] hover:text-white"}
                `}
              >
                {item}
              </button>
            ))
          }
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {
            filteredProducts.length > 0 ?
            filteredProducts.map((product)=>(
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
                <img src={product.image}alt={product.name} className="w-full h-56 object-cover"/>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#153243]">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#463F3A]">
                    Category:
                    <span className="font-semibold">
                     {" "}{product.category}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-[#463F3A]">
                    Material:
                    <span className="font-semibold">
                     {" "}{product.material}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-[#463F3A]">
                    Sizes:
                    <br/>
                    {product.sizes.map((size)=>(
                      <span key={size} className="block">
                        • {size}
                      </span>
                    ))}
                  </p>
                  <p className="mt-2 text-sm text-[#463F3A]">
                    Color:
                    <span className="font-semibold">
                     {" "}{product.colors.join(", ")}
                    </span>
                  </p>

                  <a
                    href={`https://wa.me/919034816104?text=Hello SM Enterprises, I am interested in ${product.name} with size ${product.sizes.join(", ")} and material ${product.material} with color ${product.colors.join(", ")}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 bg-[#153243] text-[#CFDBD5] py-3 rounded-xl hover:bg-[#1D4154] transition">
                    <FaWhatsapp size={20}/>
                    Enquire Now
                  </a>
                </div>
              </div>
            ))
            :
            <div className="md:col-span-3 text-center py-10 text-[#153243] font-semibold">
              No products found
            </div>
          }
        </div>
      </div>

    </section>
  );
};

export default Products;
