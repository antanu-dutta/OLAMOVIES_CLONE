import React from "react";

function Header() {
  const menuItem = ["Collection", "IMDB TOP", "Quality", "More"];
  return (
    <header className="flex p-4 bg-white shadow-2xl">
      <div className="flex-1 lg:hidden"></div>
      <h1 className=" flex-1 text-5xl uppercase text-red-800 font-semibold text italic">
        olamovies.top
      </h1>
      <ul className="hidden lg:flex items-center gap-8">
        {menuItem.map((item, index) => (
          <li key={index} className="text-base font-bold ">
            {item}
          </li>
        ))}
      </ul>
      <div
        id="search_menu"
        className="flex-1 items-center justify-end  flex gap-6"
      >
        <i class="fa-solid fa-magnifying-glass text-xl"></i>
        <i class="fa-solid fa-bars text-xl"></i>
      </div>
    </header>
  );
}

export default Header;
