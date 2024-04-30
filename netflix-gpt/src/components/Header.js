import { NAV_LOGO_URL } from "../utils/utils";
import NETFLIX_AVATAR from "../assets/NETFLIX_AVATAR.png";
import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleProfileExpanded = () => {
    setIsProfileExpanded(!isProfileExpanded);
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
      <div className="">
        <img className="w-44" src={NAV_LOGO_URL} alt="logo" />
      </div>

      {user && (
        <div className="text-right">
          <div className="w-32 flex justify-end items-center">
            <img
              className="w-12 rounded-md"
              src={NETFLIX_AVATAR}
              alt="nav-logo"
            />
            <span className="cursor-pointer" onClick={handleProfileExpanded}>
              🔻
            </span>
          </div>
          {isProfileExpanded && (
            <div className="p-2 text-white font-bold bg-gradient-to-bl from-black rounded-md">
              <ul className="text-right ">
                <li className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
                <li>My Profile</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
