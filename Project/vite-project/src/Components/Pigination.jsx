import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
// const Pigination = ({ postPerPage, totalPost, pagination }) => {
//   const pageNumber = [];
//   for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
//     pageNumber.push(i);
//   }
//   const [activePage, setActivePage] = useState(1);
//   //   this is functon for click at get the number into the handlePageClick
//   const handlePageClick = (number) => {
//     // after get teh number so teh setActivePage get the number
//     setActivePage(number);
//     // and the pagination too.
//     pagination(number);
//   };
//   return (
//     <>
//       <div className="relative">
//         <div className="grid gap-2 grid-cols-6 w-full py-5">
//           {/* this is pageNumber when it map and we have the parameter to access pageNumber childrens
//             after that I use if else so when the actePage === Number for example number is 10 so the  condition is
//             I want the button change color to blue.
//         */}
//           {pageNumber.map((number) => (
//             <button
//               key={number}
//               className={`flex items-center justify-center w-12 h-12 font-serif rounded-lg transition ${
//                 activePage === number
//                   ? "bg-gray-700 text-yellow-500"
//                   : "bg-gray-700 text-white"
//               }`}
//               onClick={() => handlePageClick(number)}
//             >
//               {number}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };


const Pagination = ({ postPerPage, totalPost, pagination }) => {
  const ranges = [];
  for (let i = 0; i < totalPost; i += postPerPage) {
    ranges.push({ start: i + 1, end: Math.min(i + postPerPage, totalPost) });
  }

  const [activeRange, setActiveRange] = useState(1);
  const containerRef = useRef(null);

  const handleRangeClick = (rangeIndex) => {
    setActiveRange(rangeIndex);
    pagination(rangeIndex);
  };

  const handleNext = () => {
    if (activeRange < ranges.length) {
      setActiveRange((prev) => prev + 1);
      pagination(activeRange + 1);
      scrollContainerTo(activeRange + 1);
    }
  };

  const handlePrevious = () => {
    if (activeRange > 1) {
      setActiveRange((prev) => prev - 1);
      pagination(activeRange - 1);
      scrollContainerTo(activeRange - 1);
    }
  };

  const scrollContainerTo = (rangeIndex) => {
    if (containerRef.current) {
      const childWidth = containerRef.current.scrollWidth / ranges.length; // Approximate width of each button
      const scrollPosition = (rangeIndex - 1) * childWidth;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 py-4 px-2">
      {/* Previous Button */}
      <button
        type="button"
        className={`px-4 py-2 rounded-lg font-bold transition ${
          activeRange === 1 ? "text-white cursor-not-allowed" : "text-white"
        }`}
        onClick={handlePrevious}
        disabled={activeRange === 1}
      >
        <ChevronLeft />
      </button>

      {/* Scrollable Range Buttons */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-2 max-w-[80%] px-2 scrollbar-hide"
      >
        {ranges.map((range, index) => (
          <button
            type="button"
            key={index}
            className={`px-3 py-1 font-bold transition ${
              activeRange === index + 1
                ? "text-white bg-gray-400 rounded-lg"
                : "text-white"
            }`}
            onClick={() => handleRangeClick(index + 1)}
          >
            {range.start}-{range.end}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        type="button"
        className={`px-4 py-2 rounded-lg font-bold transition ${
          activeRange === ranges.length
            ? "text-white cursor-not-allowed"
            : "text-white"
        }`}
        onClick={handleNext}
        disabled={activeRange === ranges.length}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
