// React
import React, { FC } from "react";
// import ArrowDown from "../../../assets/arrow-down.png"

// Icons

interface ISearchInput {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISearchInput> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="py-3 pl-2">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div>
        <div
          className={`relative mt-1 border-2 border-[#E8E8E8] flex rounded-lg md:px-3  px-2 `}
        >
          <input
            type="text"
            id="table-search"
            className="bg-search-icon bg-[url('assets/search.svg')] bg-right bg-origin-padding bg-no-repeat   w-full text-base rounded-lg block h-[40px] placeholder:text-[#828282] focus:outline-none  "
            placeholder="Search "
            value={searchTerm}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
