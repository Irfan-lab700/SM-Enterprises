import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    requirement: "",
  });

  const sendToWhatsApp = () => {
    const newErrors = {
      name: "",
      phone: "",
      requirement: "",
    };

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!requirement) {
      newErrors.requirement = "Please select a requirement.";
    }

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.phone ||
      newErrors.requirement
    ) {
      return;
    }

    const whatsappMessage = `
Hello SM Enterprises,

I would like to enquire about your wooden packaging products.

Name: ${name.trim()}
Phone: ${phone.trim()}
Requirement: ${requirement}

Details:
${message.trim() || "No additional details provided."}
    `.trim();

    const whatsappURL =
      `https://wa.me/918053760426?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-20 bg-[#E8EDDF]"
    >
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
              <a
                href="tel:+918053760426"
                className="flex items-center gap-4"
              >
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
              </a>
              <a
                href="mailto:savejali497@gmail.com"
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#153243] flex items-center justify-center text-[#CFDBD5]">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-[#463F3A]">
                    Email
                  </p>

                  <p className="font-semibold text-[#153243] break-all">
                    savejali497@gmail.com
                  </p>
                </div>
              </a>

              <a
  href="https://maps.app.goo.gl/iDiZcGWEhtULwgEi7"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 group"
>
  <div className="w-12 h-12 rounded-full bg-[#153243] flex items-center justify-center text-[#CFDBD5]">
    📍
  </div>

  <div>
    <p className="text-sm text-[#463F3A]">
      Location
    </p>

    <p className="font-semibold text-[#153243] group-hover:underline">
      Ambala, Haryana, India
    </p>
  </div>
</a>

            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-[#153243]">
              Quick Enquiry
            </h3>

            <p className="text-[#463F3A] mt-2 mb-6">
              Fill in your details and send your enquiry directly on WhatsApp.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);

                    if (errors.name) {
                      setErrors((prev) => ({
                        ...prev,
                        name: "",
                      }));
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#CFDBD5] focus:border-[#153243]"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);

                    if (errors.phone) {
                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#CFDBD5] focus:border-[#153243]"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <select
                  value={requirement}
                  onChange={(e) => {
                    setRequirement(e.target.value);

                    if (errors.requirement) {
                      setErrors((prev) => ({
                        ...prev,
                        requirement: "",
                      }));
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border outline-none bg-white transition ${
                    errors.requirement
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#CFDBD5] focus:border-[#153243]"
                  }`}
                >
                  <option value="">
                    Select Requirement
                  </option>

                  <option value="Wooden Pallets">
                    Wooden Pallets
                  </option>

                  <option value="Wooden Crates">
                    Wooden Crates
                  </option>

                  <option value="Wooden Boxes">
                    Wooden Boxes
                  </option>

                  <option value="Custom Packaging">
                    Custom Packaging
                  </option>
                </select>

                {errors.requirement && (
                  <p className="mt-1.5 text-sm text-red-600">
                    {errors.requirement}
                  </p>
                )}
              </div>
              <textarea
                rows={4}
                placeholder="Tell us your requirement..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#CFDBD5] outline-none focus:border-[#153243] resize-none"
              />
              <button
                type="button"
                onClick={sendToWhatsApp}
                className="w-full py-3 rounded-xl bg-[#153243] text-white font-semibold hover:bg-[#1D4154] transition"
              >
                Send Enquiry on WhatsApp →
              </button>

            </div>

            <p className="text-xs text-slate-500 text-center mt-4">
              Your enquiry will open directly in WhatsApp.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;