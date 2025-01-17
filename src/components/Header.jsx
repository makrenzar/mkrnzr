import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center space-x-[3px] p-4 mt-5 mb-5">
      <Link
        to="/"
        className={`text-xs px-4 py-2 rounded-lg font-bold transition duration-300 hover:text-[#f8f8f8] hover:bg-[#1E1E21] ${location.pathname === '/' ? ' bg-[#1E1E21]' : 'text-[#6D6B6D]'}`}
      >
        Home
      </Link>
      <Link
        to="/media"
        className={`text-xs px-4 py-2 rounded-lg font-bold transition duration-300 hover:text-[#f8f8f8] hover:bg-[#1E1E21]  ${location.pathname === '/media' ? ' bg-[#1E1E21]' : 'text-[#6D6B6D]'}`}
      >
        Media
      </Link>
    </nav>
  );
}

export default Header;
