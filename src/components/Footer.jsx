import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center text-[#6D6B6D] font-bold font-mono text-xs py-4 -mt-12">
      <div className="flex space-x-4">
        <p>Reach out on</p>
        <a
          href="mailto:markzaragoza301@gmail.com"
          target="_blank"
          className="hover:text-[#f8f8f8] hover:underline"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://read.cv/makrenzar"
          target="_blank"
          className="hover:text-[#f8f8f8] hover:underline"
          rel="noopener noreferrer"
        >
          ReadCV
        </a>
        <a
          href="https://www.facebook.com/makrenzar1"
          className="hover:text-[#f8f8f8] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>

        <a
          href="https://www.linkedin.com/in/makrenzar/"
          className="hover:text-[#f8f8f8] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
