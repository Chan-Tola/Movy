import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import movieData from "./Data/CarouselData";
import DataCard from "./Data/DataCards";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
const Carousel = () => {
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute hidden lg:block rounded-full right-0 p-2 ease-in duration-100 hover:bg-slate-400 transition-all top-1/2 z-10 transform -translate-y-1/2 cursor-pointer text-black hover:text-green-700"
        onClick={onClick}
      >
        <ChevronRight />
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute hidden lg:block  rounded-full p-2 ease-in duration-100 hover:bg-slate-400 transition-all left-0 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer text-black hover:text-green-700"
        onClick={onClick}
      >
        <ChevronLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-500"></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "0px", // Position dots inside the image slide
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        {DataCard.map(({ movies }) => {
          return movies.map(({ id, title, image }) => {
            return (
              <div
                key={id}
                className="relative mt-[90px] h-96 md:h-[600px] shadow-custom"
              >
                <img
                  src={image}
                  className=" absolute block w-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black via-transparent to-transparent p-4">
                  <h2 className="text-white text-lg md:text-2xl font-bold">
                    {title}
                  </h2>
                </div>
              </div>
            );
          });
        })}
      </Slider>
    </>
  );
};

export default Carousel;
