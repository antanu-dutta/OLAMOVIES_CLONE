import React from "react";
import img1 from "../../assets/movies-img/1.jpg";
import { movies } from "./movieDetails";

function Movie() {
  return (
    <div id="movie-container">
      <div className="container">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((item, index) => (
            <div
              id="movie-card"
              className="flex gap-5 flex-col p-5 relative rounded-xl h-[300px] overflow-hidden"
            >
              <img
                src={item.path}
                className="absolute top-0 left-0 w-full h-full object-cover -z-50 brightness-50"
                alt=""
              />
              <div className="flex gap-2">
                <div className="text-white hover:bg-white hover:text-black cursor-pointer transition-all py-1 uppercase px-2 text-[10px] bg-slate-500 rounded-3xl">
                  {item.religion}
                </div>
                <div className="text-white hover:bg-white hover:text-black cursor-pointer transition-all uppercase py-1 px-2 text-[10px] bg-slate-500 rounded-3xl">
                  {item.category}
                </div>
              </div>
              <h2 className="text-white text-lg font-semibold ">
                {item.title}
              </h2>
              <div className="flex gap-3">
                <span className=" text-gray-400 text-sm">
                  <i class="fa-solid fa-bag-shopping"></i> {item.time}
                </span>
                <span className=" text-gray-400 underline decoration-dotted text-sm">
                  <i class="fa-solid fa-eye"></i> {item.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
