import logo from "../assets/images/image.png";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const enquiry = () => {
    console.log("Enquiry button clicked");
  }
  const closeMenu =()=>{setMenuOpen(false)}

  return (
    <section className="sticky top-0 z-50 px-6 py-4 bg-black text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SM Enterprises Logo"className="w-12 h-12 rounded-full object-cover"/>
          <h1 className="text-xl font-bold text-green-400">SM Enterprises</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            onClick={enquiry}
            className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
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