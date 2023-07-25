import React from "react";
import SearchB from "./images/search.png";

export default function Search() {
  return (
    <div className="py-2 bg-blue-200 flex justify-center items-center ">
      <input
        type="text"
        placeholder="Search Box"
        className="my-2 block w-3/4 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 md:text-lg text-base md:w-1/2 z-0 
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      ></input>
      <button className="border-solid my-2 border-black">
        <img src={SearchB} className="h-11 z-10 bg-white"></img>
      </button>
    </div>
  );
}
