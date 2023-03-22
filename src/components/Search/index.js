import React from "react";
import iconSearch from "../../assets/icons/ico-search.png";

const Search = ({ className = "" }) => {
  return (
    <div
      className={`border border-gray-300 w-full lg:max-w-[350px] flex items-center bg-white lg:bg-secondary lg:bg-opacity-10 ${className}`}
    >
      <span className="hidden lg:block">
        <img className="px-2" src={iconSearch} alt="" />
      </span>
      <input
        type="text"
        className="flex-1 bg-transparent placeholder-transparent lg:placeholder:text-gray-500"
        placeholder="Tìm kiếm"
      />
      <button className="px-3 py-1 bg-secondary text-secondary font-bold bg-opacity-40">
        Tìm
      </button>
    </div>
  );
};

export default Search;
