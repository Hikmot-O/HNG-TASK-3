import React, { useState } from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Footer from "./Footer";

const HomePage = (props) => {
  const [searchResult, setSearchResult] = useState("");

  const searchHandler = (val) => {
    setSearchResult(val)
    console.log(searchResult)
  };

  return (
    <section>
      <Hero onSearch={searchHandler} />
      <Gallery Result={searchResult}  />
      {/* <Footer /> */}
    </section>
  );
};

export default HomePage;
