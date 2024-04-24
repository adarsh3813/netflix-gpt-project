export const checkValidData = (
  email,
  password,
  name = { current: { value: "Adarsh" } }
) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name.current.value);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email.current.value
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password.current.value
    );

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email format is not valid";
  if (!isPasswordValid)
    return "Password is not Valid, please use a upper case and special character";

  return null;
};
