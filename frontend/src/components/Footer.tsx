const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            SM Enterprises
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Manufacturer of high-quality wooden pallets,
            crates and boxes for logistics, warehousing,
            transportation and industrial applications.
          </p>
        </div>
        <div>

          <h4 className="text-xl font-semibold mb-4">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3 text-slate-400">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#products" className="hover:text-white transition">
              Products
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </div>
        <div>

          <h4 className="text-xl font-semibold mb-4">
            Contact Information
          </h4>

          <div className="space-y-3 text-slate-400">

            <p>📞 +91 XXXXX XXXXX</p>

            <p>✉️ info@smenterprises.com</p>

            <p>📍 Your City, State, India</p>

          </div>

        </div>

      </div>
      <div className="border-t border-slate-800 my-8"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 SM Enterprises. All Rights Reserved.
        </p>
       <p className="text-slate-500 text-sm">
  Developed by{" "}
  <a
    href="https://personal-portfolio-bay-one.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Irfan Khan
  </a>
</p>

      </div>

    </footer>
  );
};

export default Footer;