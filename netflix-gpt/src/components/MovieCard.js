import { POSTER_CDN_URL } from "../utils/utils";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-3">
      <img alt="Movie Card" src={POSTER_CDN_URL + "w500/" + posterPath} />
    </div>
  );
};

export default MovieCard;
