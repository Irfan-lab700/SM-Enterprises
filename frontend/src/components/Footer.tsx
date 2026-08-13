import {useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goHomeSection = (section: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#153243] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-2xl font-bold mb-4">
            SM Enterprises
          </h3>

          <p className="text-[#CFDBD5]/80 leading-relaxed max-w-sm">
            Manufacturer of high-quality wooden pallets, crates and packaging
            solutions for logistics, warehousing, transportation and industrial
            applications.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-5">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3 text-[#CFDBD5]/80">
            <button
              onClick={() => goHomeSection("home")}
              className="text-left hover:text-white transition"
            >
              Home
            </button>

            <button
              onClick={() => goHomeSection("about")}
              className="text-left hover:text-white transition"
            >
              About
            </button>

            <button
              onClick={() => goHomeSection("services")}
              className="text-left hover:text-white transition"
            >
              Services
            </button>

            <button
              onClick={() => goHomeSection("contact")}
              className="text-left hover:text-white transition"
            >
              Contact
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-5">
            Contact Information
          </h4>

          <div className="space-y-4 text-[#CFDBD5]/80">

            <a
              href="tel:+918053760426"
              className="block hover:text-white transition"
            >
              📞 +91 80537 60426
            </a>

            <a
              href="mailto:savejali497@gmail.com"
              className="block hover:text-white transition break-all"
            >
              ✉ savejali497@gmail.com
            </a>

            <a
              href="https://wa.me/918053760426"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition"
            >
              💬 WhatsApp Us
            </a>

            <a
              href="https://maps.app.goo.gl/iDiZcGWEhtULwgEi7"
              target="_blank"
              rel="noopener noreferrer"
              className="block leading-relaxed hover:text-white transition"
            >
              📍 Ambala, Haryana, India
              <br />
              View on Google Maps →
            </a>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/20 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#CFDBD5]/60 text-sm text-center">
            © 2026 SM Enterprises. All Rights Reserved.
          </p>

          <p className="text-[#CFDBD5]/60 text-sm">
            Developed by{" "}
            <a
              href="https://personal-portfolio-bay-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CFDBD5] hover:text-white transition"
            >
              Irfan Khan
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;