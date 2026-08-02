export const Contact = () => {
  return (
    <section id="contact"className="px-6 md:px-16 py-20 bg-[#E8EDDF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#153243] font-semibold uppercase tracking-[0.18em]">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#153243] mt-3">
            Need Wooden Packaging Solutions?
          </h2>
          <p className="mt-4 text-[#463F3A] max-w-xl mx-auto">
            Share your requirement and our team will contact you with the
            right solution.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#153243]">
              Contact Our Team
            </h3>
            <p className="mt-4 text-[#463F3A] leading-relaxed max-w-md">
              Whether you need standard pallets or custom wooden packaging,
              we provide reliable solutions for industrial and business needs.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#153243] flex items-center justify-center text-[#CFDBD5]">
                  ☎
                </div>
                <div>
                  <p className="text-sm text-[#463F3A]">
                    Call Us
                  </p>
                  <p className="font-semibold text-[#153243]">
                    +91 80537 60426
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#153243] flex items-center justify-center text-[#CFDBD5]">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-[#463F3A]">
                    Email
                  </p>
                  <p className="font-semibold text-[#153243]">
                   savejali497@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#153243] flex items-center justify-center text-[#CFDBD5]">
                  📍
                </div>
                <div>
                  <p className="text-sm text-[#463F3A]">
                    Location
                  </p>
                  <p className="font-semibold text-[#153243]">
                    Your City, Haryana, India
                  </p>
                </div>
              </div>
              <a href="#" className=" inline-flex mt-4 px-5 py-3 rounded-xl bg-[#153243]  text-[#CFDBD5] font-medium hover:bg-[#1D4154] transition">
                View Location →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#153243]">
              Quick Enquiry
            </h3>
            <p className="text-[#463F3A] mt-2 mb-6">
              Takes less than a minute
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-[#CFDBD5] outline-none focus:border-[#153243]"/>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-[#CFDBD5] outline-nonefocus:border-[#153243]"/>
            
              <select
                className="w-full px-4 py-3 rounded-xl border border-[#CFDBD5] outline-none focus:border-[#153243]">
                <option>Select Requirement</option>
                <option>Wooden Pallets</option>
                <option>Wooden Crates</option>
                <option>Custom Packaging</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us your requirement..."
                className="w-full px-4 py-3 rounded-xl border border-[#CFDBD5] outline-none focus:border-[#153243] resize-none"/>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#153243] text-white font-semibold hover:bg-[#1D4154] transition">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;