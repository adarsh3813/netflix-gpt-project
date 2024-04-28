import { NAV_LOGO_URL } from "../utils/utils";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NAV_LOGO_URL} alt="logo" />
    </div>
  );
};

export default Header;
