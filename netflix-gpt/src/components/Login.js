import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
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
    if (!message) {
      email.current.value = "";
      password.current.value = "";
      name.current.value = "";
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-image"
        />
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
