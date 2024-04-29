import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { LOGIN_BACKGROUND_URL } from "../utils/utils";

import Header from "./Header";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleSignin = () => {
    setIsSignInForm(!isSignInForm);
  };
  const validateData = () => {
    let message = "";
    if (isSignInForm) message = checkValidData(email, password);
    else message = checkValidData(email, password, name);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BACKGROUND_URL} alt="login-background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-300 py-1">{errorMessage}</p>
        {isSignInForm ? (
          <button
            className="p-3 my-6 w-full bg-red-600 rounded-lg"
            onClick={validateData}
          >
            Login
          </button>
        ) : (
          <button
            className="p-3 my-6 w-full bg-red-600 rounded-lg"
            onClick={validateData}
          >
            Create Account
          </button>
        )}
        <p className="py-4 cursor-pointer" onClick={toggleSignin}>
          {isSignInForm
            ? "New to Netflix? Signup now"
            : "Already a user? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
