// import React, { useState } from "react";
import Carousel from "../Components/Carousel";
import MovieCategory from "../Components/MovieCategory";
// const [isLoading, setIsloading] = useState(false);
const HomePage = () => {
  return (
    <div className="bg-[#303030]">
      <Carousel />
      <MovieCategory />
    </div>
  );
};

export default HomePage;
