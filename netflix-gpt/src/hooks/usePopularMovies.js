import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { POPULAR_MOVIES } from "../utils/dummyAPIData";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  // const getRatedMovies = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/popular?page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);
  //   dispatch(addNowPlayingMovies(json.results));
  // };

  const getRatedMovies = () => {
    // console.log(NOW_PLAYING_MOVIES.results);
    dispatch(addPopularMovies(POPULAR_MOVIES.results));
  };

  useEffect(() => {
    getRatedMovies();
  }, []);
};

export default usePopularMovies;
