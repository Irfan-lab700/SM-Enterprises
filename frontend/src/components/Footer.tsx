const Footer = () => {
  return (
    <footer className="bg-[#153243] text-white px-6 md:px-16 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">


        {/* Company */}
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




        {/* Quick Links */}
        <div>

          <h4 className="text-lg font-semibold mb-5">
            Quick Links
          </h4>


          <div className="flex flex-col gap-3 text-[#CFDBD5]/80">

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





        {/* Contact */}
        <div>

          <h4 className="text-lg font-semibold mb-5">
            Contact Information
          </h4>


          <div className="space-y-4 text-[#CFDBD5]/80">


            <p>
              📞 +91 XXXXX XXXXX
            </p>


            <p>
              ✉ info@smenterprises.com
            </p>


            <p className="leading-relaxed">
              📍 Full Address Here,
              <br />
              Your Area,
              <br />
              City, Haryana, India
            </p>


          </div>


        </div>


      </div>




      {/* Bottom */}
      <div className="max-w-7xl mx-auto">

        <div className="border-t border-white/20 my-8"></div>


        <div className="
          flex 
          flex-col 
          md:flex-row 
          justify-between 
          items-center 
          gap-4
        ">


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