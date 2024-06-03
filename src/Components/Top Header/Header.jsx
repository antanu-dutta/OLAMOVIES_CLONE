import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Header() {
  const menuItem = ["Collection", "IMDB TOP", "Quality", "More"];
  const navigation = [
    "Home",
    "Privacy Policy",
    "Contact",
    "Disclaimer",
    "DMCA",
    "FAQs",
    "Request",
    "How To Download",
  ];

  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <header className="mb-10">
      <div className="bg-[#262626]">
        <div className="container">
          <div id="" className="hidden lg:flex py-2 justify-between ">
            <ul className="flex gap-3 items-center">
              {navigation.map((nav, indexNav) => (
                <li
                  className={`text-[11px] font-medium text-white ${
                    nav.includes("How") ? "text-red-700" : ""
                  }`}
                >
                  {nav}
                </li>
              ))}
            </ul>
            <span className="text-[11px] text-white">June 3, 2024</span>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-xl">
        <div className="container">
          <div id="desktop-menubar" className="hidden lg:grid grid-cols-3">
            <img src={logo} alt="" />
            <ul className="flex gap-8 items-center justify-center">
              {menuItem.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-base relative  font-semibold text-black "
                >
                  {item}
                  {item.includes("IMDB") ? (
                    <div className="absolute left-[70px] text-white -top-2 w-5 h-5 text-[10px] rounded-full bg-red-700 flex items-center justify-center">
                      250
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-6">
              <input
                type="text"
                placeholder="Search here"
                className="border bg-blue-700 p-2 border-none outline-none text-white text-sm "
              />
              <div className=" shadow-2xl border p-2 shadow-red-950 relative">
                <i class="fa-solid fa-bars cursor-pointer"></i>
                <div className="absolute top-0 left-7 text-sm bg-red-800 w-4 h-4 rounded-full flex items-center justify-center text-white">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mobile-menubar"
        className=" shadow-xl grid grid-cols-3  items-center lg:hidden px-2 py-4"
      >
        <div></div>
        <img src={logo} alt="" className="cursor-pointer" />
        <div className="flex items-center gap-4 text-2xl justify-end">
          <i
            class={`fa-solid fa-magnifying-glass cursor-pointer ${
              openSearch && "fa-xmark"
            }`}
            onClick={toggleSearch}
          ></i>
          <div className=" shadow-2xl border p-2 shadow-red-950 relative">
            <i class="fa-solid fa-bars cursor-pointer"></i>
            <div className="absolute top-0 left-7 text-sm bg-red-800 w-4 h-4 rounded-full flex items-center justify-center text-white">
              0
            </div>
          </div>
        </div>
        {openSearch && (
          <input
            type="text"
            placeholder="Search here"
            className="border absolute right-[80px] top-[60px] bg-blue-700 p-2 border-none outline-none text-white text-sm "
          />
        )}
      </div>
    </header>
  );
}

export default Header;
