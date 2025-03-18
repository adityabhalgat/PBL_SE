export default function Navbar() {
    return (
      <nav className="backdrop-blur-lg bg-white p-4 w-full flex items-center shadow-lg border border-gray-300 rounded-lg relative">
        {/* Centered Title */}
        <h1 className="text-gray-800 text-3xl font-bold absolute">
          <a href="/">
          Insightly
          </a>
        </h1>
  
        {/* Right Side Links */}
        <div className="ml-auto space-x-8">
          <a href="/admin" className="text-gray-800 text-2xl hover:underline">
            Dashboard
          </a>
          <a href="/" className="text-gray-800 text-2xl hover:underline">
            
          </a>
          <a href="/managereviews" className="text-gray-800 text-2xl hover:underline">
            Manage Reviews
          </a>
          <a href="#" className="text-gray-800 text-2xl hover:underline">
            Logout
          </a>
        </div>
      </nav>
    );
  }
  