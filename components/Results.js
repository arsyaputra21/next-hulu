import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ movieArray }) => {
  return (
    <div className="p-2 sm:grid md:grid-cols-2 xl:grid-cols-3 ">
      {movieArray.map((movie) => (
        <Thumbnail key={movie.id} movieData={movie} />
      ))}
    </div>
  );
};

export default Results;
