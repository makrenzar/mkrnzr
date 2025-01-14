import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center space-x-4 p-4 mt-11 mb-5">
      <Link
        to="/"
        className={`text-xs px-4 py-2 rounded-lg font-semibold transition duration-300 ${location.pathname === '/' ? 'text-white bg-[#1E1E21]' : 'text-[#6D6B6D]'}`}
      >
        Home
      </Link>
      <Link
        to="/media"
        className={`text-xs px-4 py-2 rounded-lg font-semibold transition duration-300 ${location.pathname === '/media' ? 'text-white bg-[#1E1E21]' : 'text-[#6D6B6D]'}`}
      >
        Media
      </Link>
    </nav>
  );
}

export default Header;
