import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { TOP_RATED_MOVIES } from "../utils/dummyAPIData";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  //   const getRatedMovies = async () => {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/movie/top_rated?page=1",
  //       API_OPTIONS
  //     );
  //     const json = await data.json();
  //     console.log(json.results);
  //     dispatch(addNowPlayingMovies(json.results));
  //   };

  const getRatedMovies = () => {
    // console.log(NOW_PLAYING_MOVIES.results);
    dispatch(addTopRatedMovies(TOP_RATED_MOVIES.results));
  };

  useEffect(() => {
    getRatedMovies();
  }, []);
};

export default useTopRatedMovies;
