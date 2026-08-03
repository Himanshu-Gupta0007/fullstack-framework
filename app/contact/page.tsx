import React from "react";

const Page = () => {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-amber-400 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Let's Discuss Your
            <span className="text-amber-400"> Requirements</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-300 leading-8">
            Connect with our team for professional advisory services in
            Insolvency, Bankruptcy, Corporate Restructuring and Stressed Asset
            Resolution under the Insolvency and Bankruptcy Code (IBC), 2016.
          </p>

        </div>
      </section>

      {/* Contact Info */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              📞 Phone
            </h3>

            <p className="text-slate-600">
              +91 9717998112
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              ✉️ Email
            </h3>

            <p className="text-slate-600 break-all">
              deepika.bhugra@gmail.com
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              📍 Office
            </h3>

            <p className="text-slate-600 leading-7">
              Plot No. 506 BF, DDA Plot,
              <br />
              Near Prognosis Laboratories,
              <br />
              Sector 19, Dwarka,
              <br />
              New Delhi – 110075
            </p>
          </div>

        </div>

        {/* Form + Office Details */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-amber-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-amber-500"
              ></textarea>

              <button
                className="w-full rounded-xl bg-amber-500 py-4 font-semibold hover:bg-amber-400 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Office Details */}

          <div className="space-y-8">

            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Office Information
              </h2>

              <p className="text-slate-600 leading-8">
                D Prasad Advisory LLP provides integrated advisory services
                across Insolvency, Bankruptcy, Corporate Restructuring and
                Stressed Asset Resolution.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Business Hours
              </h2>

              <div className="space-y-4 text-slate-600">

                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>09:30 AM - 06:30 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>09:30 AM - 02:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>

              </div>

            </div>

            <div className="bg-slate-900 rounded-3xl p-10 text-white">

              <h2 className="text-2xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>

              <p className="mt-5 text-slate-300 leading-8">
                Our professionals are available to discuss insolvency,
                restructuring, liquidation and corporate advisory matters.
              </p>

              <button className="mt-8 bg-amber-500 text-black font-semibold px-8 py-4 rounded-xl hover:bg-amber-400 transition">
                Schedule Consultation
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;