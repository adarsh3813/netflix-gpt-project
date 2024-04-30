import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { UPCOMING_MOVIES } from "../utils/dummyAPIData";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  //   const getRatedMovies = async () => {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/movie/upcoming?page=1",
  //       API_OPTIONS
  //     );
  //     const json = await data.json();
  //     console.log(json.results);
  //     dispatch(addUpcomingMovies(json.results));
  //   };

  const getRatedMovies = () => {
    // console.log(NOW_PLAYING_MOVIES.results);
    dispatch(addUpcomingMovies(UPCOMING_MOVIES.results));
  };

  useEffect(() => {
    getRatedMovies();
  }, []);
};

export default useUpcomingMovies;
