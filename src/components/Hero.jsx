import React, { useState, useCallback } from "react";

const Hero = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    setSearchValue(e.target[0].value);
    props.onSearch(e.target[0].value);
  };
  return (
    <section className="bg-gray-500">
      {/* Header */}
      <div className="text-blue-50 py-4 bg-blue-950 px-5 lg:px-16 flex items-center justify-between">
        <div className="font-bold">GALLERY</div>
        <a href="" className="bg-blue-500 px-6 py-2 rounded-[20px]">
          Logout
        </a>
      </div>

      {/* Hero */}
      <div className="px-5 lg:px-[200px] py-20">
        <h2 className="text-white text-2xl mb-3 font-[600]">
          Search High Resolution Images
        </h2>
        <form action="" onSubmit={searchHandler}  className="">
          <input
            // onChange={searchHandler}
            // value={searchValue}
            type="text"
            className="bg-white w-full outline-none py-2 px-6 rounded-[40px]"
            placeholder="Search Image"
          />
        </form>
      </div>
    </section>
  );
};

export default Hero;
