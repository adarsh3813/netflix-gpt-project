import MovieCard from "./MovieCard";

const TvList = ({ title, tvShows }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {tvShows?.map((tvShow) => (
            <MovieCard key={tvShow.id} posterPath={tvShow.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvList;
