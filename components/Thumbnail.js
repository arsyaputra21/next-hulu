import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ movieData }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group cursor-pointer p-2">
      <Image
        layout="responsive"
        src={`${BASE_URL}${movieData.backdrop_path || movieData.poster_path}`}
        height={1080}
        width={1920}
        className="group-hover:scale-105 transition transform duration-100 ease-in-out"
      />
      <div className="">
        <p className="truncate max-w-md">{movieData.overview}</p>
        <h2 className="text-2xl group-hover:text-white">
          {movieData.original_title || movieData.title}
        </h2>
        <p className="flex items-center transition ease-in-out duration-100 opacity-0 group-hover:opacity-100">
          {movieData.release_date} <ThumbUpIcon className="ml-3 h-5 w-5" />
          {movieData.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
