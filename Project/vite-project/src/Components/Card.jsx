import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const Card = ({ category, movies }) => {
  return (
    <main className="w-full overflow-x-auto text-white p-6 lg:p-10 scrollbar-hide">
      <h2 className="text-2xl font-bold mb-4 py-9 flex items-center">
        {category} <ChevronRight className="mt-[.39rem] ml-2" />
      </h2>
      <div className="flex gap-4">
        {movies.map(({id,image,title,ep}) => (
          <Link key={id} to={id.toString()} className="shrink-0">
            <div className="relative bg-white max-w-sm border-gray-200 rounded-lg shadow">
              <div className="w-[350px] aspect-[4/3] rounded-t-lg">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={title}
                />
              </div>
              <div className="absolute top-0 left-0 font-bold text-white flex w-full px-2 justify-between text-sm">
                <p>{ep} episodes</p>
              </div>
              <div className="px-2 pb-9">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {title}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Card;
