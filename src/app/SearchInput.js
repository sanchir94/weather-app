import { SearchIcon } from "./search";

export const SearchInput = ({
  search,
  setSearch,
  onChange,
  onChangeText,
  onPressEnter,
}) => {
  return (
    <div className="border border-transparent drop-shadow-md rounded-[24px] flex items-center">
      <button>
        <SearchIcon />
      </button>
      <input
        className="w-full outline-none mr-1"
        type="text"
        placeholder="City name"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
    </div>
  );
};
