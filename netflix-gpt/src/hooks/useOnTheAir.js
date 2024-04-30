import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addOnTheAirShows } from "../utils/tvShowSlice";
import { useEffect } from "react";
import { ON_THE_AIR_SHOWS } from "../utils/dummyAPIData";

const useOnTheAir = () => {
  const dispatch = useDispatch();
  //   const getRatedShows = async () => {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/tv/on_the_air?page=1",
  //       API_OPTIONS
  //     );
  //     const json = await data.json();
  //     console.log(json.results);
  //     dispatch(addNowPlayingMovies(json.results));
  //   };

  const getRatedShows = () => {
    // console.log(NOW_PLAYING_MOVIES.results);
    dispatch(addOnTheAirShows(ON_THE_AIR_SHOWS.results));
  };

  useEffect(() => {
    getRatedShows();
  }, []);
};

export default useOnTheAir;
