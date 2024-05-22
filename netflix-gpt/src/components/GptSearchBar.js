const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="p-2 bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="What do you want to watch today"
          className="p-2 m-4 rounded-md col-span-9"
        />
        <button className="p-2 my-4 mx-2 bg-red-800 text-white col-span-3 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
