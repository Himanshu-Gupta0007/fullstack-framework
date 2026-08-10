const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Associate Analyst
        </h1>

        {/* Job Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            📋 Job Responsibilities
          </h2>


          

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Analyze data using Microsoft Excel.</li>
            <li>Interpret and communicate findings effectively.</li>
            <li>Create reports and dashboards.</li>
            <li>Clean and validate data.</li>
            <li>Support clients and internal teams with analysis.</li>
            <li>Work with SQL, Power BI, or Tableau (if required).</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🛠 Required Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              ✅ Excel (VLOOKUP, XLOOKUP, Pivot Table, Charts)
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow">
              ✅ SQL (SELECT, JOIN, GROUP BY)
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow">
              ✅ Power BI / Tableau
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow">
              ✅ Analytical Thinking & Communication
            </div>
          </div>
        </section>

        {/* Salary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            💰 Salary
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>Fresher: ₹3–6 LPA</p>
            <p>1–3 Years Experience: ₹5–8 LPA</p>
          </div>
        </section>

        {/* Top Hiring Companies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🏢 Top Hiring Companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Accenture",
              "Deloitte",
              "EY",
              "KPMG",
              "Genpact",
              "Cognizant",
              "Capgemini",
              "Infosys",
              "TCS",
              "Wipro",
            ].map((company) => (
              <div
                key={company}
                className="bg-blue-100 text-blue-700 font-semibold rounded-lg p-3 text-center"
              >
                {company}
              </div>
            ))}
          </div>
        </section>

        {/* MERN vs Associate Analyst */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            ⚖ MERN Developer vs Associate Analyst
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-100 rounded-lg p-5">
              <h3 className="font-bold text-xl mb-3">MERN Developer</h3>

              <ul className="list-disc pl-5 space-y-2">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="bg-yellow-100 rounded-lg p-5">
              <h3 className="font-bold text-xl mb-3">
                Associate Analyst
              </h3>

              <ul className="list-disc pl-5 space-y-2">
                <li>Excel</li>
                <li>SQL</li>
                <li>Power BI</li>
                <li>Reporting</li>
                <li>Data Analysis</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;