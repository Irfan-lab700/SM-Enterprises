export const Contact = () => {
  return (
    <section id="contact"className="px-6 md:px-16 py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold uppercase tracking-wider">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Looking for wooden pallets, crates, boxes or custom
            packaging solutions? Get in touch with our team today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-amber-500 font-semibold">
                  Phone
                </p>
                <p className="text-slate-300">
                  +91 XXXXX XXXXX
                </p>
              </div>
              <div>
                <p className="text-amber-500 font-semibold">
                  Email
                </p>
                <p className="text-slate-300">
                  info@smenterprises.com
                </p>
              </div>
              <div>
                <p className="text-amber-500 font-semibold">
                  Address
                </p>
                <p className="text-slate-300">
                  Your City, State, India
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                  WhatsApp
                </button>
                <button className="bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition">
                  Call Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send an Enquiry
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500"
              />
              <textarea
                rows={5}
                placeholder="Tell us about your requirements..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition"
              >
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