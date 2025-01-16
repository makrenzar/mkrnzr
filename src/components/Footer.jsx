import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center text-[#6D6B6D] font-bold font-mono text-xs py-4 -mt-12">
      <div className="flex">
        Built by&nbsp;<span className="text-[#f8f8f8]">Makren&nbsp;</span>|
           <a
            href="https://github.com/makrenzar/Mark-Lawrence-Zaragoza"
            target="_blank"
            className="hover:text-[#f8f8f8] hover:underline ease-in duration-300"
          >&nbsp;I build things on the web
          </a>
      </div>
    </footer>
  );
}

export default Footer;
