"use client";
import React, { useEffect, useRef, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({ text, list, image , dropdownContainerSty = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  let dropdownRef = useRef();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative max-lg:border-b border-[#A3ACB1]/60" ref={dropdownRef}>
      <button
        type="button"
        className="lg:px-3 xl:px-8 leading-[140%] tracking-tight py-6 lg:py-2 max-lg:w-full lg:text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium text-base inline-flex items-center"
        onClick={toggleDropdown}
      >
        {text}
        <DownArrow />
      </button>

      {isOpen && (
        <div className={`${dropdownContainerSty} origin-top-right left-auto lg:absolute right-0 lg:mt-4 lg:rounded-xl lg:shadow-lg bg-white text-black-33 lg:p-[52px]`}>
          <div className="lg:flex">
            <div className="lg:w-[calc(100%_-_201px)]">
              <ul
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                className="lg:flex flex-wrap flex-col lg:max-h-[160px] lg:pr-[80px] lg:gap-x-[80px]"
              >
                {list?.map((item, index) => {
                  return (
                    <li className="block" key={index}>
                      <Link
                        href={`${item.redirectPath}`}
                        className="block px-[10px] lg:px-0 py-[12px] lg:py-2 text-base font-medium text-black-900 hover:bg-gray-100 whitespace-nowrap"
                        onClick={closeDropdown}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="max-lg:hidden min-w-[201px] w-[201px] h-[176px] rounded-3xl overflow-hidden">
              <Image className="h-full w-full" {...image} alt="img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
