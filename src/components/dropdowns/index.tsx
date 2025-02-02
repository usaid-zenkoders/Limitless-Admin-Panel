import React, { useEffect, useRef } from "react";
import { ArrowDown } from "../../../image.constants";
export interface IDropDownProps {
  selectedOption?: string;
  toggleDropdown?: () => void;
  selectOption?: (option: React.SetStateAction<string>) => void;
  isOpen?: boolean;
}
const UserTypeDropdown = ({
  isOpen,
  selectOption,
  selectedOption,
  toggleDropdown,
}: IDropDownProps) => {
  const options = ["User", "Host"];

  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log(selectedOption);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleDropdown
      ) {
        toggleDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div className="flex  w-[10%]  justify-end " ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full max-w-[162px]  px-4 h-[40px]  bg-white border border-gray-300 rounded-lg shadow-sm "
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-2 justify-between  w-full">
          <span className="text-[#7C7C7C] text-md whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedOption?.toString() || "Role"}
          </span>
          <img src={ArrowDown} alt="DropDown Arrow" width={25} height={25} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-20 mt-11  bg-white border border-gray-300 rounded-md shadow-lg w-[145px]  ">
          <div className="py-2">
            {options.map((option) => (
              <button
                key={option}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 z-10 text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                onClick={() => selectOption && selectOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MemoizedUserTypeDropdown = React.memo(UserTypeDropdown);
export { MemoizedUserTypeDropdown };
// export { OrganizationTypeDropdown, MemoizedOrganizationTypeDropdown };
