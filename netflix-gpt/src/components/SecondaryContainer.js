import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import TvList from "./TvLists";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);
  return (
    <div className="bg-black">
      <div className="-mt-72 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <TvList title={"On the Air Shows"} tvShows={tvShows?.onTheAir} />
        <TvList title={"Airing Today"} tvShows={tvShows?.airingToday} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
