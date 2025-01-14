import React, { useEffect } from 'react';

function View({ src, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleClickOutside = (event) => {

    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleClickOutside} 
    >
      <div className="relative ">
        <img src={src} alt="Enlarged view" className="w-[500px] h-[500px] object-contain" />
      </div>
      <p className="absolute bottom-56 text-sm px-2 py-1 cursor-pointer bg-[#515151] rounded-md border border-[#808080]">
        ESC
      </p>
    </div>
  );
}

export default View;
