import logo from "../assets/images/image.png";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const enquiry = () => {
    console.log("Enquiry button clicked");
  }
  const closeMenu =()=>{setMenuOpen(false)}

  return (
    <section className="sticky top-0 z-50 px-6 py-4 bg-[#153243] text-[#dee2ef]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SM Enterprises Logo"className="w-12 h-12 rounded-full object-cover"/>
          <h1 className="text-xl font-bold text-[#dee2ef]">SM Enterprises</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 font-medium text-lg">
            <a href="#home" className = "font-700 hover:text-[#62929E] hover:text-xl">Home</a>
            <a href="#about" className = "font-700 hover:text-[#62929E] hover:text-xl">About</a>
            <a href="#services" className = "font-700 hover:text-[#62929E] hover:text-xl">Services</a>
            <a href="#products" className = "font-700 hover:text-[#62929E] hover:text-xl">Products</a>
            <a href="#contact" className = "font-700 hover:text-[#62929E] hover:text-xl">Contact</a>
          </div>
          <button 
            onClick={enquiry}
            className="border border-[#CFDBD5]/70 text-[#CFDBD5] px-4 py-2 rounded-full text-sm font-medium hover:border-[#CFDBD5] hover:bg-[#CFDBD5] hover:text-[#153243] hover:shadow-md transition-all duration-300">
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
          <a href="#home" onClick= {closeMenu}>Home</a>
          <a href="#about"onClick={closeMenu}>About</a>
          <a href="#services" onClick= {closeMenu}>Services</a>
          <a href="#products"onClick={closeMenu}>Products</a>
          <a href="#contact" onClick= {closeMenu}>Contact</a>
        </div>
      )}

    </section>
  )
}

export default Navbar;