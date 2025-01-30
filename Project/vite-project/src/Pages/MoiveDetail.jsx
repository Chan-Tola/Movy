import { useState } from "react";
import Pigination from "../Components/Pigination";
import { useParams, Link } from "react-router-dom";
import DataCards from "../Components/Data/DataCards";
import {
  Heart,
  CircleAlert,
  CloudDownload,
  Share2,
  ChevronDown,
} from "lucide-react";
const MoiveDetail = () => {
  const { id } = useParams();

  // after have tha data from the CardData so
  // I have to using method find to find the element and return the value it by array

  const movie = DataCards.flatMap((e) => e.movies).find(
    //flatMap យើងប្រើដើម្បីធ្វើការស្វែងរកនៅ nestest arrray element. បន្ទាប់មកទើបយើងប្រើនៅ method Finds
    (movie) => movie.id == id
  );

  const [visible, setVisible] = useState(false);

  function handleDescription() {
    setVisible(!visible);
  }

  // after that I have the acess the from the cardData

  const { title, ep = 0, image, description } = movie;

  // I have create a currentPage that value default it 1

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  // Calculate episodes for pagination

  const indexOfLastPost = currentPage * postPerPage;

  // for example if current page is 2 so the indexofLastPost is gonna be 24

  const indexofFirstPost = indexOfLastPost - postPerPage;

  // ex: indexlastofPost = 24 => indexofFirstPost = 24 - 12 = 12

  const currentEpisodes = Array.from({ length: ep }).slice(
    // Array.from it where that we can get the length of array from the ep
    indexofFirstPost,
    indexOfLastPost
  );
  const handleClickGetID = () => {
    return console.log(id);
  };

  const dataIcon = [
    {
      item: <Heart />,
      text: "Favorite",
    },
    {
      item: <Share2 />,
      text: "Share",
    },
    {
      item: <CloudDownload />,
      text: "Download",
    },
    {
      item: <CircleAlert />,
      text: "Report",
    },
  ];

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className="h-screen w-screen relative">
        <main className="flex flex-col lg:flex-row bg-[#212121] justify-between h-auto lg:h-screen p-4 gap-4 pt-[7rem]">
          {/* Left Section for Movie Picture */}
          <section className="w-full lg:w-2/3 flex flex-col justify-center items-center rounded-lg shadow-md overflow-hidden">
            <img
              src={image}
              className="h-64 lg:h-full w-full object-cover"
              alt="moviePic"
            />
          </section>

          {/* Right Section for Content */}
          <section className="w-full lg:w-1/3 p-6 bg-[#303030] rounded-lg  shadow-md flex flex-col">
            <h1 className="text-2xl lg:text-4xl font-light mb-4 text-white">
              {title}
            </h1>
            <div className="mb-4 w-28 h-10 flex items-center justify-center bg-yellow-600 text-white font-bold rounded-lg shadow-lg">
              Episodes {ep}
            </div>
            {/* this is the icon  or fav */}
            <section className="w-full grid grid-cols-4 place-items-center gap-3 text-white text-[10px] py-5">
              {dataIcon.map(({ item, text }, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center cursor-pointer"
                  >
                    {item}
                    {text}
                  </div>
                );
              })}
            </section>
            <center className="text-white">
              <h1 className="text-4xl font-thin tracking-wide capitalize mb-4 relative">
                Playlist
                <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></span>
              </h1>
            </center>
            {/* this is the description */}
            <section>
              <button
                className="text-white w-full items-center capitalize text-xl flex justify-between bg-[#303030] shadow-lg shadow-gray-800 hover:shadow-xl hover:shadow-gray-900 transition-all duration-300 ease-in-out border-spacing-3.5 px-4 py-4 rounded"
                onClick={handleDescription}
              > 
                Description
                <ChevronDown />
              </button>
              {visible && (
                <div className="p-4 border w-full border-gray-900 bg-gray-900 rounded overflow-auto max-h-40">
                  <p className="text-white text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              )}
            </section>

            {/* this is my Pigination */}
            <Pigination
              postPerPage={postPerPage}
              totalPost={ep}
              pagination={handlePagination}
            />
            {/* Episode List */}
            <section className="grid grid-cols-6 place-items-center gap-5 py-5">
              {currentEpisodes.map((_, index) => (
                // eslint-disable-next-line react/jsx-key
                <button onClick={handleClickGetID}>
                  <div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white font-serif rounded-lg hover:bg-red-700 transition"
                  >
                    {indexofFirstPost + index + 1}
                  </div>
                </button>
              ))}
            </section>
            {/* link back to home  */}
            <Link to="/">
              <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition font-medium">
                Back to Home
              </button>
            </Link>
          </section>
        </main>
      </main>
    </>
  );
};

export default MoiveDetail;
