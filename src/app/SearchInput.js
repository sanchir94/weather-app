"use client";
import { useState } from "react";
import { SearchIcon } from "./search.js";

export const SearchInput = ({ search, onChangeText, keyDown }) => {
  return (
    <div className="flex justify-center items-center gap-[18px]">
      <button>
        <SearchIcon />
      </button>
      <input
        className=" outline-none mr-1  w-[455px] h-[44px] text-black"
        type="text"
        placeholder="City name..."
        value={search}
        onChange={onChangeText}
        onKeyDown={keyDown}
      />
    </div>
  );
};
