import { useLocation, Link } from "@tanstack/react-router"; 
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4 animate-bounce">404</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">Oops! The page you're looking for was not found.</p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">It seems you've ventured into uncharted territory.</p>
        {/* Use the Link component from @tanstack/react-router for client-side navigation */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
