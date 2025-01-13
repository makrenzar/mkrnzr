function Header() {
    return (
        <nav className="flex space-x-4 p-4 bg-[#111111] text-gray-400">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Home
            </button>
            <button className="hover:text-white transition duration-300">
                Media
            </button>
        </nav>
    );
}

export default Header;
