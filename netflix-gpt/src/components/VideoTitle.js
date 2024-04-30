const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[1400px] aspect-video absolute pt-[15%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-4 w-3/12 text-sm">{overview}</p>
      <div>
        <button className="bg-white px-10 text-black py-2 rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white px-10 py-2 rounded-md mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
