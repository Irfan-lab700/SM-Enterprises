import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goHomeSection = (section: string) => {
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    } else {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Services", section: "services" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#153243] px-6 py-4 text-[#dee2ef]">
      <div className="flex items-center justify-between">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="SM Enterprises Logo"
            className="h-12 w-12 rounded-full object-cover"
          />

          <h1 className="text-xl font-bold">
            SM Enterprises
          </h1>
        </Link>

        <div className="flex items-center gap-6">

          <div className="hidden gap-6 text-lg font-medium md:flex">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => goHomeSection(item.section)}
                className="cursor-pointer transition hover:text-[#62929E]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => goHomeSection("contact")}
            className="rounded-full border border-[#CFDBD5]/70 px-4 py-2 text-sm font-medium text-[#CFDBD5] transition-all duration-300 hover:border-[#CFDBD5] hover:bg-[#CFDBD5] hover:text-[#153243] hover:shadow-md"
          >
            Enquiry
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-5 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => goHomeSection(item.section)}
              className="text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;