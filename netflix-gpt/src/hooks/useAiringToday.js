import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addAiringToday } from "../utils/tvShowSlice";
import { useEffect } from "react";
import { AIRING_TODAY_SHOWS } from "../utils/dummyAPIData";

const useAiringToday = () => {
  const dispatch = useDispatch();
  //   const getRatedShows = async () => {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/tv/airing_today?page=1",
  //       API_OPTIONS
  //     );
  //     const json = await data.json();
  //     console.log(json.results);
  //     dispatch(addAiringToday(json.results));
  //   };

  const getRatedShows = () => {
    // console.log(NOW_PLAYING_MOVIES.results);
    dispatch(addAiringToday(AIRING_TODAY_SHOWS.results));
  };

  useEffect(() => {
    getRatedShows();
  }, []);
};

export default useAiringToday;
