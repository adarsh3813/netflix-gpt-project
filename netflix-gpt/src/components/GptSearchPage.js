import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BACKGROUND_URL } from "../utils/utils";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={LOGIN_BACKGROUND_URL} alt="background-image" />
      </div>
      <div className="absolute -z-10 w-full h-full bg-black opacity-70"></div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
