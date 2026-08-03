import React from "react";

const Page = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About D Prasad Advisory LLP
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            A professional advisory firm specializing in Insolvency,
            Bankruptcy, Corporate Restructuring, and Stressed Asset Resolution
            under the Insolvency and Bankruptcy Code (IBC), 2016.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About Us
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            D Prasad Advisory LLP provides comprehensive advisory and
            operational support to Insolvency Professionals, Financial
            Institutions, Banks, Creditors, Investors, Resolution Applicants,
            and Corporate Entities involved in insolvency and restructuring
            processes.
          </p>

          <p className="text-gray-600 leading-8">
            With a multidisciplinary team comprising Insolvency Professionals,
            Chartered Accountants, Cost & Management Accountants, Company
            Secretaries, Advocates, Financial Consultants, and Industry
            Specialists, we deliver integrated legal, financial, operational,
            and strategic solutions while maintaining the highest standards of
            professionalism, transparency, and integrity.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="shadow-lg rounded-xl p-8 border">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-8">
              To establish D Prasad Advisory LLP as a trusted and leading
              platform in Insolvency, Bankruptcy, and restructuring advisory
              services by delivering ethical, innovative, and value-driven
              professional solutions.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8 border">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>

            <ul className="space-y-3 text-gray-600 list-disc pl-5">
              <li>Deliver efficient restructuring and insolvency solutions.</li>
              <li>Maximize value for stakeholders.</li>
              <li>Maintain transparency and professional ethics.</li>
              <li>Strengthen India's insolvency ecosystem.</li>
              <li>Promote continuous learning and innovation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {[
              "Integrity",
              "Professionalism",
              "Transparency",
              "Accountability",
              "Client Commitment",
              "Innovation",
              "Collaboration",
              "Excellence",
            ].map((value) => (
              <div
                key={value}
                className="bg-white shadow rounded-lg p-6 text-center hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg text-blue-900">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Corporate Insolvency Resolution Process (CIRP)",
              "Liquidation Support",
              "Voluntary Liquidation",
              "Stressed Asset Resolution",
              "Due Diligence",
              "Claims Management",
              "Compliance Advisory",
              "Financial Analysis",
              "Business Restructuring",
            ].map((service) => (
              <div
                key={service}
                className="border rounded-xl p-6 bg-white shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-blue-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Multidisciplinary Team
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Insolvency Professionals",
              "Chartered Accountants",
              "Cost & Management Accountants",
              "Company Secretaries",
              "Advocates & Legal Experts",
              "Financial Consultants",
              "Management Professionals",
              "Industry Specialists",
              "IT Professionals",
            ].map((member) => (
              <div
                key={member}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold">{member}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Commitment
          </h2>

          <p className="text-gray-600 leading-8">
            We are committed to delivering reliable, practical, and legally
            compliant advisory solutions that help businesses, financial
            institutions, creditors, and stakeholders successfully navigate
            complex insolvency and restructuring matters while creating
            sustainable value.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;