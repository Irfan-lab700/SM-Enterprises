import logo from "../assets/images/image.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const goHomeSection = (section: string) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    setMenuOpen(false);
  };

  const enquiry = () => {
    goHomeSection("contact");
  };

  return (
    <section className="sticky top-0 z-50 px-6 py-4 bg-[#153243] text-[#dee2ef]">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img src={logo} alt="SM Enterprises Logo" className="w-12 h-12 rounded-full object-cover"/>
          <h1 className="text-xl font-bold">SM Enterprises</h1>
        </div>

        <div className="flex items-center gap-6">

          <div className="hidden md:flex gap-6 font-medium text-lg">
            <a onClick={() => goHomeSection("home")} className="cursor-pointer hover:text-[#62929E] hover:text-xl">
              Home
            </a>

            <a onClick={() => goHomeSection("about")} className="cursor-pointer hover:text-[#62929E] hover:text-xl">
              About
            </a>

            <a onClick={() => goHomeSection("services")} className="cursor-pointer hover:text-[#62929E] hover:text-xl">
              Services
            </a>

            <a href="/products" className="hover:text-[#62929E] hover:text-xl">
              Products
            </a>

            <a onClick={() => goHomeSection("contact")} className="cursor-pointer hover:text-[#62929E] hover:text-xl">
              Contact
            </a>
          </div>


          <button
            onClick={enquiry}
            className="border border-[#CFDBD5]/70 text-[#CFDBD5] px-4 py-2 rounded-full text-sm font-medium hover:border-[#CFDBD5] hover:bg-[#CFDBD5] hover:text-[#153243] hover:shadow-md transition-all duration-300"
          >
            Enquiry
          </button>


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

      </div>


      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-5">

          <a onClick={() => goHomeSection("home")} className="cursor-pointer">
            Home
          </a>

          <a onClick={() => goHomeSection("about")} className="cursor-pointer">
            About
          </a>

          <a onClick={() => goHomeSection("services")} className="cursor-pointer">
            Services
          </a>

          <a href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </a>

          <a onClick={() => goHomeSection("contact")} className="cursor-pointer">
            Contact
          </a>

        </div>
      )}

    </section>
  );
};

export default Navbar;