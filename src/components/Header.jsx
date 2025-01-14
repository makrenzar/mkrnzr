import { useState } from 'react';

function Header() {
    const [activeButton, setActiveButton] = useState('Home');

    return (
        <nav className="flex justify-center items-center space-x-4 p-4 mt-11 mb-5">
            <button
                onClick={() => setActiveButton('Home')}
                className={`text-xs px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                    activeButton === 'Home' ? 'bg-[#1E1E21] text-white' : 'text-[#6D6B6D] hover:text-white'
                }`}
            >
                Home
            </button>   
            <button
                onClick={() => setActiveButton('Media')}
                className={`text-xs px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                    activeButton === 'Media' ? 'bg-[#1E1E21] text-white' : 'text-[#6D6B6D] hover:text-white'
                }`}
            >
                Media
            </button>
        </nav>
    );
}

export default Header;
