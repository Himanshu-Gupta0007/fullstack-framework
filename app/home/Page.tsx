export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the About page of our application. Here you can find information about our team, mission, and values.
      </p>  
      <span className="mt-4 text-lg text-gray-600">
        Contact us at info@company.com
      </span>
      <li className="mt-4 text-lg text-gray-600">
        Follow us on social media for updates and news.
      </li>
      <p className="mt-4 text-lg text-gray-600">      
        <span className="font-semibold">Twitter:</span> @company
        <li className="mt-2 text-lg text-gray-600">
          <span className="font-semibold">Facebook:</span> facebook.com/company
        </li>
        <li className="mt-2 text-lg text-gray-600">
          <span className="font-semibold">LinkedIn:</span> linkedin.com/company
        </li>    
        
      </p>
    </div>
  );
}