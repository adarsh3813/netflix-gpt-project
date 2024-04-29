import Header from "./Header";
import { API_OPTIONS } from "../utils/utils";
import { useEffect } from "react";

const Browse = () => {
  const getRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page-1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getRatedMovies();
  }, []);

  return (
    <div>
      <Header />
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;
