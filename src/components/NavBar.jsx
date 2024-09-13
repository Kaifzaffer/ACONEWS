import React from "react";
import { Input } from "antd";

export default function NavBar({ setCategory, setSearchQuery }) {

  function updateCategory(e) {
    setCategory(e.target.textContent.toLowerCase());
  }

  const onSearch = (value) => {
    setSearchQuery(value); // Here, value is the input from the search bar
  };

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-0 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl cursor-pointer text-[#2563eb]">
              ACONEWS
            </span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>General</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Business</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Entertainment</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Health</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Science</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Sports</a>
            <a className="mr-5 hover:text-white cursor-pointer" onClick={updateCategory}>Technology</a>
          </nav>

          <div className="w-full md:w-auto md:mt-0 mt-4">
            <Input.Search
              placeholder="Search news"
              allowClear
              enterButton="Search"
              size="middle"
              onSearch={onSearch} 
              className="w-full md:w-60" 
            />
          </div>
        </div>
      </header>
    </>
  );
}
