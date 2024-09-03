import React from "react";

const Navebar = () => {
  return (
    <nav className="bg-slate-800 ">
      <div className="flex justify-between mycontainer text-white">
        <div className="logo font-bold">
          <h1 className=" text-center">
            <span className="text-green-700 font-[900]">&lt; </span>
           <span className="font-[cursive,_Verdana,_Geneva,_Tahoma,_sans-serif]"> Pass</span>
            <span className="text-green-700 font-[800]">OP/&gt;</span>
          </h1>
        </div>
        <div className="btn flex flex-row items-center space-x-2  cursor-pointer border pl-0 pr-1 py-[2px] rounded-full hover:text-slate-700 hover:bg-white">
          <span className="hover:fill-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              width="24"
              height="24"
            >
              <g>
                <circle cx="28" cy="28" r="28" className="circle fill-slate-800"></circle>
                <path
                  // fill="#fff"
                  className="github-path fill-current "
                  d="M28 0C12.54 0 0 12.54 0 28c0 12.37 8.02 22.86 19.15 26.57 1.4.26 1.91-.61 1.91-1.35 0-.66-.02-2.43-.04-4.76-7.79 1.69-9.43-3.75-9.43-3.75-1.27-3.23-3.11-4.1-3.11-4.1-2.54-1.74.19-1.7.19-1.7 2.81.2 4.29 2.89 4.29 2.89 2.5 4.28 6.55 3.04 8.15 2.33.25-1.81.98-3.04 1.78-3.74-6.22-.71-12.75-3.11-12.75-13.84 0-3.06 1.09-5.56 2.88-7.51-.29-.71-1.25-3.56.27-7.41 0 0 2.35-.75 7.7 2.87 2.23-.62 4.63-.93 7.01-.94 2.38.01 4.77.32 7.01.94 5.35-3.62 7.69-2.87 7.69-2.87 1.53 3.85.57 6.7.28 7.41 1.79 1.96 2.88 4.46 2.88 7.51 0 10.76-6.55 13.12-12.78 13.82 1.01.86 1.9 2.57 1.9 5.19 0 3.74-.03 6.76-.03 7.68 0 .75.5 1.62 1.93 1.35C47.98 50.86 56 40.37 56 28 56 12.54 43.46 0 28 0z"
                ></path>
              </g>
            </svg>
          </span>
          <span className="font-semibold hover:font-bold"> Github </span>
        </div>

        {/* <ul>
          <li className="flex gap-2  md:gap-4">
            <a href="/" className="hover:font-bold">
              Home
            </a>
            <a href="/" className="hover:font-bold">
              About
            </a>
            <a href="/" className="hover:font-bold">
              Contact
            </a>
            <a href="/" className="hover:font-bold">
              Passwords
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navebar;
