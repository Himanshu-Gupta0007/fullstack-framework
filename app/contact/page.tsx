const Page = () => {
  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-semibold uppercase tracking-widest text-amber-400">
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Let's Discuss Your
            <span className="text-amber-400"> Requirements</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Connect with our team for professional advisory services in
            Insolvency, Bankruptcy, Corporate Restructuring and Stressed Asset
            Resolution under the Insolvency and Bankruptcy Code (IBC), 2016.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Phone */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              📞 Phone
            </h3>

            <a
              href="tel:+919717998112"
              className="text-slate-600 transition hover:text-amber-500"
            >
              +91 9717998112
            </a>
          </div>

          {/* Email */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              ✉️ Email
            </h3>

            <a
              href="mailto:deepika.bhugra@gmail.com"
              className="break-all text-slate-600 transition hover:text-amber-500"
            >
              deepika.bhugra@gmail.com
            </a>
          </div>

          {/* Office */}
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              📍 Office
            </h3>

            <p className="leading-7 text-slate-600">
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

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-amber-500 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Details */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Office Information
              </h2>

              <p className="leading-8 text-slate-600">
                D Prasad Advisory LLP provides integrated advisory services
                across Insolvency, Bankruptcy, Corporate Restructuring and
                Stressed Asset Resolution.
              </p>
            </div>

            {/* Business Hours */}
            <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Business Hours
              </h2>

              <div className="space-y-4 text-slate-600">
                <div className="flex flex-col justify-between gap-1 border-b border-slate-100 pb-3 sm:flex-row">
                  <span>Monday - Friday</span>
                  <span className="font-medium">
                    09:30 AM - 06:30 PM
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-1 border-b border-slate-100 pb-3 sm:flex-row">
                  <span>Saturday</span>
                  <span className="font-medium">
                    09:30 AM - 02:00 PM
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Immediate Assistance */}
            <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
              <h2 className="text-2xl font-bold">
                Need Immediate Assistance?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Our professionals are available to discuss insolvency,
                restructuring, liquidation and corporate advisory matters.
              </p>



              

              <a
                href="tel:+919717998112"
                className="mt-8 inline-block rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;